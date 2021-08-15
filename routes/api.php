<?php

use App\Http\Controllers\API\UserController;
use App\Http\Controllers\FaqsController;
use App\Http\Controllers\GreenParkIntroController;
use App\Http\Controllers\GreenParkPropController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideosController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('videos', [VideosController::class, 'getAllVideos']);
Route::get('faqs', [FaqsController::class, 'getAllFaqs']);
Route::get('gr_intro', [GreenParkIntroController::class, 'getGrIntro']);
Route::get('gr_prop', [GreenParkPropController::class, 'getGrProp']);
Route::post('mail', [\App\Http\Controllers\SendEmailsController::class, 'sendEmail']);
Route::post('subscribe', [\App\Http\Controllers\SendEmailsController::class, 'subScribeToMailingList']);
Route::post('book_tour', [\App\Http\Controllers\SendEmailsController::class, 'bookTour']);
Route::get('articles', [\App\Http\Controllers\ArticlesController::class, 'getAllArticles']);
Route::get('article/{id}', [\App\Http\Controllers\ArticlesController::class, 'fetchArticle']);
Route::get('recent-article', [\App\Http\Controllers\ArticlesController::class, 'fetchRecentArticle']);
Route::delete('delete-article/{id}', [\App\Http\Controllers\ArticlesController::class, 'deleteArticle']);
Route::get('get-all-board', [\App\Http\Controllers\ApiController::class, 'getAllBoard']);
Route::get('get-all-team', [\App\Http\Controllers\ApiController::class, 'getAllTeam']);
Route::get('get-all-property', [\App\Http\Controllers\ApiController::class, 'getAllProperty']);
Route::get('fetch-property/{title}', [\App\Http\Controllers\ApiController::class, 'getProperty']);
Route::get('get-all-property-type', [\App\Http\Controllers\ApiController::class, 'getAllPropertyType']);
Route::get('get-all-video', [\App\Http\Controllers\ApiController::class, 'getAllVideo']);

Route::post('create-article', [\App\Http\Controllers\ArticlesController::class, 'createArticle']);
Route::post('create-board', [\App\Http\Controllers\ApiController::class, 'createBoard']);
Route::post('edit-board', [\App\Http\Controllers\ApiController::class, 'editBoard']);
Route::delete('delete-board/{id}', [\App\Http\Controllers\ApiController::class, 'deleteBoard']);

Route::post('create-team', [\App\Http\Controllers\ApiController::class, 'createTeam']);
Route::post('edit-team', [\App\Http\Controllers\ApiController::class, 'editTeam']);
Route::delete('delete-team/{id}', [\App\Http\Controllers\ApiController::class, 'deleteTeam']);

Route::post('create-property', [\App\Http\Controllers\ApiController::class, 'createProperty']);
Route::post('edit-property', [\App\Http\Controllers\ApiController::class, 'editProperty']);
Route::delete('delete-property/{id}', [\App\Http\Controllers\ApiController::class, 'deleteProperty']);


Route::post('create-property-type', [\App\Http\Controllers\ApiController::class, 'createPropertyType']);
Route::post('edit-property-type', [\App\Http\Controllers\ApiController::class, 'editPropertyType']);
Route::delete('delete-property-type/{id}', [\App\Http\Controllers\ApiController::class, 'deletePropertyType']);

Route::post('create-video', [\App\Http\Controllers\ApiController::class, 'createVideo']);
Route::put('edit-video', [\App\Http\Controllers\ApiController::class, 'editVideo']);
Route::delete('delete-video/{id}', [\App\Http\Controllers\ApiController::class, 'deleteVideo']);

Route::post('create-faq', [\App\Http\Controllers\ApiController::class, 'createFaq']);
Route::post('edit-faq', [\App\Http\Controllers\ApiController::class, 'editFaq']);
Route::delete('delete-faq/{id}', [\App\Http\Controllers\ApiController::class, 'deleteFaq']);

Route::post('create-job', [\App\Http\Controllers\ApiController::class, 'createJob']);
Route::post('edit-job', [\App\Http\Controllers\ApiController::class, 'editJob']);
Route::delete('delete-job/{id}', [\App\Http\Controllers\ApiController::class, 'deleteJob']);

Route::post('create-image', [\App\Http\Controllers\ApiController::class, 'createImage']);
Route::delete('delete-image/{id}', [\App\Http\Controllers\ApiController::class, 'deleteImage']);

Route::post('edit-article', [\App\Http\Controllers\ApiController::class, 'editArticle']);
Route::post('create-doc', [\App\Http\Controllers\ApiController::class, 'createDoc']);
Route::delete('delete-docs/{id}', [\App\Http\Controllers\ApiController::class, 'deleteDoc']);

Route::post('edit-referrals', [\App\Http\Controllers\ApiController::class, 'editReferrals']);
Route::post('create-referrals', [\App\Http\Controllers\ApiController::class, 'createReferrals']);
Route::delete('delete-referral/{id}', [\App\Http\Controllers\ApiController::class, 'deleteReferrals']);
Route::post('create-referral-lead/{id}', [\App\Http\Controllers\ApiController::class, 'createReferralLeads']);

Route::get('get-all-faq', [\App\Http\Controllers\ApiController::class, 'getAllFaq']);
Route::get('fetch-referrals', [\App\Http\Controllers\ApiController::class, 'fetchDashboardDetails']);
Route::get('list-referrals', [\App\Http\Controllers\ApiController::class, 'getAllReferrals']);
Route::get('get-referral/{id}', [\App\Http\Controllers\ApiController::class, 'fetchReferral']);
Route::get('list-docs', [\App\Http\Controllers\ApiController::class, 'getAllDocs']);
Route::get('get-images/{propertyId}', [\App\Http\Controllers\ApiController::class, 'getAllImage']);
Route::get('get-all-job', [\App\Http\Controllers\ApiController::class, 'getAllJob']);





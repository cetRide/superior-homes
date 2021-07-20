<?php

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

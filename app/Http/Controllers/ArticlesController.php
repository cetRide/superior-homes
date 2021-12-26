<?php

namespace App\Http\Controllers;

use App\Models\ShkArticles;
use App\Models\ShkJobs;
use Carbon\Carbon;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ArticlesController extends Controller
{
    public function getAllArticles()
    {
        $articles = [];
        foreach (ShkArticles::all() as $article) {
            $articles[] = [
                'date' => date('M d, Y', strtotime($article->date)),
                'title' => $article->title,
                'img' => $article->img,
                'abt' => $article->abt,
                'auth' => $article->auth,
                'id' => $article->id,
                'day' => date('d', strtotime($article->date)),
                'month' => date('M', strtotime($article->date)),
            ];
        }
        return response($articles, 200);
    }

    public function fetchArticle(Request $request)
    {
        $article = ShkArticles::where('title', $request->id)->get();
        $article[0]->date = date('M d, Y', strtotime($article[0]->date));
        return response($article, 200);
    }

    public function fetchRecentArticle()
    {
        $article = ShkArticles::orderBy('date', 'ASC')->get()->toJson(JSON_PRETTY_PRINT);
        return response($article, 200);
    }
    public function createArticle(Request $request)
    {
        $article = new ShkArticles();
        //Save images
        $article->title = $request->title;
        $article->abt = $request->abt;
        $article->date = Carbon::now()->toDateTimeString();
        $article->auth = $request->auth;
        if (!is_null($request->file('file'))) {
//            $image_url = Cloudinary::upload($request->file('file')->getRealPath())->getSecurePath();
            $path = Storage::disk('s3')->put('images/uploads/articles', $request->file('file'));
            $image_url = 'https://superiorhomes.s3.eu-west-2.amazonaws.com/' . $path;
            $article->img = $image_url;
        }

        $article->save();
        return response($article, 200);
    }

    public function deleteArticle(Request $request)
    {
        $property = ShkArticles::find($request->id);
        $property->forceDelete();
        return response('Deleted successfully', 200);
    }

}

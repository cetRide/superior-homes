<?php

namespace App\Http\Controllers;

use App\Models\ShkArticles;
use Illuminate\Http\Request;

class ArticlesController extends Controller
{
    public function getAllArticles() {
        $articles = ShkArticles::get()->toJson(JSON_PRETTY_PRINT);
        return response($articles, 200);
    }

    public function fetchArticle(Request $request) {

        $article = ShkArticles::where('id', $request->id)->get()->toJson(JSON_PRETTY_PRINT);
        return response($article, 200);
    }
    public function fetchRecentArticle() {
        $article = ShkArticles::orderBy('date', 'ASC')->get()->toJson(JSON_PRETTY_PRINT);
        return response($article, 200);
    }
}

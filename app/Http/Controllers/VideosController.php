<?php

namespace App\Http\Controllers;

use App\Models\ShkVideos;

class VideosController extends Controller
{
    public function getAllVideos() {
        $videos = ShkVideos::get()->toJson(JSON_PRETTY_PRINT);
        return response($videos, 200);
    }
}

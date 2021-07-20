<?php

namespace App\Http\Controllers;

use App\Models\ShkGrIntro;

class GreenParkIntroController extends Controller
{
    public function getGrIntro() {
        $grIntro = ShkGrIntro::get()->toJson(JSON_PRETTY_PRINT);
        return response($grIntro, 200);
    }
}

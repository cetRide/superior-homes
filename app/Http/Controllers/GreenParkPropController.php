<?php

namespace App\Http\Controllers;

use App\Models\ShkGrProp;

class GreenParkPropController extends Controller
{
    public function getGrProp() {
        $grProp = ShkGrProp::get()->toJson(JSON_PRETTY_PRINT);
        return response($grProp, 200);
    }
}

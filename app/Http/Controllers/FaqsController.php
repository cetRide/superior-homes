<?php

namespace App\Http\Controllers;

use App\Models\ShkFaqs;

class FaqsController extends Controller
{
    public function getAllFaqs() {
        $faqs = ShkFaqs::get()->toJson(JSON_PRETTY_PRINT);
        return response($faqs, 200);
    }
}


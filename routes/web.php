<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return view('main');
})->where('any', '.*');

Route::get('/admin/{any}', function () {
    return view('admin');
})->where('any', '.*');

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkFaqs extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'shk_faqs';
    protected $fillable = ['qtn', 'ans'];
}

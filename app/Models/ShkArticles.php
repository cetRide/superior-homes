<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkArticles extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $table = 'shk_articles';
    protected $fillable = ['title', 'img', 'date', 'auth', 'abt'];
}

<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkJobs extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'shk_jobs';
    protected $fillable = ['loc', 'img', 'date', 'title', 'descr', 'app'];
}



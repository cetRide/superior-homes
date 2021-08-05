<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkVideos extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'shk_video';
    protected $fillable = ['link', 'title', 'abt'];
}

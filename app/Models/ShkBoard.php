<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use CloudinaryLabs\CloudinaryLaravel\MediaAlly;
class ShkBoard extends Model
{
    use HasFactory;
    use MediaAlly;
    public $timestamps = false;
    protected $table = 'shk_board';
    protected $fillable = ['name', 'title', 'abt', 'img', 'twit', 'inst', 'fb'];
}

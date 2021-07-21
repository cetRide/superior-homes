<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkSubs extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'shk_subs';
    protected $fillable = ['addr'];
}

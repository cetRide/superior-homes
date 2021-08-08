<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkTeam extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'shk_team';
    protected $fillable = ['name', 'title', 'abt', 'img'];
}

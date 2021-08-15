<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkDocs extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'shk_docs';
    protected $fillable = ['name', 'path', 'date'];
}

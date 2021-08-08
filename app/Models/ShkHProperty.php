<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkHProperty extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'shk_h_pr';
    protected $fillable = ['subt', 'title', 'art', 'img'];

    public function propertyTypes()
    {
        return $this->hasMany(ShkPropertyTypes::class);
    }

    public function gallery()
    {
        return $this->hasMany(ShkGallery::class);
    }
}

<?php


namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkGallery extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'shk_gallery';
    protected $fillable = ['img', 'shk_h_property_id'];

    public function property()
    {
        return $this->belongsTo(ShkHProperty::class);
    }
}

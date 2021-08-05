<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkPropertyTypes extends Model
{
    use HasFactory;

    protected $table = 'shk_property_types';

    public function property()
    {
        return $this->belongsTo(ShkHProperty::class);
    }
}

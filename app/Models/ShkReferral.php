<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkReferral extends Model
{
    use HasFactory;

    protected $table = 'shk_referrals';

    public function leads()
    {
        return $this->hasMany(ShkReferralLeads::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ShkReferralLeads extends Model
{
    use HasFactory;
    protected $table = 'shk_referral_leads';

    public function referral()
    {
        return $this->belongsTo(ShkReferral::class, 'shk_referral_id');
    }
}

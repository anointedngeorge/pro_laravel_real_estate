<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Referals extends Model
{
    // sponsor_id → The person who referred someone (the upline).
    // referred_id → The person who was referred (the downline).
    protected $fillable = [
        'sponsor_id',
        'referred_id',
    ];
    /** @use HasFactory<\Database\Factories\ReferalsFactory> */
    use HasFactory;

    // The sponsor who referred this agent
    public function sponsor()
    {
        return $this->belongsTo(Realtors::class, 'sponsor_id');
    }

    // The referred agent
    public function referred()
    {
        return $this->belongsTo(Realtors::class, 'referred_id');
    }

}

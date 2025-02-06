<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Realtors extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'sponsor_code',
    ];
    /** @use HasFactory<\Database\Factories\RealtorsFactory> */
    use HasFactory;


    // A realtor can refer many other realtors (first generation)
    public function referrals()
    {
        return $this->hasMany(Referals::class, 'sponsor_id');
    }

    // A realtor can also be referred by another realtor (second generation)
    public function referredBy()
    {
        return $this->hasMany(Referals::class, 'referred_id');
    }

    public function fullname()
    {
        return "{$this->first_name} {$this->last_name}";
    }

}

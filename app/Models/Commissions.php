<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commissions extends Model
{

    protected $fillable = [
        'propertysales_id',
        'client_id',
        'amount_paid',
        'first_generation_commission',
        'second_generation_commission',
        'third_generation_commission',
        'status'
    ];
    /** @use HasFactory<\Database\Factories\CommissionsFactory> */
    use HasFactory;

    public function propertysales()
    {
        return $this->belongsTo(PropertySales::class, 'propertysales_id');
    }

    public function propertyclient()
    {
        return $this->BelongsTo(related: Client::class, foreignKey: 'client_id');
    }


}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientsLedger extends Model
{

    protected $fillable = [
        'property_sales_id',
        'client_id',
        'first_commission',
        'second_commission',
        'third_commission',
        'amount_remaining',
        'amount_paid'
    ];

    /** @use HasFactory<\Database\Factories\ClientFactory> */
    use HasFactory;
}

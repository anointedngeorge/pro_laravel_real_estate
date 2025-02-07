<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Property extends Model
{


    protected $fillable = [
        'name',
        'description',
        'quantity',
        'image_path',
        'branch_id'
    ];


    /** @use HasFactory<\Database\Factories\PropertyFactory> */
    use HasFactory;

    public function propertyClients()
    {
        return $this->hasManyThrough(
            Client::class,
            PropertySales::class,
            'property_id',  // Foreign key on property_sales table
            'id',           // Local key on clients table
            'id',           // Local key on properties table
            'client_id'     // Foreign key on property_sales table
        )->distinct(); // Ensures unique clients
    }

   

}

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
}

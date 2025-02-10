<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class PropertyBlockPlots extends Model
{
    protected $fillable = [
        'name',
        'property_block_id'
    ];
}

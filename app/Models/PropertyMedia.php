<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertyMedia extends Model
{
    protected $fillable = [
        'media_path',
        'type',
        'property_id'
    ];
    /** @use HasFactory<\Database\Factories\PropertyMediaFactory> */
    use HasFactory;

    public function property()
    {
        return $this->belongsTo(Property::class, 'property_id');
    }
}

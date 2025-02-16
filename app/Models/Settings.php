<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{

    protected $fillable = [
        'name',
        'description'
    ];
    /** @use HasFactory<\Database\Factories\SettingsFactory> */
    use HasFactory;
}

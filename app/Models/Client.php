<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
    ];
    /** @use HasFactory<\Database\Factories\ClientFactory> */
    use HasFactory;


    public function fullname()
    {
        return "{$this->first_name} {$this->last_name}";
    }
}

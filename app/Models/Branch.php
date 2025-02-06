<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{

    protected $fillable = [
        'office','phone','manager','description',
    ];
    /** @use HasFactory<\Database\Factories\BranchFactory> */
    use HasFactory;

    
}

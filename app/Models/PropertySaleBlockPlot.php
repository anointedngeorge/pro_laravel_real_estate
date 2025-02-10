<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PropertySaleBlockPlot extends Model
{
    use HasFactory;

    // Explicitly set the table name
    protected $table = 'property_sale_block_plot';

    // Define fillable fields for mass assignment
    protected $fillable = [
        'property_sale_id',
        'block_plot_id',
    ];

    // Disable timestamps if the table does not have created_at and updated_at
    public $timestamps = false;

    // Define relationships if applicable
    public function propertySale()
    {
        return $this->belongsTo(PropertySales::class, 'property_sale_id');
    }

    public function blockPlot()
    {
        return $this->belongsTo(PropertyBlockPlots::class, 'block_plot_id');
    }
}

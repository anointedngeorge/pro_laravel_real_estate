<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PropertySales extends Model
{
    protected $appends = ['ledger_list'];
    protected $fillable = [
        'property_id',
        'client_id',
        'quantity',
        'amount',
        'initial_amount_paid',
        'first_generation_commission',
        'second_generation_commission',
        'third_generation_commission',
        'first_generation',
        'second_generation',
        'third_generation',
        'sponsor_code',
        'block_id',
        'tracker'
    ];
    /** @use HasFactory<\Database\Factories\PropertySalesFactory> */
    use HasFactory;

    public function whichproperty()
    {
        return $this->BelongsTo(related: Property::class, foreignKey: 'property_id');
    }
    public function propertyclient()
    {
        return $this->BelongsTo(related: Client::class, foreignKey: 'client_id');
    }

    public function firstgen()
    {
        return $this->BelongsTo(related: Realtors::class, foreignKey: 'first_generation');
    }


    public function secondgen()
    {
        return $this->BelongsTo(related: Realtors::class, foreignKey: 'second_generation');
    }


    public function thirdgen()
    {
        return $this->BelongsTo(related: Realtors::class, foreignKey: 'third_generation');
    }

    public function blockPlots()
    {
        return $this->belongsToMany(PropertyBlockPlots::class, 'property_sale_block_plot');
    }


    protected static function boot()
    {
        parent::boot();

        static::creating(function ($propertySale) {
            if (!$propertySale->tracker) {
                $propertySale->tracker = now()->toDateString();
            }
        });
    }



    public function balance()
    {
        return (float) $this->amount - (float) $this->ledger_summation;
    }




    public function ledgers()
    {
        return $this->hasMany(ClientsLedger::class, 'property_sales_id');
    }

    /**
     * Accessor to get the ledger list
     */
    public function getLedgerListAttribute()
    {
        return $this->ledgers()->get();
    }
}

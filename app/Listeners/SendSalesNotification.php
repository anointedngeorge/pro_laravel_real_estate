<?php

namespace App\Listeners;

use App\Events\PropertySaleEvent;
use App\Models\ClientsLedger;
use App\Models\DateTracker;
use App\Models\PropertySales;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Foundation\Auth\User;

class SendSalesNotification
{

    /**
     * Handle the event.
     */
    public function handle(PropertySaleEvent $event): void
    {
        $propertysale = $event->propertysales;


        $client_id = $propertysale->client_id;
        $amount = $propertysale->amount;
        // 
        $id = $propertysale->id;
        $initial_amount_paid = $propertysale->initial_amount_paid;
        $ledgerTotalAmountRemaining = max(0, (float) $amount - (float) $initial_amount_paid);


        $first_commission = (int) $propertysale->first_generation_commission / 100 * (float) $initial_amount_paid;
        $second_commission = (int) $propertysale->second_generation_commission / 100 * (float) $initial_amount_paid;
        $third_commission = (int) $propertysale->third_generation_commission / 100 * (float) $initial_amount_paid;


        // register for a new ledger 
        ClientsLedger::create([
            'client_id' => $client_id,
            'property_sales_id' => $id,
            'amount_paid' => $initial_amount_paid,
            'amount_remaining' => $ledgerTotalAmountRemaining,
            'first_commission' => $first_commission,
            'second_commission' => $second_commission,
            'third_commission' => $third_commission,
            'created_at' => now(),
            'updated_at' => now(),
        ]);


        $propertysale->ledger_summation = $initial_amount_paid;
        $propertysale->save();

        // register the date listener
        DateTracker::updateOrCreate(
            ['tracker' => now()->toDateString()]
        );
    }
}

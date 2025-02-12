<?php

namespace App\Listeners;

use App\Events\PropertySaleEvent;
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
        $property = $event->propertysales;
        
        // register the date listener
        DateTracker::updateOrCreate(
            ['tracker' => now()->toDateString()]
        );
    }
}

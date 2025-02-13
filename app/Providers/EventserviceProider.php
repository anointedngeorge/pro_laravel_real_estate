<?php

namespace App\Providers;
use App\Events\PropertySaleEvent;
use App\Events\RealtorsReferralProcess;
use App\Listeners\SendRealtorsReferralListener;
use App\Listeners\SendSalesNotification;
use Illuminate\Support\ServiceProvider;

class EventserviceProider extends ServiceProvider
{
    protected $listen = [
        PropertySaleEvent::class => [
            SendSalesNotification::class,
        ],
        RealtorsReferralProcess::class => [
            SendRealtorsReferralListener::class,
        ],
    ];

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}

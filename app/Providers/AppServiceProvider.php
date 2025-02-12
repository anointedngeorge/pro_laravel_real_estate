<?php

namespace App\Providers;

use App\Events\PropertySaleEvent;
use App\Listeners\SendSalesNotification;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    protected $listen = [
        PropertySaleEvent::class => [
            SendSalesNotification::class,
        ]
    ];
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
    }
}

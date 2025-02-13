<?php

namespace App\Listeners;

use App\Events\RealtorsReferralProcess;
use App\Models\Referals;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendRealtorsReferralListener
{

    /**
     * Handle the event.
     */
    public function handle(RealtorsReferralProcess $event): void
    {
        $sponsor = $event->sponsored;
        $referred = $event->referred;

        // register the referrals
        Referals::create([
            'sponsor_id' => $sponsor->id,
            'referred_id' => $referred->id,
        ]);
    }
}

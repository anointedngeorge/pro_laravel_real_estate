<?php

namespace App\Events;

use App\Models\Realtors;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class RealtorsReferralProcess
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */

    // public $sponsored_realtor;
    // public $referred_realtor;
    public function __construct(public Realtors $sponsored, public Realtors $referred)
    {
        $this->sponsored = $sponsored;
        $this->referred = $referred;
    }

}

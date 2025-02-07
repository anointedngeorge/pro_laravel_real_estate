<?php

namespace App\Http\Controllers;

use App\Http\Resources\RealtorsResource;
use App\Models\Realtors;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    // referralLink

    public function referralLink($sponsor_code)
    {
        $realtor = Realtors::query()->where('sponsor_code', $sponsor_code)->first();

        return inertia('Frontend/ReferralLink', [
            'sponsor_code' => $sponsor_code,
            'realtor' => new RealtorsResource($realtor)
        ]);
    }
}

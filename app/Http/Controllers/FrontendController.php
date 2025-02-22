<?php

namespace App\Http\Controllers;

use App\Events\RealtorsReferralProcess;
use App\Http\Requests\StoreRealtorsRequest;
use App\Http\Resources\PropertyResource;
use App\Http\Resources\RealtorsResource;
use App\Models\Property;
use App\Models\Realtors;
use App\Models\Settings;
use Illuminate\Http\Request;
use Session;
use Str;

class FrontendController extends Controller
{
    // referralLink

    public function index()
    {
        $website = Settings::where('name', 'website')->value('description') ?: 'Default';

        return inertia("Frontend/Websites/{$website}/Index", [
            'website' => strtolower($website)
        ]);
    }


    public function referralLink($sponsor_code)
    {
        $realtor = Realtors::query()->where('sponsor_code', $sponsor_code)->first();

        return inertia('Frontend/ReferralLink', [
            'sponsor_code' => $sponsor_code,
            'realtor' => new RealtorsResource($realtor),
            'message' => Session('message')
        ]);
    }


    private function settings($search)
    {
        return Settings::where('name', $search)->value('description') ?: '...';
    }

    public function pages($pagename)
    {
        $website = $this->settings('website') ?: 'Default';
        $query = Request()->query();


        // properties
        $page_query = $query['page'] ?? 10;
        $properties = Property::query()->orderBy('created_at', 'desc')->paginate($page_query);

        try {
            $credentials = [
                "about" => [
                    'title' => "About us | {$this->settings('title')}",
                    'content' => $this->settings('about')
                ],

                "properties" => [
                    'title' => "List Properties | {$this->settings('title')}",
                    'contents' => PropertyResource::collection($properties)
                ],
                // another page
            ];
            $found_data = $credentials[$pagename];
            // dd($found_data);
            $ucfirst = ucfirst($pagename);
            return inertia("Frontend/Websites/{$website}/{$ucfirst}", [
                "data" => $found_data
            ]);
        } catch (\Throwable $th) {
            return to_route('frontend.index');
        }
    }

    public function property(Property $property)
    {
        $website = $this->settings('website') ?: 'Default';

        try {
            $properties = Property::query()->orderBy('created_at', 'desc')->paginate(10);
            return inertia("Frontend/Websites/{$website}/Property", [
                "property" => new PropertyResource($property),
                'properties' => $properties,
            ]);
        } catch (\Throwable $th) {
            return to_route('frontend.index');
        }
    }

    // register referrals
    public function realtorReferrals(StoreRealtorsRequest $request)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        $sponsored_code = $request['sponsored_code'];
        // dd($request);

        $sponsored = Realtors::where('sponsor_code', $sponsored_code);

        // check if the sponsor code exists
        if (!$sponsored->exists()) {
            return to_route('frontend.referralLink', ['sponsor_code' => $sponsored_code])
                ->with('message', 'Failed to register Realtor');
        }

        $sponsored = $sponsored->first();
        // 
        if ($image) {
            $data['image_path'] = $image->store('realtors/' . Str::random(), 'public');
        }
        // dd($data);
        $referred = Realtors::create($data);
        // events fireup
        RealtorsReferralProcess::dispatch($sponsored, $referred);

        return to_route('frontend.confirmation', [
            'referral' => new RealtorsResource($referred)
        ])
            ->with('message', 'Realtor was created');
    }

    public function Confirmation()
    {
        return inertia('Frontend/ReferralComfirmation');
    }
}

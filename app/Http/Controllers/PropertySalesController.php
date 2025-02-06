<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePropertySalesRequest;
use App\Http\Requests\UpdatePropertySalesRequest;
use App\Http\Resources\ClientResource;
use App\Http\Resources\PropertyResource;
use App\Http\Resources\PropertySalesResource;
use App\Http\Resources\RealtorsResource;
use App\Models\Client;
use App\Models\Property;
use App\Models\PropertySales;
use App\Models\Realtors;
use App\Models\Referals;
use Illuminate\Http\JsonResponse;
use Response;

class PropertySalesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $propertities = Property::all();
        $clients = Client::all();


        return inertia('Admin/PropertySales/Create', [
            'propertities' => PropertyResource::collection($propertities),
            'clients' => ClientResource::collection($clients),
            'message' => Session('message'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePropertySalesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PropertySales $propertySelling)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PropertySales $propertySelling)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePropertySalesRequest $request, PropertySales $propertySelling)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PropertySales $propertySelling)
    {
        //
    }


    public function sponsor($sponsor)
    {
        // sponsor_id → The person who referred someone (the upline).
        // referred_id → The person who was referred (the downline).
        
        // Get the first-generation agent (who made the sale)
        $firstGen = Realtors::where('sponsor_code', $sponsor)->first();

        if (!$firstGen) {
            return Response::json([
                'success' => false,
                'error' => "Sponsor with code $sponsor does not exist.",
            ], 404);
        }

        // Get second-generation (who referred first-generation)
        $secondGen = Referals::where('referred_id', $firstGen->id)->first();
        $secondGenRealtor = $secondGen ? Realtors::where('id', $secondGen->sponsor_id)->first() : null;

        // Get third-generation (who referred_id second-generation)
        $thirdGen = $secondGenRealtor ? Referals::where('referred_id', $secondGenRealtor->id)->first() : null;
        $thirdGenRealtor = $thirdGen ? Realtors::where('id', $thirdGen->sponsor_id)->first() : null;

        // Prepare response
        return Response::json([
            'success' => true,
            'first_generation' => new RealtorsResource($firstGen),
            'second_generation' => $secondGenRealtor ? new RealtorsResource($secondGenRealtor) : null,
            'third_generation' => $thirdGenRealtor ? new RealtorsResource($thirdGenRealtor) : null,
        ]);

    }


}

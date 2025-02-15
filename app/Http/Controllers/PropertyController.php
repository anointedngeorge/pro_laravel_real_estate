<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Http\Resources\ClientResource;
use App\Http\Resources\PropertyBlockPlotsResource;
use App\Http\Resources\PropertyBlockResource;
use App\Http\Resources\PropertyResource;
use App\Http\Resources\PropertySalesResource;
use App\Models\Property;
use App\Models\PropertyBlockPlots;
use App\Models\PropertyBlocks;
use Request;
use Storage;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $queryParams = Request::query();


        $limit = Request('limit') ?? 10;
        $query = Property::query()->paginate(perPage: $limit);

        // 
        return inertia('Admin/Property/Index', [
            'property' => PropertyResource::collection($query),
            'queryParams' => $queryParams ?: null,
            'message' => Session('message'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePropertyRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {

        $propertyBlocks = PropertyBlocks::where('property_id', $property->id)->get();

        // Fetch all block plots
        $propertyBlockPlots = PropertyBlockPlots::whereIn('property_block_id', $propertyBlocks->pluck('id'))->get();

        // dd($propertyBlocks);
        return inertia('Admin/Property/Show', props: [
            'property' => new PropertyResource($property),
            'propertyBlocks' => PropertyBlockResource::collection($propertyBlocks),
            'propertyBlockPlots' => PropertyBlockPlotsResource::collection($propertyBlockPlots),
            'message' => Session('message'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        return inertia('Admin/Property/Edit', [
            'property' => new PropertyResource($property),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePropertyRequest $request, Property $property)
    {

        $data = $request->validated();
        $name = $property->name;
        // remove file if it exists
        if ($property->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($property->image_path));
        }

        $property->update($data);
        return to_route('property.index')->with('message', "Property $name was updated");
        ;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        $name = $property->name;
        if ($property->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($property->image_path));
        }
        $property->delete();
        return to_route('property.index')->with('message', "Property $name was deleted.");
    }


    public function propertyBlocks(Property $property)
    {
        $available_property = new PropertyResource($property);
        return inertia('Admin/Property/CreateBlocks', [
            'property' => $available_property,
        ]);
    }

    // 

    public function propertyClients(Property $property)
    {
        // Fetch unique clients and their related sales for this property
        $clients = $property->propertyClients()->with([
            'propertySales' => function ($query) use ($property) {
                $query->where('property_id', $property->id); // Ensure we fetch only relevant sales
            }
        ])->get();

        return inertia('Admin/Property/ListClients', [
            'property' => new PropertyResource($property),
            'clients' => $clients->map(function ($client) {
                return [
                    'id' => $client->id,
                    'fullname' => $client->fullname(),

                    'property_sales' => $client->propertySales->map(function ($sale) {
                        return [
                            'id' => $sale->id,
                            'quantity' => $sale->quantity,
                            'amount' => $sale->amount,
                            'initial_amount_paid' => $sale->initial_amount_paid,
                            'property' => new PropertyResource($sale->whichproperty),
                            'date' => $sale->created_at->format('Y-m-d'),
                        ];
                    }),
                ];
            }),
        ]);
    }


}

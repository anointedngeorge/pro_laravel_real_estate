<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePropertyBlockPlotsRequest;
use App\Http\Requests\UpdatePropertyBlockPlotsRequest;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use App\Models\PropertyBlockPlots;
use App\Models\PropertyBlocks;

class PropertyBlockPlotsController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePropertyBlockPlotsRequest $request)
    {


        $data = $request->validated();

        $property = Property::query()->where('id', $request['property_id'])->first();

        PropertyBlockPlots::create([
            'name' => $data['name'],
            'property_block_id' => $data['property_block_id']
        ]);

        return to_route('property.show', [
            'property' => new PropertyResource($property),
        ])->with('message', 'Block Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(PropertyBlockPlots $propertyblockplot)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PropertyBlockPlots $propertyblockplot)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePropertyBlockPlotsRequest $request, PropertyBlockPlots $propertyblockplot)
    {
        $data = $request->validated();
        // dd($data);
        $property = Property::query()->where('id', $data['property_id'])->first();
        PropertyBlockPlots::where('id', $propertyblockplot->id)
            ->where('property_block_id', $data['property_block_id'])
            ->update(['name' => $data['name']]);

        return to_route('property.show', [
            'property' => new PropertyResource($property),
        ])->with('message', 'Block Plot Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PropertyBlockPlots $propertyblockplot)
    {
        //
    }
}

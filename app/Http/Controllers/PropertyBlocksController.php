<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePropertyBlocksRequest;
use App\Http\Requests\UpdatePropertyBlocksRequest;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
use App\Models\PropertyBlockPlots;
use App\Models\PropertyBlocks;

class PropertyBlocksController extends Controller
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
    public function store(StorePropertyBlocksRequest $request)
    {
        $data = $request->validated();
        $property = Property::query()->where('id', $request['property_id'])->first();
        PropertyBlocks::create($data);

        return to_route('property.show', [
            'property' => new PropertyResource($property),
        ])->with('message', 'Block Created');
    }

    /**
     * Display the specified resource.
     */
    public function show(PropertyBlocks $propertyblock)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PropertyBlocks $propertyBlock)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePropertyBlocksRequest $request, PropertyBlocks $propertyblock)
    {
        $data = $request->validated();

        $property = Property::query()->where('id', $data['property_id'])->first();
        PropertyBlocks::where('id', $propertyblock->id)
            ->where('property_id', $data['property_id'])
            ->update(['name' => $data['name']]);

        return to_route('property.show', [
            'property' => new PropertyResource($property),
        ])->with('message', 'Block Updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PropertyBlocks $propertyblock)
    {
        //
    }
}

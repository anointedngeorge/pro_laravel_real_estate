<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Http\Resources\PropertyResource;
use App\Models\Property;
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


        $limit = Request('limit') ? Request('limit') : 10;
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
        //
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
        return inertia('Admin/Property/Show', [
            'property' => new PropertyResource($property),
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
}

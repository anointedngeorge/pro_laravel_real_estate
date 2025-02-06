<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreRealtorsRequest;
use App\Http\Requests\UpdateRealtorsRequest;
use App\Http\Resources\RealtorsResource;
use App\Http\Resources\RefferalsResource;
use App\Models\Realtors;
use Request;
use Session;
use Storage;

class RealtorsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $queryParams = Request::query();


        $limit = Request('limit') ? Request('limit') : 10;
        $query = Realtors::query()->paginate(perPage: $limit);

        // 
        return inertia('Admin/Realtors/Index', [
            'realtors' => RealtorsResource::collection($query),
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
    public function store(StoreRealtorsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Realtors $realtor)
    {

        return inertia('Admin/Realtors/Show', [
            'data' => [
                'realtor' => new RealtorsResource($realtor),
                'first' => [],
                'second' => [],
                'third' => [],
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Realtors $realtor)
    {

        return inertia('Admin/Realtors/Edit', [
            'realtor' => new RealtorsResource($realtor),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRealtorsRequest $request, Realtors $realtor)
    {
        $data = $request->validated();
        $name = $realtor->fullname();
        $realtor->update($data);

        return to_route('realtors.index')->with('message', "Realtors $name was updated");
        ;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Realtors $realtor)
    {
        $name = $realtor->fullname();
        // if ($realtor->image_path) {
        //     Storage::disk('public')->deleteDirectory(dirname($realtor->image_path));
        // }
        $realtor->delete();
        return to_route('realtors.index')->with('message', "Realtor $name was deleted.");
    }
}

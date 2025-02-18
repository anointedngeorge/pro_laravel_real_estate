<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreClientRequest;
use App\Http\Requests\UpdateClientRequest;
use App\Http\Resources\ClientResource;
use App\Http\Resources\PropertySalesResource;
use App\Models\Client;
use App\Models\PropertySales;
use Request;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $queryParams = Request::query();


        $limit = Request('limit') ?? 20;
        $query = Client::query()->paginate(perPage: $limit);

        // 
        return inertia('Admin/Client/Index', [
            'client' => ClientResource::collection($query),
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
    public function store(StoreClientRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Client $client)
    {

        return inertia('Admin/Client/Show', [
            'client' => new ClientResource($client),
            'properties' => PropertySalesResource::collection($client->propertySales),
            'message' => Session('message'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Client $client)
    {
        return inertia('Admin/Client/Edit', [
            'client' => new ClientResource($client),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateClientRequest $request, Client $client)
    {
        //
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Client $client)
    {
        $name = $client->fullname();
        // if ($client->image_path) {
        //     Storage::disk('public')->deleteDirectory(dirname($client->image_path));
        // }
        $client->delete();
        return to_route('client.index')->with('message', "Client $name was deleted.");
    }
}

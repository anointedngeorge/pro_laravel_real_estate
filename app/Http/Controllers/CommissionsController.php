<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommissionsRequest;
use App\Http\Requests\UpdateCommissionsRequest;
use App\Http\Resources\CommissionResource;
use App\Models\Commissions;
use Request;

class CommissionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $queryParams = Request::query();


        $limit = Request('limit') ?? 10;
        $query = Commissions::query()->paginate(perPage: $limit);

        // 
        return inertia('Admin/Commissions/Index', [
            'commissions' => CommissionResource::collection($query),
            'queryParams' => $queryParams ?? null,
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
    public function store(StoreCommissionsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Commissions $commission)
    {
        return inertia('Admin/Commissions/Show', [
            'commission' => new CommissionResource($commission),
            'message' => Session('message'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Commissions $commissions)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCommissionsRequest $request, Commissions $commissions)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Commissions $commissions)
    {
        //
    }


    public function changeCommissionStatus($status, $id)
    {
        Commissions::query()->where('id', $id)->update(['status' => $status]);
        return to_route('commission.index')->with('message', "Status Updated {$status}");
    }
}

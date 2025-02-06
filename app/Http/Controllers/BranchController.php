<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBranchRequest;
use App\Http\Requests\UpdateBranchRequest;
use App\Http\Resources\BranchResource;
use App\Models\Branch;
use Request;
use Storage;

class BranchController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $query = Branch::all();
        return inertia('Admin/Branch/Index', [
            'branches' => BranchResource::collection($query),
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
    public function store(StoreBranchRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Branch $branch)
    {
        return inertia('Admin/Branch/Show', [
            'branch' => new BranchResource($branch),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Branch $branch)
    {
        return inertia('Admin/Branch/Edit', [
            'branch' => new BranchResource($branch),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBranchRequest $request, Branch $branch)
    {
        $data = $request->validated();
        $name = $branch->office;
        $branch->update($data);
        return to_route('branch.index')->with('message', "Branch $name was updated");
        ;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Branch $branch)
    {
        $name = $branch->office;
        $branch->delete();
        return to_route('branch.index')->with('message', "Property $name was deleted.");
    }
}

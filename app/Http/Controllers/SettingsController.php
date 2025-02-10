<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSettingsRequest;
use App\Http\Requests\UpdateSettingsRequest;
use App\Models\Settings;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $settings = Settings::all();
        return inertia('Admin/Settings/Index', [
            'settings' => $settings,
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
    public function store(StoreSettingsRequest $request)
    {
        // Get all request keys
        $keys = $request->keys();

        foreach ($keys as $key) {
            Settings::updateOrCreate(
                ['name' => $key],
                ['description' => $request->input($key)]
            );
        }
        return to_route('settings.index')->with('message', 'Settings updated successfully.');
    }


    /**
     * Display the specified resource.
     */
    public function show(Settings $setting)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Settings $setting)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSettingsRequest $request, Settings $setting)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Settings $setting)
    {
        //
    }
}

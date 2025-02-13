<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSettingsRequest;
use App\Http\Requests\UpdateSettingsRequest;
use App\Models\Settings;
use Storage;
use Str;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $settings = Settings::all();
        return inertia('Admin/Settings/Index', [
            'settings_data' => $settings,
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
        $logo = Settings::where('name', 'logo');
        $favicon = Settings::where('name', 'favicon');
        $image_logo = $request['logo'] ?? null;
        $image_favicon = $request['favicon'] ?? null;

        // dd($image_logo);
        if ($image_logo) {
            $st_found = $logo->first();
            if ($logo->exists()) {
                // remove logo if it exists
                Storage::disk('public')->deleteDirectory(dirname($st_found->description));
            }
            $request['logo'] = $image_logo->store('settings/' . Str::random(), 'public');
        }

        // perform for image favicon
        if ($image_favicon) {
            $st_found = $favicon->first();
            if ($favicon->exists()) {
                // remove logo if it exists
                Storage::disk('public')->deleteDirectory(dirname($st_found->description));
            }
            // 
            $request['favicon'] = $image_favicon->store('settings/' . Str::random(), 'public');
        }


        // dd(vars: $st);
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

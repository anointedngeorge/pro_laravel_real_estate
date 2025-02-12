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
        $st = Settings::whereIn('key', 'logo');
        $image_logo = $request['logo'] ?? null;
        if ($image_logo) {
            // if ($realtor->image_path) {
            //     Storage::disk('public')->deleteDirectory(dirname($realtor->image_path));
            // }
            // $request['logo'] = $image_logo->store('settings/' . Str::random(), 'public');
        }


        dd(vars: $st);
        $keys = $request->keys();
        // foreach ($keys as $key) {
        //     Settings::updateOrCreate(
        //         ['name' => $key],
        //         ['description' => $request->input($key)]
        //     );
        // }
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

<?php

namespace Database\Seeders;

use App\Models\Settings;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            ['name' => 'title', 'description' => 'Estate Electronic management application'],
            ['name' => 'first_generation_percentage', 'description' => '15,10,8,2,1,0'],
            ['name' => 'second_generation_percentage', 'description' => '15,10,8,2,1,0'],
            ['name' => 'third_generation_percentage', 'description' => '15,10,8,2,1,0'],
            ['name' => 'phone', 'description' => '+234904532323'],
            ['name' => 'address', 'description' => 'Estate Electronic management application'],
        ];

        Settings::insert($settings);
    }
}

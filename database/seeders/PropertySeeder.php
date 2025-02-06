<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\Property;
use Database\Factories\BranchFactory;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PropertySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // creating property schema
        Property::factory()->count(100)->create();

        // $branch = Branch::all();

        // $branch->each(function ($sponsor) use ($branch) {
        //     $referred = $branch->shuffle()->take(5);
        //     foreach ($referred as $prop) {
        //         Property::update([
        //             'branch_id' => $prop->id,
        //         ]);
        //     }
        // });
    }
}

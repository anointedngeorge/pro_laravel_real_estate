<?php

namespace Database\Seeders;

use App\Models\Realtors;
use App\Models\Referals;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RealtorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Realtors seeding
        // Realtors::factory()
        //     ->count(50)
        //     ->has(Referals::factory()->count(5), 'referred')
        //     ->create();

        $realtors = Realtors::factory()->count(50)->create();

        $realtors->each(function ($sponsor) use ($realtors) {
            $referred = $realtors->where('id', '!=', $sponsor->id)->shuffle()->take(5);

            foreach ($referred as $realtor) {
                if (!Referals::where('referred_id', $realtor->id)->exists()) { // Ensure unique referral
                    Referals::create([
                        'sponsor_id' => $sponsor->id,
                        'referred_id' => $realtor->id,
                    ]);
                }
            }
        });
    }
}

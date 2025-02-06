<?php

namespace Database\Factories;

use App\Models\Realtors;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Referals>
 */
class ReferalsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'sponsor_id' => Realtors::factory(),
            'referred_id' => Realtors::factory(),
        ];
    }
}

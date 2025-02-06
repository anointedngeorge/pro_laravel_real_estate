<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Branch>
 */
class BranchFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'office' => fake()->address(),
            'phone' => fake()->phoneNumber(),
            'manager' => fake()->firstName() . ' ' . fake()->lastName(),
            'description' => fake()->realText(200),
        ];
    }
}

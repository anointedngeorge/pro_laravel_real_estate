<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Settings>
 */
class SettingsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->randomElement([
                'title',
                'first_generation_percentage',
                'second_generation_percentage',
                'third_generation_percentage',
                'phone',
                'address',
            ]),
            'description' => $this->faker->sentence(),
        ];
    }
}

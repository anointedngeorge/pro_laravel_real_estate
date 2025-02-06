<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRealtorsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'sponsor_code' => ['required', 'numeric', 'digits:8'], // Ensures it's a 8-digit number
        ];
    }

    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'sponsor_code' => $this->generateSponsorCode(), // Call the function to generate a number
        ]);
    }

    /**
     * Generate a random 10-digit numeric sponsor code.
     */
    private function generateSponsorCode(): string
    {
        return (string) mt_rand(10000000, 99999999); // Generates a 8-digit number
    }
}

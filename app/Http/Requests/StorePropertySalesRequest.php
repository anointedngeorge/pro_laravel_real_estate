<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePropertySalesRequest extends FormRequest
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
            'property_id' => ['required', 'exists:properties,id'],
            'client_id' => ['required', 'exists:clients,id'],
            'quantity' => ['nullable', 'integer', 'required'],
            'initial_amount_paid' => ['nullable', 'integer'],
            'amount' => ['nullable', 'integer'],

            'sponsor_code' => ['required', 'string'],

            'first_generation_commission' => ['required'],
            'second_generation_commission' => ['nullable'],
            'third_generation_commission' => ['nullable'],

            'first_generation' => ['required', 'exists:realtors,id'],
            'second_generation' => ['required', 'exists:realtors,id'],
            'third_generation' => ['required', 'exists:realtors,id'],
        ];

    }
}

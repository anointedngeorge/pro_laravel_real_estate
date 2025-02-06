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
            'realtor_id' => ['required', 'exists:realtors,id'],
            'client_id' => ['required', 'exists:clients,id'],
            'quantity_purchased' => ['nullable', 'integer'],
            'initial_amount_paid' => ['nullable', 'integer'],
            'balance' => ['nullable', 'integer'],
        ];
    }
}

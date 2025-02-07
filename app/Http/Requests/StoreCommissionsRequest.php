<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreCommissionsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'propertysales_id' => ['required', 'exists:property_sales,id'],
            'client_id' => ['required', 'exists:clients,id'],
            'amount_paid' => ['nullable', 'integer'],
            'first_generation' => ['string', 'nullable'],
            'second_generation' => ['string', 'nullable'],
            'third_generation' => ['string', 'nullable'],
            'status' => ['nullable', Rule::in(['paid', 'Unpaid'])],
        ];
    }
}

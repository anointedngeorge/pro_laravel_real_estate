<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRealtorsRequest extends FormRequest
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
            'image' => ['nullable', 'file', 'image', 'mimes:png,jpg,jpeg', 'max:2048'],
            'account_name' => ['nullable'],
            'account_type' => ['nullable'],
            'account_number' => ['nullable'],
            'bank_name' => ['nullable'],
            'address' => ['nullable'],
            'country' => ['nullable'],
        ];
    }
}

<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Validation\Rule;

class CommissionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap = false;
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'property_sale_id' => new PropertySalesResource($this->propertysales),
            'client_id' => new ClientResource($this->propertyclient),
            'amount_paid' => $this->amount_paid,
            'first_generation_commission' => $this->first_generation_commission,
            'second_generation_commission' => $this->second_generation_commission,
            'third_generation_commission' => $this->third_generation_commission,
            'status' => $this->status,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => (new Carbon($this->due_date))->format('Y-m-d'),

        ];
    }
}

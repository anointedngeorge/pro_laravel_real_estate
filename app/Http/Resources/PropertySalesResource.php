<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertySalesResource extends JsonResource
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
            'property_id' => new PropertyResource($this->whichproperty),
            'client_id' => new ClientResource($this->propertyclient),
            'quantity' => $this->quantity,
            'amount' => $this->amount,
            'balance' => $this->balance(),
            'initial_amount_paid' => $this->initial_amount_paid,
            'first_generation_commission' => $this->first_generation_commission,
            'second_generation_commission' => $this->second_generation_commission,
            'third_generation_commission' => $this->third_generation_commission,
            'first_generation' => new RealtorsResource($this->firstgen),
            'second_generation' => new RealtorsResource($this->secondgen),
            'third_generation' => new RealtorsResource($this->thirdgen),
            'sponsor_code' => $this->sponsor_code,
        ];
    }
}

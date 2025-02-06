<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RefferalsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'sponsor_id' => new RealtorsResource($this->sponsor),
            'referred_id' => new RealtorsResource($this->referredRealtor),
            // 'sponsor_id' => $this->sponsor_id,
            // 'referred_id' => $this->referred_id,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => (new Carbon($this->due_date))->format('Y-m-d'),
        ];
    }
}

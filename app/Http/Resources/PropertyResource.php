<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PropertyResource extends JsonResource
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
            'quantity' => $this->quantity,
            'name' => $this->name,
            'description' => $this->description,
            // 'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            // 'updated_at' => (new Carbon($this->due_date))->format('Y-m-d'),
        ];
    }
}

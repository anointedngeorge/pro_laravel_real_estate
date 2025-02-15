<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Storage;

class RealtorsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap = false;
    public function toArray(Request $request): array
    {
        $status = !empty($this->status) ? $this->status : 'regular';
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'fullname' => $this->fullname(),
            'sponsor_code' => $this->sponsor_code,
            'referralLink' => $this->referralLink(),
            'image_path' => $this->image_path ? Storage::url($this->image_path) : $this->image_path,
            'account_type' => $this->account_type,
            'account_name' => $this->account_name,
            'account_number' => $this->account_number,
            'bank_name' => $this->bank_name,
            'address' => $this->address,
            'country' => $this->country,
            'status' => $status,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => (new Carbon($this->due_date))->format('Y-m-d'),
        ];
    }
}

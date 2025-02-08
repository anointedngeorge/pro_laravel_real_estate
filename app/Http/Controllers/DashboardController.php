<?php

namespace App\Http\Controllers;

use App\Models\PropertySales;
use Carbon\Carbon;
use Date;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

    public function index()
    {
        $currentDate = (new Carbon(now()))->format('d-m-Y');
        // $propertySales = PropertySales::query()->where('created_at', $currentDate)->paginate(5);

        $propertySales = PropertySales::query()->paginate(5);
        // 
        return inertia('Admin/Dashboard', [
            'paid' => 0,
            'unpaid' => 0,
            'sales' => 0,
            'totalProperty' => 90.0,
            'totalClients' => 90,
            'totalRealtors' => 30,
            'totalCommission' => 300000,
            'referrals' => 190,
            'currentDate' => $currentDate,
            'propertySales' => $propertySales,
        ]);
    }

}

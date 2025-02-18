<?php

namespace App\Http\Controllers;

use App\Events\PropertySaleEvent;
use App\Http\Requests\StoreCommissionsRequest;
use App\Http\Requests\StorePropertySalesRequest;
use App\Http\Requests\UpdatePropertySalesRequest;
use App\Http\Resources\ClientLedgerResponse;
use App\Http\Resources\ClientResource;
use App\Http\Resources\PropertyBlockPlotsResource;
use App\Http\Resources\PropertyBlockResource;
use App\Http\Resources\PropertyResource;
use App\Http\Resources\PropertySalesResource;
use App\Http\Resources\RealtorsResource;
use App\Models\Client;
use App\Models\ClientsLedger;
use App\Models\Commissions;
use App\Models\DateTracker;
use App\Models\Property;
use App\Models\PropertyBlockPlots;
use App\Models\PropertyBlocks;
use App\Models\PropertySaleBlockPlot;
use App\Models\PropertySales;
use App\Models\Realtors;
use App\Models\Referals;

use Illuminate\Http\Request as Requests;
use Request;
use Response;

class PropertySalesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $queryParams = Request::query();

        $limit = Request('limit') ?? 10;
        $query = PropertySales::query()->paginate(perPage: $limit);
        return inertia('Admin/PropertySales/Index', [
            'propertysales' => PropertySalesResource::collection($query),
            'message' => Session('message'),
            'queryParams' => $queryParams ?: null,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $propertities = Property::all();
        $clients = Client::all();


        return inertia('Admin/PropertySales/Create', [
            'propertities' => PropertyResource::collection($propertities),
            'clients' => ClientResource::collection($clients),
            'message' => Session('message'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePropertySalesRequest $request)
    {
        $data = $request->validated();
      
        // dd($request);
        $initial_amount = (float) $data['initial_amount_paid'];
        $amount = (float) $data['amount'];
        $client_id = $data['client_id'];
        // $property_sales_id = $data->id;

        $first_generation_commission = $data['first_generation_commission'] ? (int) $data['first_generation_commission'] : 0;
        $second_generation_commission = $data['second_generation_commission'] ? (int) $data['second_generation_commission'] : 0;
        $third_generation_commission = $data['third_generation_commission'] ? (int) $data['third_generation_commission'] : 0;

        $first = $first_generation_commission ? $first_generation_commission / 100 * $initial_amount : 0;
        $second = $second_generation_commission ? $second_generation_commission / 100 * $initial_amount : 0;
        $third = $third_generation_commission ? $third_generation_commission / 100 * $initial_amount : 0;
        $total_commission = array_reduce([
            $first,
            $second,
            $third
        ], function ($a, $b) {
            return $a + $b;
        });

        // create if client_id does not exists
        $sales = PropertySales::create($data);
        if ($sales) {
            $commission_request = [
                'amount_paid' => $initial_amount,
                'propertysales_id' => $sales->id,
                'client_id' => $client_id,
                'first_generation_commission' => $first,
                'second_generation_commission' => $second,
                'third_generation_commission' => $third,
            ];

            // register all associated plots
            foreach ($data['block_plot_ids'] as $key) {
                PropertySaleBlockPlot::create([
                    'property_sale_id' => $sales->id,
                    'block_plot_id' => $key,
                ]);
            }
            // create the commissions table
            Commissions::create($commission_request);

            // fire up an event
            PropertySaleEvent::dispatch($sales);
            return to_route('propertysales.index')->with('message', "Sales Record Created");
        }

        return to_route('propertysales.index')->with('message', "Could create a new record.");
    }

    /**
     * Display the specified resource.
     */
    public function show(PropertySales $propertysale)
    {
        return inertia('Admin/PropertySales/Show', [
            'propertysales' => new PropertySalesResource($propertysale),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PropertySales $propertysale)
    {

        $propertities = Property::all();
        $clients = Client::all();

        return inertia('Admin/PropertySales/Edit', [
            'propertysales' => new PropertySalesResource($propertysale),
            'propertities' => PropertyResource::collection($propertities),
            'clients' => ClientResource::collection($clients),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePropertySalesRequest $request, PropertySales $propertysale)
    {
        //
    }
    public function PropertySalesLedger(Requests $request, PropertySales $propertysale)
    {
        $amount_to_pay = (float) $request->input('amount_paid');
        $client_id = $propertysale->client_id;
        $amount = $propertysale->amount;
        // 
        $id = $propertysale->id;
        // summation of all ledger amount  paid
        $ledgerTotalAmountPaid = (float) ClientsLedger::where([
            'client_id' => $client_id,
            'property_sales_id' => $id,
        ])->sum('amount_paid') + (float) $amount_to_pay;


        // dedot total amount from amount, and save it to the property_sales table
        $ledgerTotalAmountRemaining = max(0, (float) $amount - (float) $ledgerTotalAmountPaid);
        $first_commission = (int) $propertysale->first_generation_commission / 100 * (float) $amount_to_pay;
        $second_commission = (int) $propertysale->second_generation_commission / 100 * (float) $amount_to_pay;
        $third_commission = (int) $propertysale->third_generation_commission / 100 * (float) $amount_to_pay;

        ClientsLedger::create([
            'client_id' => $client_id,
            'property_sales_id' => $id,
            'amount_paid' => $amount_to_pay,
            'amount_remaining' => $ledgerTotalAmountRemaining,
            'first_commission' => $first_commission,
            'second_commission' => $second_commission,
            'third_commission' => $third_commission,
            'created_at' => now(),
            'updated_at' => now(),
        ]);


        // Save updated ledger total
        $propertysale->ledger_summation = $ledgerTotalAmountPaid;
        $propertysale->save();

        // register for the commissions
        Commissions::create([
            'propertysales_id' => $id,
            'client_id' => $client_id,
            'first_generation_commission' => $first_commission,
            'second_generation_commission' => $second_commission,
            'third_generation_commission' => $third_commission,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        session()->flash('message', [
            'type' => 'success',
            'message' => 'Payment updated!',
        ]);

        return redirect()->route('client.show', $client_id);
    }


    public function showPropertySalesLedger(PropertySales $propertysale, Client $client)
    {
        $ledger = ClientsLedger::where('client_id', $client->id)
            ->where('property_sales_id', $propertysale->id)
            ->get();

        $ledgerResponse = ClientLedgerResponse::collection($ledger);

        $response = response()->json([
            'data' => $ledgerResponse,
        ], 201);

        return $response;
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PropertySales $propertysale)
    {
        $propertysale->delete();
        return to_route('propertysales.index')->with('message', "Record deleted.");
    }


    public function sponsor($sponsor)
    {
        // sponsor_id → The person who referred someone (the upline).
        // referred_id → The person who was referred (the downline).

        // Get the first-generation agent (who made the sale)
        $firstGen = Realtors::where('sponsor_code', $sponsor)->first();

        if (!$firstGen) {
            return Response::json([
                'status' => false,
                'error' => "Sponsor with code $sponsor does not exist.",
            ], 404);
        }

        // Get second-generation (who referred first-generation)
        $secondGen = Referals::where('referred_id', $firstGen->id)->first();
        $secondGenRealtor = $secondGen ? Realtors::where('id', $secondGen->sponsor_id)->first() : null;

        // Get third-generation (who referred_id second-generation)
        $thirdGen = $secondGenRealtor ? Referals::where('referred_id', $secondGenRealtor->id)->first() : null;
        $thirdGenRealtor = $thirdGen ? Realtors::where('id', $thirdGen->sponsor_id)->first() : null;

        // Prepare response
        return Response::json([
            'status' => true,
            'first_generation_commission' => new RealtorsResource($firstGen),
            'second_generation_commission' => $secondGenRealtor ? new RealtorsResource($secondGenRealtor) : null,
            'third_generation_commission' => $thirdGenRealtor ? new RealtorsResource($thirdGenRealtor) : null,
        ]);

    }


    public function propertyBlocks(Property $property)
    {

        $blocks = PropertyBlocks::query()->where('property_id', $property->id);
        return Response::json([
            'status' => $blocks->exists(),
            'blocks' => PropertyBlockResource::collection($blocks->get()),
        ]);

    }


    public function propertyBlockPlots(PropertyBlocks $propertyblock)
    {
        // Get block plot IDs that are already in the property_sale_block_plot table
        $soldPlotIds = PropertySaleBlockPlot::pluck('block_plot_id')->toArray();

        // Fetch block plots that are NOT in the property_sale_block_plot table
        $blockplots = PropertyBlockPlots::query()
            ->where('property_block_id', $propertyblock->id)
            ->whereNotIn('id', $soldPlotIds) // Exclude sold plots
            ->get();

        return Response::json([
            'status' => $blockplots->isNotEmpty(),
            'blockPlots' => PropertyBlockPlotsResource::collection($blockplots),
        ]);
    }

}

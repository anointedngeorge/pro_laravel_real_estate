<?php

use App\Http\Controllers\BranchController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\CommissionsController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PropertyBlockPlotsController;
use App\Http\Controllers\PropertyBlocksController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\PropertySalesController;
use App\Http\Controllers\RealtorsController;
use App\Http\Controllers\SettingsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get(
        '/dashboard',
        [DashboardController::class, 'index']
    )->name('dashboard');


    // 
    Route::resource('/dashboard/property', PropertyController::class);
    Route::get(
        '/dashboard/property/clients/{property}',
        [PropertyController::class, 'propertyClients']
    )->name('property.clients');

    Route::get(
        '/dashboard/property/blocks/{property}',
        [PropertyController::class, 'propertyBlocks']
    )->name('property.blocks');
    // 
    Route::resource('/dashboard/branch', BranchController::class);
    Route::resource('/dashboard/client', ClientController::class);
    Route::resource('dashboard/realtors', RealtorsController::class);
    Route::put('/dashboard/realtors/changestatus/{status}/{id}', [
        RealtorsController::class,
        'changeRealtorsStatus'
    ])->name('realtors.changestatus');

    Route::resource('/dashboard/propertysales', PropertySalesController::class);
    Route::resource('/dashboard/settings', SettingsController::class);

    // 
    Route::resource('/dashboard/propertyblock', PropertyBlocksController::class);
    Route::resource('/dashboard/propertyblockplot', PropertyBlockPlotsController::class);
    // 
    Route::get('/dashboard/propertysales/sponsor/{sponsor}', [
        PropertySalesController::class,
        'sponsor'
    ])->name('propertysales.sponsor');

    Route::get('/dashboard/propertysales/propertyblocks/{property}', [
        PropertySalesController::class,
        'propertyBlocks'
    ])->name('propertysales.propertyblocks');
    // 
    Route::get('/dashboard/propertysales/propertyblockplots/{propertyblock}', [
        PropertySalesController::class,
        'propertyBlockPlots'
    ])->name('propertysales.propertyblockplots');

    // commission
    Route::resource('/dashboard/commission', CommissionsController::class);
    Route::put('/dashboard/commission/changestatus/{status}/{id}', [
        CommissionsController::class,
        'changeCommissionStatus'
    ])->name('commission.changestatus');

    // end
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/dashboard/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/dashboard/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


// frontend routes



// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::get("/", [FrontendController::class, 'index'])->name('frontend.index');

Route::get("/realtors/referral/{sponsor_code}", [FrontendController::class, 'referralLink'])->name('frontend.referralLink');
Route::post('/realtors/referrals', [
    FrontendController::class,
    'realtorReferrals'
])->name('frontend.realtorreferrals');


Route::get('/realtors/referrals/confirmation', [
    FrontendController::class,
    'Confirmation'
])->name('frontend.confirmation');
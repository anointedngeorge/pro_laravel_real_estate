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



Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
    Route::get(
        '/',
        [DashboardController::class, 'index']
    )->name('dashboard');


    // 
    Route::resource('/property', PropertyController::class);
    Route::get(
        '/property/clients/{property}',
        [PropertyController::class, 'propertyClients']
    )->name('property.clients');

    Route::get(
        '/property/blocks/{property}',
        [PropertyController::class, 'propertyBlocks']
    )->name('property.blocks');
    // 
    Route::post(
        '/property/media/{property}',
        [PropertyController::class, 'propertymedia']
    )->name('property.media');

    Route::put(
        '/property/availability/{property}/{status}',
        [PropertyController::class, 'propertyStatus']
    )->name('property.availability');


    // 
    Route::resource('/branch', BranchController::class);
    Route::resource('/client', ClientController::class);
    Route::resource('dashboard/realtors', RealtorsController::class);
    Route::put('/realtors/changestatus/{status}/{id}', [
        RealtorsController::class,
        'changeRealtorsStatus'
    ])->name('realtors.changestatus');

    Route::resource('/propertysales', PropertySalesController::class);
    // 
    Route::post('/propertysales/ledger/{propertysale}', [
        PropertySalesController::class,
        'PropertySalesLedger'
    ])->name('propertysales.ledger');

    Route::get('/propertysales/ledger/{propertysale}/{client}', [
        PropertySalesController::class,
        'showPropertySalesLedger'
    ])->name('propertysales.showledger');


    Route::resource('/settings', SettingsController::class);

    // 
    Route::resource('/propertyblock', PropertyBlocksController::class);
    Route::resource('/propertyblockplot', PropertyBlockPlotsController::class);
    // 
    Route::get('/propertysales/sponsor/{sponsor}', [
        PropertySalesController::class,
        'sponsor'
    ])->name('propertysales.sponsor');

    Route::get('/propertysales/propertyblocks/{property}', [
        PropertySalesController::class,
        'propertyBlocks'
    ])->name('propertysales.propertyblocks');
    // 
    Route::get('/propertysales/propertyblockplots/{propertyblock}', [
        PropertySalesController::class,
        'propertyBlockPlots'
    ])->name('propertysales.propertyblockplots');

    // commission
    Route::resource('/commission', CommissionsController::class);
    Route::put('/commission/changestatus/{status}/{id}', [
        CommissionsController::class,
        'changeCommissionStatus'
    ])->name('commission.changestatus');

    // end


    // profile

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
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



Route::get('/{pagename}', [
    FrontendController::class,
    'pages'
])->name('frontend.page');


Route::get('/property/{property}', [
    FrontendController::class,
    'property'
])->name('frontend.property');
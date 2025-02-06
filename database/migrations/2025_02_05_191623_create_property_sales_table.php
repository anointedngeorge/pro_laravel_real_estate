<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('propertysales', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained('properties');
            $table->foreignId('realtor_id')->constrained('realtors');
            $table->foreignId(column: 'client_id')->constrained('clients');
            $table->integer('quantity')->nullable();
            $table->float('amount')->nullable();
            $table->float('balance')->nullable();
            $table->float('initial_amount_paid')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_sellings');
    }
};

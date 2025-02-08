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
        Schema::create('property_sales', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_id')->constrained('properties');
            $table->foreignId(column: 'client_id')->constrained('clients');
            $table->integer('quantity')->nullable();
            $table->float('amount')->nullable();
            $table->float('initial_amount_paid')->nullable();

            $table->string('sponsor_code');

            $table->string('first_generation_commission')->nullable(); // 15%
            $table->string('second_generation_commission')->nullable(); // 8%
            $table->string('third_generation_commission')->nullable(); // 5%

            $table->foreignId('first_generation')->constrained('realtors');
            $table->foreignId('second_generation')->constrained('realtors');
            $table->foreignId('third_generation')->constrained('realtors');
            // $table->date('created_at_date')->default(now()->toDate());
            $table->timestamps();
        });
        // [
        //     'property_id',
        //     'client_id',
        //     'quantity',
        //     'amount',
        //     'initial_amount_paid',
        //     'first_generation_commission',
        //     'second_generation_commission',
        //     'third_generation_commission',
        //     'first_generation',
        //     'second_generation',
        //     'third_generation',
        //     'sponsor_code',
        // ];
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('propertysales');
    }
};

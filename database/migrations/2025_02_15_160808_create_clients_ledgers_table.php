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
        Schema::create('clients_ledgers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_sales_id')->constrained('property_sales');
            $table->foreignId('client_id')->constrained('clients');
            $table->string('first_commission')->nullable();
            $table->string('second_commission')->nullable();
            $table->string('third_commission')->nullable();
            $table->string('amount_remaining')->nullable();
            $table->string('amount_paid')->nullable();
            $table->timestamps();

        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients_ledgers');
    }
};

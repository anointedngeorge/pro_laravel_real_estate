<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rule;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('commissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('propertysales_id')->constrained('property_sales');
            $table->foreignId('client_id')->constrained('clients');
            $table->float('amount_paid')->nullable();
            $table->string('first_generation_commission')->nullable();
            $table->string('second_generation_commission')->nullable();
            $table->string('third_generation_commission')->nullable();
            $table->string('status')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commissions');
    }
};

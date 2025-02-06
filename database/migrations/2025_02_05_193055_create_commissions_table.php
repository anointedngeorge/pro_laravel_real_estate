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
            $table->foreignId('propertysales_id')->constrained('propertysales');
            $table->float('amount_paid')->nullable();
            $table->foreignId('first_generation')->nullable()->constrained('realtors');
            $table->foreignId('second_generation')->nullable()->constrained('realtors');
            $table->foreignId('third_generation')->nullable()->constrained('realtors');
            $table->string('status');
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

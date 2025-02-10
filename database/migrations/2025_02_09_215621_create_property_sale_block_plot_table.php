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
        Schema::create('property_sale_block_plot', function (Blueprint $table) {
            $table->id();
            $table->foreignId('property_sale_id')->constrained('property_sales')->onDelete('cascade');
            $table->foreignId('block_plot_id')->constrained('property_block_plots')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('property_sale_block_plot');
    }
};

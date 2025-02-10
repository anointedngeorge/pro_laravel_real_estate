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
        Schema::table('property_sales', function (Blueprint $table) {
            $table->foreignId('block_id')->nullable()->constrained('property_blocks');
            $table->foreignId('block_plot_id')->nullable()->constrained('property_block_plots');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('property_sales', function (Blueprint $table) {
            //
        });
    }
};

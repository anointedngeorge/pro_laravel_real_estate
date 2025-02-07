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
        Schema::table('realtors', function (Blueprint $table) {
            $table->string('image_path')->nullable();
            $table->string('account_number')->nullable();
            $table->string('account_name')->nullable();
            $table->string('account_type')->nullable();
            $table->string('bank_name')->nullable();
            $table->string('address')->nullable();
            $table->string('country')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('realtors', function (Blueprint $table) {
            //
        });
    }
};

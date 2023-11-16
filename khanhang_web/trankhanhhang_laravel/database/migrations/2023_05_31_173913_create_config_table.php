<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void

    {
    
    Schema::create('config', function (Blueprint $table) {
    
    $table->id(); //id
    
    $table->string('author', 255);
    
    $table->string('email', 255);

    $table->string('zalo', 255);

    $table->string('facebook', 1000);

    $table->string('address', 1000);

    $table->string('youtube', 1000);
        
    $table->unsignedInteger('sort_order')->default(0);
    
    $table->string('metakey');
    
    $table->string('metadesc');
    
    $table->timestamps(); //created_at, updated_at
    
    $table->unsignedInteger('created_by')->default(1);
    
    $table->unsignedInteger('updated_by')->nullable();
    
    $table->unsignedTinyInteger('status')->default(2);
    
    });
    
    }    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('config');
    }
};

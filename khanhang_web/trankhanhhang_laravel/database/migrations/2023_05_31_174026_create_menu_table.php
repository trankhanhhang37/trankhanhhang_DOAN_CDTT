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
    public function up()
    {
        Schema::create('menu', function (Blueprint $table) {
            $table->id(); //id
    
            $table->unsignedInteger('user_id')->default(1);
            
            $table->string('name');
            
            $table->string('link');
             
            $table->string('type');
            
            $table->unsignedInteger('table_id')->default(1);

            $table->Integer('sort_order');

            
            $table->timestamps(); //created_at, updated_at
            
            $table->unsignedInteger('created_by')->default(1);
            
            $table->unsignedInteger('updated_by')->nullable();
            
            $table->unsignedTinyInteger('status')->default(2);
            
     });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menu');
    }
};

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
        Schema::create('productsale', function (Blueprint $table) {
            $table->id(); //id
    
            
            $table->unsignedInteger('product_id');

            $table->string('name', 1000)->unique();
            
            $table->string('slug', 1000)->unique();
            
            $table->string('image', 1000)->nullable();


            $table->float('pricesale');

            $table->unsignedInteger('quantity'); 

            $table->datetime(); //date_begin, date_end


            
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
        Schema::dropIfExists('productsale');
    }
};

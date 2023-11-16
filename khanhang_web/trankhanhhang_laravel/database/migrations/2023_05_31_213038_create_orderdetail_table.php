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
        Schema::create('orderdetail', function (Blueprint $table) {
            $table->id(); //id
    
            $table->unsignedInteger('order_id')->default(1);
            
            $table->unsignedInteger('product_id')->default(1); 

            $table->float('price')->default(1); 

            $table->unsignedInteger('quality'); 

            $table->float('amount');  

            $table->float('discount');  

           
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orderdetail');
    }
};

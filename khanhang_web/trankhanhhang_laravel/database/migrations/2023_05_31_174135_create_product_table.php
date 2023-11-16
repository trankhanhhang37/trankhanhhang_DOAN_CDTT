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
        Schema::create('product', function (Blueprint $table) {
            
            $table->id(); //id
    
            
            $table->unsignedInteger('category_id')->default(0);

            $table->unsignedInteger('brand_id')->default(0);

            $table->string('name', 1000)->unique();
            
            $table->string('slug', 1000)->unique();
            
            $table->string('image', 1000)->nullable();

            $table->float('price');

            $table->float('pricesale');

            $table->unsignedInteger('quantity'); 

            $table->mediumText('detail');
            
            $table->string('metakey');
            
            $table->string('metadesc');

            $table->string('description');

            
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
        Schema::dropIfExists('product');
    }
};

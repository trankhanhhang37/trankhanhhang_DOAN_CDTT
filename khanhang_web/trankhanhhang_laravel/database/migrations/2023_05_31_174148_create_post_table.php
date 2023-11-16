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
        Schema::create('post', function (Blueprint $table) {
            $table->id(); //id
    
            $table->unsignedInteger('topic_id')->default(1);
            
            $table->string('title');
            
            $table->string('slug');

            $table->string('type');

             
            $table->mediumText('detail');

            $table->string('image')->nullable();


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
        Schema::dropIfExists('post');
    }
};

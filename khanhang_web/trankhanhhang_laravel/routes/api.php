<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Frontend\BrandController;
use App\Http\Controllers\Api\Frontend\CategoryController;
use App\Http\Controllers\Api\Frontend\ProductController;

use App\Http\Controllers\Api\Backend\InfoController;
use App\Http\Controllers\Api\Backend\MenuController;
use App\Http\Controllers\Api\Backend\OrderController;
use App\Http\Controllers\Api\Backend\OrderdetailController;
use App\Http\Controllers\Api\Backend\PageUsController;
use App\Http\Controllers\Api\Backend\PostController;
use App\Http\Controllers\Api\Backend\SliderController;
use App\Http\Controllers\Api\Backend\TopicController;
use App\Http\Controllers\Api\Backend\ContactController;
use App\Http\Controllers\Api\Backend\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
 //   return $request->user();
//});

Route::prefix('product')->group(function() {
    //  Route::get('product_category/{category_id}/{limit}',[ProductController::class,'product_category']); //1/8
        Route::get('index',[ProductController::class,'index']);
    Route::get('show/{id}',[ProductController::class,'show']);
    Route::post('store',[ProductController::class,'store']); 
    Route::post('update/{id}',[ProductController::class,'update']);

    Route::put('delete/{id}',[ProductController::class,'delete']);///
    Route::put('restore/{id}',[ProductController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[ProductController::class,'getListRemove']);
    Route::delete('destroy/{id}', [ProductController::class, 'destroy']);
    Route::get('get_byPage/{limit}/{page?}',[ProductController::class,'get_byPage']);


    // Route::get('product_all/{limit}',[ProductController::class,'product_all']);
    
    // Route::get('product_brand/{brand_id}/{limit}',[ProductController::class,'product_brand']);

    //  Route::get('product_new/{limit}/{page?}',[ProductController::class,'product_new']);


     Route::get('product_detail/{slug}/{other_product_limit}/{comment_limit}',[ProductController::class,'product_detail']);

     Route::get('product_sale/{pricesale}',[ProductController::class,'product_sale']);

    Route::get('getByMetakey/{metakey}',[ProductController::class,'getByMetakey']);


    Route::get('getNewProductAll/{limit}/{page?}',[ProductController::class,'getNewProductAll']);

    Route::get('getNewProductByBrand/{limit}/{page?}/{slug}',[ProductController::class,'getNewProductByBrand']);

    Route::get('getNewProductByCategory/{limit}/{page?}/{slug}',[ProductController::class,'getNewProductByCategory']);

    Route::get('getSaleProduct/{limit}/{page?}',[ProductController::class,'getSaleProduct']);
 

});

Route::prefix('contact')->group(function(){
    Route::get('index',[ContactController::class,'index']);
    Route::get('show/{id}',[ContactController::class,'show']);
    Route::post('reply',[ContactController::class,'reply']);
    Route::post('store',[ContactController::class,'store']);
    Route::post('update/{id}',[ContactController::class,'update']);
    Route::put('delete/{id}',[ContactController::class,'delete']);///
    Route::put('restore/{id}',[ContactController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[ContactController::class,'getListRemove']);
    Route::delete('destroy/{id}', [ContactController::class, 'destroy']);
    Route::get('get_byPage/{limit}/{page?}',[ContactController::class,'get_byPage']);
});

// Route::prefix('category')->group(function(){
//      Route::get('category_list/{parent_id}',[CategoryController::class,'category_list']);

// });


Route::prefix('brand')->group(function(){// fr
     Route::get('getBySlug/{slug}',[BrandController::class,'getBySlug']);
    Route::get('index',[BrandController::class,'index']);
    Route::get('show/{id}',[BrandController::class,'show']);
    Route::post('store',[BrandController::class,'store']);
    Route::post('update/{id}',[BrandController::class,'update']);
    Route::delete('destroy/{id}', [BrandController::class, 'destroy']);  
    
    Route::put('delete/{id}',[BrandController::class,'delete']);///
    Route::put('restore/{id}',[BrandController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[BrandController::class,'getListRemove']);
    Route::get('get_byPage/{limit}/{page?}',[BrandController::class,'get_byPage']);

    

});

Route::prefix('category')->group(function(){
    Route::get('index',[CategoryController::class,'index']);
    Route::get('show/{id}',[CategoryController::class,'show']);
//    Route::get('show/{slug}',[CategoryController::class,'show']);

    Route::post('store',[CategoryController::class,'store']);
    Route::post('update/{id}',[CategoryController::class,'update']);
    Route::delete('destroy/{id}', [CategoryController::class, 'destroy']); 
    Route::get('category_list/{parent_id}',[CategoryController::class,'category_list']);
   Route::get('getBySlug/{slug}',[CategoryController::class,'getBySlug']);

   Route::put('delete/{id}',[CategoryController::class,'delete']);///
   Route::put('restore/{id}',[CategoryController::class,'restore']);///
   Route::get('getListRemove/{limit}/{page?}',[CategoryController::class,'getListRemove']);
   Route::delete('destroy/{id}', [CategoryController::class, 'destroy']);
   Route::get('get_byPage/{limit}/{page?}',[CategoryController::class,'get_byPage']);


});

// Route::prefix('product')->group(function(){
//     Route::get('index',[ProductController::class,'index']);
//     Route::get('show/{id}',[ProductController::class,'show']);
//     Route::post('store',[ProductController::class,'store']); 
//     Route::post('update/{id}',[ProductController::class,'update']);
//     Route::delete('destroy/{id}', [ProductController::class, 'destroy']);

//     Route::get('product_home/{limit}/{category_id?}',[ProductController::class,'product_home']);

//     Route::get('product_category/{category_id}/{limit}',[ProductController::class,'product_category']); //1/8

//     Route::get('product_all/{limit}',[ProductController::class,'product_all']);
    
//     Route::get('product_brand/{brand_id}/{limit}',[ProductController::class,'product_brand']);


    
//     Route::get('product_other/{id}/{limit}',[ProductController::class,'product_other']);

    
//     Route::get('get_byPage/{page}/{limit}',[ProductController::class,'get_byPage']);




// });


Route::prefix('menu')->group(function(){
    Route::get('index',[MenuController::class,'index']);
    Route::get('show/{id}',[MenuController::class,'show']);
    Route::get('menu_list/{position}/{parent_id?}',[MenuController::class,'menu_list']);

    Route::post('store',[MenuController::class,'store']);
    Route::post('update/{id}',[MenuController::class,'update']);
    Route::delete('destroy/{id}', [MenuController::class, 'destroy']);
    Route::put('delete/{id}',[MenuController::class,'delete']);///
    Route::put('restore/{id}',[MenuController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[MenuController::class,'getListRemove']);
    Route::get('get_byPage/{limit}/{page?}',[MenuController::class,'get_byPage']);


});

Route::prefix('order')->group(function(){
    Route::get('index',[OrderController::class,'index']);
    Route::get('show/{id}',[OrderController::class,'show']);
    Route::post('store',[OrderController::class,'store']);
    Route::post('update/{id}',[OrderController::class,'update']);
    Route::delete('destroy/{id}', [OrderController::class, 'destroy']);
    Route::put('delete/{id}',[OrderController::class,'delete']);///
    Route::put('restore/{id}',[OrderController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[OrderController::class,'getListRemove']);
    Route::get('get_byPage/{limit}/{page?}',[OrderController::class,'get_byPage']);

});

Route::prefix('orderdetail')->group(function(){
    Route::get('index',[OrderdetailController::class,'index']);
    Route::get('show/{id}',[OrderdetailController::class,'show']);
    Route::post('store',[OrderdetailController::class,'store']);
    Route::post('update/{id}',[OrderdetailController::class,'update']);
    Route::delete('destroy/{id}', [OrderdetailController::class, 'destroy']);
    Route::put('delete/{id}',[OrderdetailController::class,'delete']);///
    Route::put('restore/{id}',[OrderdetailController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[OrderdetailController::class,'getListRemove']);
    Route::get('get_byPage/{limit}/{page?}',[OrderdetailController::class,'get_byPage']);

});

Route::prefix('post')->group(function(){
    Route::get('index',[PostController::class,'index']);
    Route::get('show/{id}',[PostController::class,'show']);
    
    Route::post('store',[PostController::class,'store']);
    Route::post('update/{id}',[PostController::class,'update']);
    
    Route::delete('destroy/{id}', [PostController::class, 'destroy']);
    Route::put('delete/{id}',[PostController::class,'delete']);///
    Route::put('restore/{id}',[PostController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[PostController::class,'getListRemove']);
    Route::get('get_byPage/{limit}/{page?}',[PostController::class,'get_byPage']);

    Route::get('post_list/{limit}/{type}',[PostController::class,'post_list']);
    Route::get('post_all/{limit}/{page?}',[PostController::class,'post_all']);
    Route::get('post_other/{id}/{limit}',[PostController::class,'post_other']);
    Route::get('post_detail/{slug}',[PostController::class,'post_detail']);
    Route::get('post_topic/{limit}/{page?}/{topic_id}',[PostController::class,'post_topic']); //limit/topicid

    
});


Route::prefix('page')->group(function(){
    Route::get('index',[PageUsController::class,'index']);
    Route::get('show/{id}',[PageUsController::class,'show']);
    Route::post('store',[PageUsController::class,'store']);
    Route::post('update/{id}',[PageUsController::class,'update']);
    Route::delete('destroy/{id}', [PageUsController::class, 'destroy']);
    Route::put('delete/{id}',[PageUsController::class,'delete']);///
    Route::put('restore/{id}',[PageUsController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[PageUsController::class,'getListRemove']);
    Route::get('get_byPage/{limit}/{page?}',[PageUsController::class,'get_byPage']);


    
});

Route::prefix('info')->group(function(){
    Route::get('index',[InfoController::class,'index']);
    Route::get('show/{id}',[InfoController::class,'show']);
    Route::post('store',[InfoController::class,'store']);
    Route::post('update/{id}',[InfoController::class,'update']);
    Route::delete('destroy/{id}', [InfoController::class, 'destroy']);
    Route::put('delete/{id}',[InfoController::class,'delete']);///
    Route::put('restore/{id}',[InfoController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[InfoController::class,'getListRemove']);
    Route::get('get_byPage/{limit}/{page?}',[InfoController::class,'get_byPage']);


    
});


Route::prefix('topic')->group(function(){
    Route::get('index',[TopicController::class,'index']);
    Route::get('show/{id}',[TopicController::class,'show']);
    Route::post('store',[TopicController::class,'store']);
    Route::post('update/{id}',[TopicController::class,'update']);
    Route::delete('destroy/{id}', [TopicController::class, 'destroy']);
    Route::get('topic_all/{limit}',[TopicController::class,'topic_all']);
    Route::get('topic_list/{parent_id}',[TopicController::class,'topic_list']);

    Route::delete('destroy/{id}', [TopicController::class, 'destroy']);
    Route::put('delete/{id}',[TopicController::class,'delete']);///
    Route::put('restore/{id}',[TopicController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[TopicController::class,'getListRemove']);
    Route::get('get_byPage/{limit}/{page?}',[TopicController::class,'get_byPage']);



});

Route::prefix('slider')->group(function(){
    Route::get('index',[SliderController::class,'index']);
    Route::get('show/{id}',[SliderController::class,'show']);
    Route::get('slider_list/{position}',[SliderController::class,'slider_list']);

    Route::post('store',[SliderController::class,'store']);
    Route::post('update/{id}',[SliderController::class,'update']);
    Route::delete('destroy/{id}', [SliderController::class, 'destroy']);
    Route::put('delete/{id}',[SliderController::class,'delete']);///
    Route::put('restore/{id}',[SliderController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[SliderController::class,'getListRemove']);
    Route::get('get_byPage/{limit}/{page?}',[SliderController::class,'get_byPage']);


});

Route::prefix('user')->group(function(){
       Route::post('register',[UserController::class,'register']);
       Route::post('login',[UserController::class,'login']);
       
       Route::get('index',[UserController::class,'index']);

    Route::get('getCustomer',[UserController::class,'getCustomer']);
    Route::get('show/{id}',[UserController::class,'show']);
    Route::post('store',[UserController::class,'store']);
    Route::post('update/{id}',[UserController::class,'update']);
    Route::delete('destroy/{id}', [UserController::class, 'destroy']);
    Route::put('delete/{id}',[UserController::class,'delete']);///
    Route::put('restore/{id}',[UserController::class,'restore']);///
    Route::get('getListRemove/{limit}/{page?}',[UserController::class,'getListRemove']);
    Route::get('get_byPage/{limit}/{page?}',[UserController::class,'get_byPage']);

});



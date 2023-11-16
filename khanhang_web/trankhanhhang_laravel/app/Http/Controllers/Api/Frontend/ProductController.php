<?php

namespace App\Http\Controllers\Api\Frontend;
use App\Models\Category;
use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use Illuminate\Database\Query\JoinClause;
class ProductController extends Controller
{

    //
    public function product_all($limit)
    {
        //$offset = ($page - 1) * $limit;
        $data = Product::where('status', 1)
            ->orderBy('created_at', 'DESC')
            // ->offset($offset)
            ->limit($limit)
            ->get();
        if (count($data) > 0) {
            return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'products' => $data], 200);
        } else {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'Tải dữ liệu k thành công',
                    'products' => $data
                ],
                200
            );
        }
    }


    public function getByMetakey($metakey) // tìm kiếm sản phẩm theo metakey
    {
        $product = Product::where([['status', '=', 1], ['metakey', '=', $metakey]])
        ->get();

        
        if ($product == null) {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'khong tim thay du lieu',
                    'product' => null
                ],
                404
            );
        }

        return response()->json(
            [
                'success' => true,
                'message' => "tai du lieu thanh cong",
                'product' => $product

            ],
            200


        );
    }

    public function product_home($limit, $category_id = 0)
    {
        $listid = array();
        array_push($listid, $category_id + 0);
        $args_cat1 = [
            ['parent_id', '=', $category_id + 0],
            ['status', '=', 1]
        ];
        $list_category1 = Category::where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listid, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $data = Product::where('status', '=', 1)
            ->whereIn('category_id', $listid)
            ->orderBy('created_at', 'DESC')->limit($limit)->get();
        return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'products' => $data], 200);
    }


    //Get ---brand/index --lấy danh sách 

    public function index()

    {

        $products = Product::all(); //::where()->orderBy()->get();

        // $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
        //         ->where('status', 1)
        //         ->get();
        //         $end_page = 1;
        //         if (count($product_qty) > $limit) {
        //             $end_page = ceil(count($product_qty) / $limit);
        //         }

        return response()->json(

            [
                'success' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ],

            200

        );
    }
    // Get -brand/show-- lấy ra 1 danh mục dựa vào id
    public function show($id)

    {

        $product = Product::find($id);

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'product' => $product],

            200

        );
    }
    //Post- them store --them danh mục
    public function store(Request $request)
    {
        $product = new Product();
        $product->category_id = $request->category_id;


        $product->brand_id = $request->brand_id;

        $product->name = $request->name; //form

        $product->slug = Str::of($request->name)->slug('-');

        $product->price = $request->price; //form

        // $product->pricesale = $request->pricesale; //form

        // $product->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('image/product'), $filename);
            }
        }

        // $product->quality = $request->quality; //form

        $product->detail = $request->detail; //form

        $product->description = $request->description; //form


        $product->metakey = $request->metakey; //form

        $product->metadesc = $request->metadesc; //form

        $product->updated_at = date('Y-m-d H:i:s');

        $product->updated_by = 1; //takm cho =1

        $product->status = $request->status; //form

        $product->save(); //Luuu vao CSDL

        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'product' => $product],
            201
        );
    }
    //category-update --cập nhật dnah mục
    public function update(Request $request, $id)

    {

        $product = Product::find($id);

        $product->category_id = $request->category_id;

        $product->brand_id = $request->brand_id;

        $product->name = $request->name; //form

        $product->slug = Str::of($request->name)->slug('-');

        // $brand->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $product->slug . '.' . $extension;
                $product->image = $filename;
                $files->move(public_path('image/product'), $filename);
            }
        }


        $product->price = $request->price; //form

        // $product->pricesale = $request->pricesale; //form

        // $product->image = $request->name;
        // $product->quality = $request->quantity; //form

        $product->detail = $request->detail; //form

        $product->metakey = $request->metakey; //form

        $product->metadesc = $request->metadesc; //form

        $product->updated_at = date('Y-m-d H:i:s');

        $product->updated_by = 1; //takm cho =1

        $product->status = $request->status; //form

        $product->save(); //Luuu vao CSDL

        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'product' => $product],

            200

        );
    }
    // xóa danh mục
    public function destroy($id)
    {
        $product = Product::find($id);
        if ($product == null) {
            return response()->json(
                ['message' => 'Tai du lieu thanh cong', 'success' => false, 'data' => null],
                404
            );
        }
        $product->delete();
        return response()->json(['message' => 'thành công', 'success' => true, 'data' => $product], 200);
    }

    //xoa tam
    public function delete($id)
    {
        $product = DB::table('product')
              ->where('id', '=',$id)
              ->update(['status' => 0]);
        return response()->json(['message' => 'thành công', 'success' => true, 'delete' => $product], 200);
    }
//khoi phuc
    public function restore($id)
    {
        $product = DB::table('product')
              ->where('id', '=',$id)
              ->update(['status' => 1]);
        return response()->json(['message' => 'thành công', 'success' => true, 'restore' => $product], 200);
    }
//ds xóa
    public function getListRemove($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $products = Product::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 0)
            ->get();

            // $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
          
            // ->get();
            $products_all = Product::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($products_all) > $limit) {
                $end_page = ceil(count($products_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'products' => $products,
            'end'=>$end_page
        ],

            200

        );
    }
    public function get_byPage($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $products = Product::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 1)
            ->get();

            // $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
          
            // ->get();
            $products_all = Product::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($products_all) > $limit) {
                $end_page = ceil(count($products_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'products' => $products,
            'end'=>$end_page
        ],

            200

        );
    }

     
    //allproduct
    public function getNewProductAll($limit, $page ) 
    {

        if ($limit > 0) {
            $offset = ($page - 1) * $limit;
            $store_products = DB::table('productstore')
                ->join("product", 'productstore.product_id', '=', 'product.id')
                ->where('productstore.status', 1)
                ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image', 'product.price as listed_price', 'product.category_id', 'product.brand_id', 'product.description as product_short_description', 'product.detail as product_detail', 'productstore.quantity as store_qty', 'productstore.quantity_sold as qty_sold_productstore', 'productstore.status as store_status', 'productstore.created_at as store_created_date');

            $store_sale_products = DB::table('productsale')
                ->rightJoinSub($store_products, 'products', function (JoinClause $join) {
                    $join->on('products.product_id', '=', 'productsale.product_id')
                        ->where([['productsale.status', 1], ['productsale.date_begin', '<=', date('Y-m-d H:i:s')], ['productsale.date_end', '>=', date('Y-m-d H:i:s')]]);
                })
                ->select('products.*', 'productsale.sale_id', 'productsale.date_begin', 'productsale.date_end', 'productsale.quantity as sale_qty', 'productsale.quantity_sold as qty_sold_productsale', 'productsale.status as sale_status', 'productsale.created_at as sale_created_date');

            $store_saleid_products = DB::table('sale_id')
                ->rightJoinSub($store_sale_products, 'store_sale_products', function (JoinClause $join) {
                    $join->on('store_sale_products.sale_id', '=', 'sale_id.id')
                        ->where('sale_id.status', 1);
                })
                ->select('store_sale_products.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

            $store_saleid_category_products = DB::table('category')
                ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                    $join->on('store_saleid_products.category_id', '=', 'category.id')
                        ->where('category.status', 1);
                })
                ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');

            $store_saleid_category_brand_products = DB::table('brand')/////
                ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                        ->where('brand.status', 1);
                })
                ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');


            $store_saleid_category_brand_review_products = DB::table('product_reviews')
                ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_brand_products.product_id', '=', 'product_reviews.product_id');
                })
                ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                ->groupBy('product_id')
                ->orderBy('store_created_date', 'DESC')
                ->offset($offset)
                ->limit($limit)
                ->get();

                $product_qty = DB::table('productstore') 
                 //'product_quantity'=>$product_qty,'end'=>$end_page
                ->where('status', 1)
                ->get();
                $end_page = 1;
                if (count($product_qty) > $limit) {
                    $end_page = ceil(count($product_qty) / $limit);
                }

                
    

            }

            return response()->json(

                ['success' => true, 'message' => "tai du lieu thanh cong",
                 'new_products_all' => $store_saleid_category_brand_review_products,
                 'product_qty' => count($store_saleid_category_brand_review_products),
                  'date' => date('Y-m-d H:i:s'),
                 'product_quantity'=>$product_qty,
                 'end'=>$end_page
                ],
                200

            );

    }
    
        ///product theo category
        public function getNewProductByCategory($limit, $page ,$slug)
        {
            $offset = ($page - 1) * $limit;
            $store_products = DB::table('productstore')
            ->join("product", 'productstore.product_id', '=', 'product.id')
            ->where('productstore.status', 1)
            ->select('product.id as product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image', 'product.price as listed_price', 'product.category_id', 'product.brand_id', 'product.description as product_short_description', 'product.detail as product_detail', 'productstore.quantity as store_qty', 'productstore.quantity_sold as qty_sold_productstore', 'productstore.status as store_status', 'productstore.created_at as store_created_date');

            $store_sale_products = DB::table('productsale')
            ->rightJoinSub($store_products, 'products', function (JoinClause $join) {
                $join->on('products.product_id', '=', 'productsale.product_id')
                    ->where([['productsale.status', 1], ['productsale.date_begin', '<=', date('Y-m-d H:i:s')], ['productsale.date_end', '>=', date('Y-m-d H:i:s')]]);
            })
            ->select('products.*', 'productsale.sale_id', 'productsale.date_begin', 'productsale.date_end', 'productsale.quantity as sale_qty', 'productsale.quantity_sold as qty_sold_productsale', 'productsale.status as sale_status', 'productsale.created_at as sale_created_date');

            $store_saleid_products = DB::table('sale_id')
            ->rightJoinSub($store_sale_products, 'store_sale_products', function (JoinClause $join) {
                $join->on('store_sale_products.sale_id', '=', 'sale_id.id')
                    ->where('sale_id.status', 1);
            })
            ->select('store_sale_products.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

            $store_saleid_category_products = DB::table('category')
            ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                $join->on('store_saleid_products.category_id', '=', 'category.id')
                    ->where('category.status', 1);
            })
            ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');

        $store_saleid_category_brand_products = DB::table('brand')/////
            ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                    ->where('brand.status', 1);
            })
            ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');


        $store_saleid_category_brand_review_products = DB::table('product_reviews')
            ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                $join->on('store_saleid_category_brand_products.product_id', '=', 'product_reviews.product_id');
            })
            ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
            ->groupBy('product_id')
            ->where('category_slug', $slug)
            ->orderBy('store_created_date', 'DESC')
            ->first();
       
        /////////////////////////////////
        $listId = array();
        array_push($listId, $store_saleid_category_brand_review_products->category_id);
        $args_cat1 = [
            ['parent_id', '=', $store_saleid_category_brand_review_products->category_id],
            ['status', '=', 1]
        ];
        $list_category1 = DB::table('category')->where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listId, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listId, $row2->id);
                    }
                }
            }
        }

           $category_products = DB::table('product_reviews')
            ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                $join->on('store_saleid_category_brand_products.product_id', '=', 'product_reviews.product_id');
            })
            ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
            ->groupBy('product_id')
            ->orderBy('store_created_date', 'DESC')
            ->where('store_saleid_category_brand_products.product_id', '!=', $store_saleid_category_brand_review_products->product_id)
            ->whereIn('category_id', $listId)
            ->limit($limit)
            ->offset($offset)
            ->get();
            $end_page = 1;
            if (count($category_products) > $limit) {
                $end_page = ceil(count($category_products) / $limit);
            }

            $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
                ->where('status', 1)
                ->get();
                $end_page = 1;
                if (count($product_qty) > $limit) {
                    $end_page = ceil(count($product_qty) / $limit);
                }
            

            return response()->json(
    
                ['success' => true, 'message' => "tai du lieu  thanh cong",
                'products_category'=>$category_products,
                // 'product_qty' => count($store_saleid_category_brand_review_products),
                'product_quantity'=>$product_qty,
                'end'=>$end_page],
                200
                
    
            );
    
        }
    
    ///product theo brand
    public function getNewProductByBrand($limit, $page = 1,$slug)
    {

        if ($limit > 0) {
            $offset = ($page - 1) * $limit;
            $store_products = DB::table('productstore')
                ->join("product", 'productstore.product_id', '=', 'product.id')
                ->where('productstore.status', 1)
                ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image', 'product.price as listed_price', 'product.category_id', 'product.brand_id', 'product.description as product_short_description', 'product.detail as product_detail', 'productstore.quantity as store_qty', 'productstore.quantity_sold as qty_sold_productstore', 'productstore.status as store_status', 'productstore.created_at as store_created_date');

            $store_sale_products = DB::table('productsale')
                ->rightJoinSub($store_products, 'products', function (JoinClause $join) {
                    $join->on('products.product_id', '=', 'productsale.product_id')
                        ->where([['productsale.status', 1], ['productsale.date_begin', '<=', date('Y-m-d H:i:s')], ['productsale.date_end', '>=', date('Y-m-d H:i:s')]]);
                })
                ->select('products.*', 'productsale.sale_id', 'productsale.date_begin', 'productsale.date_end', 'productsale.quantity as sale_qty', 'productsale.quantity_sold as qty_sold_productsale', 'productsale.status as sale_status', 'productsale.created_at as sale_created_date');

            $store_saleid_products = DB::table('sale_id')
                ->rightJoinSub($store_sale_products, 'store_sale_products', function (JoinClause $join) {
                    $join->on('store_sale_products.sale_id', '=', 'sale_id.id')
                        ->where('sale_id.status', 1);
                })
                ->select('store_sale_products.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

            $store_saleid_category_products = DB::table('category')
                ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                    $join->on('store_saleid_products.category_id', '=', 'category.id')
                        ->where('category.status', 1);
                })
                ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');

            $store_saleid_category_brand_products = DB::table('brand')/////
                ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                        ->where('brand.status', 1);
                })
                ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');


            $store_saleid_category_brand_review_products = DB::table('product_reviews')
                ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_brand_products.product_id', '=', 'product_reviews.product_id');
                })
                ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                ->groupBy('product_id')
                //whre 
                ->where('brand_slug','=',$slug)
                ->orderBy('store_created_date', 'DESC')
                ->offset($offset)
                ->limit($limit)
                ->get();

                $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
                ->where('status', 1)
                ->get();
                $end_page = 1;
                if (count($product_qty) > $limit) {
                    $end_page = ceil(count($product_qty) / $limit);
                }

                

                
            return response()->json(

                ['success' => true, 'message' => "tai du lieu thanh cong", 
                'products_brand' => $store_saleid_category_brand_review_products,
                 "product_qty" => count($store_saleid_category_brand_review_products), 
                 'date' => date('Y-m-d H:i:s'),
                 'product_quantity'=>$product_qty,
                 'end'=>$end_page],
                200

            );
        }
        return response()->json(

            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
            200

        );

    }
    
    /////saleproduct
    public function getSaleProduct($limit, $page = 1) 
    {

        if ($limit > 0) {
            $offset = ($page - 1) * $limit;
            $store_products = DB::table('productstore')
                ->join("product", 'productstore.product_id', '=', 'product.id')
                ->where('productstore.status', 1)
                ->select('product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image',

                 'product.price as listed_price', 'product.category_id', 'product.brand_id', 'product.description as product_short_description', 

                 'product.detail as product_detail', 'productstore.quantity as store_qty', 'productstore.quantity_sold as qty_sold_productstore', 

                 'productstore.status as store_status', 'productstore.created_at as store_created_date');

            $store_sale_products = DB::table('productsale')
                ->rightJoinSub($store_products, 'products', function (JoinClause $join) {
                    $join->on('products.product_id', '=', 'productsale.product_id')
                        ->where([['productsale.status', 1], ['productsale.date_begin', '<=', date('Y-m-d H:i:s')], ['productsale.date_end', '>=', date('Y-m-d H:i:s')]]);
                })
                ->select('products.*', 'productsale.sale_id', 'productsale.date_begin', 'productsale.date_end', 'productsale.quantity as sale_qty', 
                'productsale.quantity_sold as qty_sold_productsale', 'productsale.status as sale_status', 'productsale.created_at as sale_created_date');

            $store_saleid_products = DB::table('sale_id')
                ->rightJoinSub($store_sale_products, 'store_sale_products', function (JoinClause $join) {
                    $join->on('store_sale_products.sale_id', '=', 'sale_id.id')
                        ->where('sale_id.status', 1);
                })
                ->select('store_sale_products.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

            $store_saleid_category_products = DB::table('category')
                ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                    $join->on('store_saleid_products.category_id', '=', 'category.id')
                        ->where('category.status', 1);
                })
                ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');

            $store_saleid_category_brand_products = DB::table('brand')/////
                ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                        ->where('brand.status', 1);
                })
                ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');


            $store_saleid_category_brand_review_products = DB::table('product_reviews')
                ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                    $join->on('store_saleid_category_brand_products.product_id', '=', 'product_reviews.product_id');
                })
                ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
                ->groupBy('product_id')
                ///where
                ->where('sale_id','!=',null)
                ->orderBy('store_created_date', 'DESC')
                ->offset($offset)
                ->limit($limit)
                ->get();

                $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
                ->where('status', 1)
                ->get();
                $end_page = 1;
                if (count($product_qty) > $limit) {
                    $end_page = ceil(count($product_qty) / $limit);
                }


            return response()->json(

                ['success' => true, 'message' => "tai du lieu thanh cong", 'products_sale' => $store_saleid_category_brand_review_products,
                 "product_qty" => count($store_saleid_category_brand_review_products), 'date' => date('Y-m-d H:i:s'),
                 'product_quantity'=>$product_qty,'end'=>$end_page],
                200

            );
        }
        return response()->json(

            ['success' => false, 'message' => "tai du lieu khong thanh cong"],
            200

        );

    }

    //chi tiet sp
    public function product_detail($slug,$other_product_limit, $comment_limit)
    {
  
        $store_products = DB::table('productstore')
            ->join("product", 'productstore.product_id', '=', 'product.id')
            ->where('productstore.status', 1)
            ->select('product.id as product_id', 'product.name as product_name', 'product.slug as product_slug', 'product.image as product_image', 'product.price as listed_price', 'product.category_id', 'product.brand_id', 'product.description as product_short_description', 'product.detail as product_detail', 'productstore.quantity as store_qty', 'productstore.quantity_sold as qty_sold_productstore', 'productstore.status as store_status', 'productstore.created_at as store_created_date');

        $store_sale_products = DB::table('productsale')
            ->rightJoinSub($store_products, 'products', function (JoinClause $join) {
                $join->on('products.product_id', '=', 'productsale.product_id')
                    ->where([['productsale.status', 1], ['productsale.date_begin', '<=', date('Y-m-d H:i:s')], ['productsale.date_end', '>=', date('Y-m-d H:i:s')]]);
            })
            ->select('products.*', 'productsale.sale_id', 'productsale.date_begin', 'productsale.date_end', 'productsale.quantity as sale_qty', 'productsale.quantity_sold as qty_sold_productsale', 'productsale.status as sale_status', 'productsale.created_at as sale_created_date');

        $store_saleid_products = DB::table('sale_id')
            ->rightJoinSub($store_sale_products, 'store_sale_products', function (JoinClause $join) {
                $join->on('store_sale_products.sale_id', '=', 'sale_id.id')
                    ->where('sale_id.status', 1);
            })
            ->select('store_sale_products.*', 'sale_id.name as sale_name', 'sale_id.short_description as sale_id_short_description', 'sale_id.image as sale_id_image', 'sale_id.percent_sale', 'sale_id.price_sale');

        $store_saleid_category_products = DB::table('category')
            ->rightJoinSub($store_saleid_products, 'store_saleid_products', function (JoinClause $join) {
                $join->on('store_saleid_products.category_id', '=', 'category.id')
                    ->where('category.status', 1);
            })
            ->select('store_saleid_products.*', 'category.name as category_name', 'category.slug as category_slug', 'category.image as category_image', 'category.description as category_description');

        $store_saleid_category_brand_products = DB::table('brand')/////
            ->rightJoinSub($store_saleid_category_products, 'store_saleid_category_products', function (JoinClause $join) {
                $join->on('store_saleid_category_products.brand_id', '=', 'brand.id')
                    ->where('brand.status', 1);
            })
            ->select('store_saleid_category_products.*', 'brand.name as brand_name', 'brand.slug as brand_slug', 'brand.image as brand_image', 'brand.description as brand_description');


        $store_saleid_category_brand_review_products = DB::table('product_reviews')
            ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                $join->on('store_saleid_category_brand_products.product_id', '=', 'product_reviews.product_id');
            })
            ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
            ->groupBy('product_id')
            ->where('product_slug', $slug)
            ->orderBy('store_created_date', 'DESC')
            ->first();
       
        /////////////////////////////////
        $listId = array();
        array_push($listId, $store_saleid_category_brand_review_products->category_id);
        $args_cat1 = [
            ['parent_id', '=', $store_saleid_category_brand_review_products->category_id],
            ['status', '=', 1]
        ];
        $list_category1 = DB::table('category')->where($args_cat1)->get();
        if (count($list_category1) > 0) {
            foreach ($list_category1 as $row1) {
                array_push($listId, $row1->id);
                $args_cat2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_category2 = Category::where($args_cat2)->get();
                if (count($list_category2) > 0) {
                    foreach ($list_category2 as $row2) {
                        array_push($listId, $row2->id);
                    }
                }
            }
        }

        $other_products = DB::table('product_reviews')
            ->rightJoinSub($store_saleid_category_brand_products, 'store_saleid_category_brand_products', function (JoinClause $join) {
                $join->on('store_saleid_category_brand_products.product_id', '=', 'product_reviews.product_id');
            })
            ->select('store_saleid_category_brand_products.*', DB::raw('SUM(rating_score)/COUNT(rating_score) AS rating_score, COUNT(rating_score) as rating_qty'))
            ->groupBy('product_id')
            ->orderBy('store_created_date', 'DESC')
            ->where('store_saleid_category_brand_products.product_id', '!=', $store_saleid_category_brand_review_products->product_id)
            ->whereIn('category_id', $listId)
            ->limit($other_product_limit)
            ->get();


        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        $store_sold_qty = DB::table('productstore')->where('product_id', $store_saleid_category_brand_review_products->product_id)->sum('quantity_sold');
        $sale_sold_qty = DB::table('productsale')->where('product_id', $store_saleid_category_brand_review_products->product_id)->sum('quantity_sold');
        $sold_qty = $store_sold_qty + $sale_sold_qty;
        ///////////////////////////////////////
        $product_comment = DB::table('product_reviews')
        ->where('product_id', $store_saleid_category_brand_review_products->product_id)->limit($comment_limit)->join('user','product_reviews.customer_id','=','user.id')
                ->select('product_reviews.id as product_reviews_id','product_reviews.rating_score','product_reviews.content','product_reviews.review_photo','product_reviews.created_at as review_date',
                'user.id as user_id','user.name as customer_name','user.image as user_image')->get();




        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong",
             'product_detail' => $store_saleid_category_brand_review_products,
              'other_products' => $other_products, 
              'other_products_qty' => count($other_products), 
              'sold_qty' => $sold_qty,
              'product_comment'=>$product_comment],
            200

        );

    }
}

<?php

namespace App\Http\Controllers\Api\Frontend;
use App\Models\Brand;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    //
    public function index()

    {

        $brands = Brand::orderBy('created_at','DESC')->get();

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'brands' => $brands],

            200

        );
    }

    public function getBySlug($slug)
    {
        $brands = Brand::where([['status', '=', 1], ['slug', '=', $slug]])->first();
        if ($brands == null) {
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
                'brands' => $brands
               
            ],
            200


        );

    }
    public function show($id)

    {
        if(is_numeric($id)){
            $brand = Brand::findOrFail($id);

        }
        else{
            $brand=Brand::where('slug',$id)->first();
        }


        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'brand' => $brand],

            200

        );
    }

    //them store
    public function store(Request $request)
    {
        $brand = new Brand();
        $brand->name = $request->name; //form
        $brand->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('image/brand'), $filename);
            }
        }
        $brand->description = $request->description; //form

        $brand->sort_order = $request->sort_order; //form
        $brand->metakey = $request->metakey; //form
        $brand->metadesc = $request->metadesc; //form
        $brand->created_at = date('Y-m-d H:i:s');
        $brand->created_by = 1;
        $brand->status = $request->status; //form
        $brand->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $brand],
            201
        );
    }

    //cap nhạt
    public function update(Request $request, $id)

    {

        $brand = Brand::find($id);

        $brand->name = $request->name; //form

        $brand->slug = Str::of($request->name)->slug('-');

        // $brand->image = $request->name;
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $brand->slug . '.' . $extension;
                $brand->image = $filename;
                $files->move(public_path('image/brand'), $filename);
            }
        }

       
        $brand->description = $request->description; //form

        $brand->sort_order = $request->sort_order; //form

        $brand->metakey = $request->metakey; //form

        $brand->metadesc = $request->metadesc; //form

        $brand->updated_at = date('Y-m-d H:i:s');

        $brand->updated_by = 1; //takm cho =1

        $brand->status = $request->status; //form
        

        $brand->save(); //Luuu vao C


        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'brand' => $brand],

            200

        );
    }

   

    //xoa lun

    public function destroy($id)
    {
        $brand = Brand::find($id);
        if ($brand == null) {
            return response()->json(
                ['message' => 'Tai du lieu thanh cong', 'success' => false, 'data' => null],
                404
            );
        }
        $brand->delete();
        return response()->json(['message' => 'thành công', 'success' => true, 'data' => $brand], 200);
    }

    //xoa tam
    public function delete($id)
    {
        $brand = DB::table('brand')
              ->where('id', '=',$id)
              ->update(['status' => 0]);
        return response()->json(['message' => 'thành công', 'success' => true, 'delete' => $brand], 200);
    }

    //
    public function restore($id)
    {
        $brand = DB::table('brand')
              ->where('id', '=',$id)
              ->update(['status' => 1]);
        return response()->json(['message' => 'thành công', 'success' => true, 'restore' => $brand], 200);
    }

    public function getListRemove($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $brands = Brand::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 0)
            ->get();

            // $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
          
            // ->get();
            $brand_all = Brand::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($brand_all) > $limit) {
                $end_page = ceil(count($brand_all) / $limit);
            }


        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'brands' => $brands,
            'end'=>$end_page
        ],

            200

        );
    }

    public function get_byPage($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $brands = Brand::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 1)
            ->get();

            // $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
          
            // ->get();
            $brand_all = Brand::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($brand_all) > $limit) {
                $end_page = ceil(count($brand_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'brands' => $brands,
            'end'=>$end_page
        ],

            200

        );
    }





}

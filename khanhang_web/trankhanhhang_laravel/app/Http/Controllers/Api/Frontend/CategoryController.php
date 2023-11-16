<?php

namespace App\Http\Controllers\Api\Frontend;
use App\Models\Category;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function category_list($parent_id = 0)
    {
        $args = [

            ['parent_id', '=', $parent_id],
            ['status', '=', 1]
        ];
        $data = Category::where($args)->orderBy('sort_order', 'ASC')->get();
        return response()->json([
            'categories' => $data,
            'message' => "Thành công",
            'success' => true
        ], 200);
    }

    // public function getBySlug($slug)
    // {
    //     $categories = Category::where([['status', '=', 1], ['slug', '=', $slug]])->first();
    //     if ($categories == null) {
    //         return response()->json(
    //             [
    //                 'success' => false,
    //                 'message' => 'khong tim thay du lieu',
    //                 'product' => null
    //             ],
    //             404
    //         );
    //     }

    //     return response()->json(
    //         [
    //             'success' => true,
    //             'message' => "tai du lieu thanh cong",
    //             'categories' => $categories

    //         ],
    //         200


    //     );
    // }
    // Get ---brand/index --lấy danh sách 

    public function index()

    {

        $categories = Category::orderBy('created_at', 'DESC')->get();

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'categories' => $categories],

            200

        );
    }
    // Get -brand/show-- lấy ra 1 danh mục dựa vào id  
    public function show($id)

    {
        if (is_numeric($id)) {
            $category = Category::findOrFail($id);
        }
         else {
            $category = Category::where('slug', $id)->first();
        }
        if ($category == null) {
            return response()->json(
                ['message' => 'Tai du lieu k thanh cong', 'success' => false, 'category' => null],
                404
            );
        }
        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'category' => $category],

            200

        );
    }
    //Post- them store --them danh mục
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->name; //form
        $category->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        //up load file
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('image/category'), $filename);
            }
        }
        $category->parent_id = $request->parent_id;
        $category->sort_order = $request->sort_order; //form
        $category->metakey = $request->metakey; //form
        $category->metadesc = $request->metadesc; //form

        $category->created_at = date('Y-m-d H:i:s');
        $category->created_by = 1;
        $category->status = $request->status; //form
        $category->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $category],
            201
        );
    }
    //category-update --cập nhật dnah mục
    public function update(Request $request, $id)

    {
        $category = Category::find($id);

        $category->name = $request->name; //form

        $category->slug = Str::of($request->name)->slug('-');

        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $category->slug . '.' . $extension;
                $category->image = $filename;
                $files->move(public_path('image/category'), $filename);
            }
        }

        $category->sort_order = $request->sort_order; //form

        $category->metakey = $request->metakey; //form

        $category->metadesc = $request->metadesc; //form

        $category->parent_id = $request->parent_id;


        $category->updated_at = date('Y-m-d H:i:s');

        $category->updated_by = 1; //takm cho =1

        $category->status = $request->status; //form

        $category->save(); //Luuu vao CSDL

        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'category' => $category],

            200

        );
    }
    // xóa danh mục
    public function destroy($id)
    {
        $category = Category::find($id);
        if ($category == null) {
            return response()->json(
                ['message' => 'Tai du lieu thanh cong', 'success' => false, 'data' => null],
                404
            );
        }
        $category->delete();
        return response()->json(['message' => 'thành công', 'success' => true, 'data' => $category], 200);
    }
    public function delete($id)
    {
        $category = DB::table('category')
              ->where('id', '=',$id)
              ->update(['status' => 0]);
        return response()->json(['message' => 'thành công', 'success' => true, 'delete' => $category], 200);
    }

    public function restore($id)
    {
        $category = DB::table('category')
              ->where('id', '=',$id)
              ->update(['status' => 1]);
        return response()->json(['message' => 'thành công', 'success' => true, 'restore' => $category], 200);
    }

    public function getListRemove($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $categories = Category::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 0)
            ->get();

            // $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
          
            // ->get();
            $category_all = Category::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($category_all) > $limit) {
                $end_page = ceil(count($category_all) / $limit);
            }


        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'categories' => $categories,
            'end'=>$end_page
        ],

            200

        );
    }
    public function get_byPage($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $categories = Category::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 1)
            ->get();

            
            $category_all = Category::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($category_all) > $limit) {
                $end_page = ceil(count($category_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'categories' => $categories,
            'end'=>$end_page
        ],

            200

        );
    }

}

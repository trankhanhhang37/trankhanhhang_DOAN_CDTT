<?php

namespace App\Http\Controllers\Api\Backend;

use App\Http\Controllers\Controller;
use App\Models\Orderdetail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderdetailController extends Controller
{
    //Get ---brand/index --lấy danh sách 
    public function index()

    {

        $orderdetails = Orderdetail::all(); //::where()->orderdetailBy()->get();

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'orderdetails' => $orderdetails],

            200

        );
    }
    // Get -brand/show-- lấy ra 1 danh mục dựa vào id
    public function show($id)

    {

        $orderdetail = orderdetail::find($id);

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'orderdetail' => $orderdetail],

            200

        );
    }
    //Post- them store --them danh mục
    public function store(Request $request)
    {
        $orderdetail = new Orderdetail();
       // $menu->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $orderdetail->order_id = $request->order_id;


        $orderdetail->product_id = $request->product_id;

        $orderdetail->price=$request->price;//form


        $orderdetail->quantity=$request->quantity;

        $orderdetail->amount=$request->amount;
  
        $orderdetail->updated_at = date('Y-m-d H:i:s');

        $orderdetail->created_at = date('Y-m-d H:i:s');

        $orderdetail->save(); //lưu vào Csdl
        
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'orderdetail' => $orderdetail],
            201
        );
    }
    //category-update --cập nhật dnah mục
    public function update(Request $request, $id)

    {

        $orderdetail = orderdetail::find($id);

        $orderdetail->order_id = $request->order_id;


        $orderdetail->product_id = $request->product_id;

        $orderdetail->price=$request->price;//form


        $orderdetail->quantity=$request->quantity;

        $orderdetail->amount=$request->amount;
        
        $orderdetail->updated_at = date('Y-m-d H:i:s');

        $orderdetail->created_at = date('Y-m-d H:i:s');
        
        $orderdetail->save(); //lưu vào Csdl
        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'data' => $orderdetail],

            200

        );
    }
    // xóa danh mục
    public function destroy ($id)
    {
        $orderdetail = Orderdetail::find($id);
        if($orderdetail == null){
            return response()->json(
                ['message'=>'Tai du lieu thanh cong','success'=>false,'data'=> null],404
            );
        }
        $orderdetail->delete();
        return response()->json(['message'=> 'thành công','success'=>true,'data'=>$orderdetail],200);

    }

    public function delete($id)
    {
        $orderdetail = DB::table('orderdetail')
              ->where('id', '=',$id)
              ->update(['status' => 0]);
        return response()->json(['message' => 'thành công', 'success' => true, 'delete' => $orderdetail], 200);
    }

    public function restore($id)
    {
        $orderdetail = DB::table('orderdetail')
              ->where('id', '=',$id)
              ->update(['status' => 1]);
        return response()->json(['message' => 'thành công', 'success' => true, 'restore' => $orderdetail], 200);
    }

    public function getListRemove($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $orderdetails = Orderdetail::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 0)
            ->get();

            // $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
          
            // ->get();
            $end_page = 1;
            if (count($orderdetails) > $limit) {
                $end_page = ceil(count($orderdetails) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'orderdetails' => $orderdetails,
            'end'=>$end_page
        ],

            200

        );
    }
    public function get_byPage($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $orderdetails = Orderdetail::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 1)
            ->get();

           
            $end_page = 1;
            if (count($orderdetails) > $limit) {
                $end_page = ceil(count($orderdetails) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'orderdetails' => $orderdetails,
            'end'=>$end_page
        ],

            200

        );
    }


}

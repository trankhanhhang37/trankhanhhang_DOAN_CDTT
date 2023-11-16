<?php

namespace App\Http\Controllers\Api\Backend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    //Get ---brand/index --lấy danh sách 
    public function index()

    {

        $orders = Order::orderBy('created_at','DESC')->get();

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'orders' => $orders],

            200

        );
    }
    // Get -brand/show-- lấy ra 1 danh mục dựa vào id
    public function show($id)

    {

        $order = Order::find($id);

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'order' => $order],

            200

        );
    }
    //Post- them store --them danh mục
    public function store(Request $request)
    {
        $order = new Order();
       // $menu->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $order->user_id = $request->user_id;


        $order->name = $request->name; //form

        $order->phone=$request->phone;//form


        $order->email=$request->email;

        $order->address=$request->address;

        $order->note=$request->note;


        $order->created_at = date('Y-m-d H:i:s');
        
        $order->created_by = 1;
        
        $order->status = $request->status; //form
        
        $order->save(); //lưu vào Csdl
        
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'order' => $order],
            201
        );
    }
    //category-update --cập nhật dnah mục
    public function update(Request $request, $id)

    {

        $order = Order::find($id);

        $order->user_id = $request->user_id;


        $order->name = $request->name; //form

        $order->phone=$request->phone;//form


        $order->email=$request->email;

        $order->address=$request->address;

        $order->note=$request->note;


        $order->created_at = date('Y-m-d H:i:s');
        
        $order->created_by = 1;
        
        $order->status = $request->status; //form
        
        $order->save(); //lưu vào Csdl
        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'order' => $order],

            200

        );
    }
    // xóa danh mục
    public function destroy ($id)
    {
        $order = Order::find($id);
        if($order == null){
            return response()->json(
                ['message'=>'Tai du lieu thanh cong','success'=>false,'data'=> null],404
            );
        }
        $order->delete();
        return response()->json(['message'=> 'thành công','success'=>true,'data'=>$order],200);

    }

    public function delete($id)
    {
        $order = DB::table('order')
              ->where('id', '=',$id)
              ->update(['status' => 0]);
        return response()->json(['message' => 'thành công', 'success' => true, 'delete' => $order], 200);
    }

    public function restore($id)
    {
        $order = DB::table('order')
              ->where('id', '=',$id)
              ->update(['status' => 1]);
        return response()->json(['message' => 'thành công', 'success' => true, 'restore' => $order], 200);
    }

    public function getListRemove($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $orders = Order::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 0)
            ->get();

            $orders_all = Order::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($orders_all) > $limit) {
                $end_page = ceil(count($orders_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'orders' => $orders,
            'end'=>$end_page
        ],

            200

        );
    }
    public function get_byPage($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $orders = Order::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 1)
            ->get();

            $orders_all = Order::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($orders_all) > $limit) {
                $end_page = ceil(count($orders_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'orders' => $orders,
            'end'=>$end_page
        ],

            200

        );
    }


}

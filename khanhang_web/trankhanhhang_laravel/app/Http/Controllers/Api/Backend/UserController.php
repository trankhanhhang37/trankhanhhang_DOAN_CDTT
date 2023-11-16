<?php

namespace App\Http\Controllers\Api\Backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
class UserController extends Controller
{
    public function index()
    {

        $users = User::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'users' => $users],

            200

        );
    }
    public function getCustomer()
    {

        $users = User::where([['status', '=', 1], ['roles', '=', 'KHACHHANG']])->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'users' => $users],

            200

        );
    }

    public function show($id)
    {

        $user = User::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'user' => $user],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name; 
        $user->email = $request->email; 
        $user->phone = $request->phone; 
        $user->username = $request->username; 
        $user->password = $request->password; 
        $user->address = $request->address; 
        $user->roles = $request->roles; 
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $user->slug . '.' . $extension;
                $user->image = $filename;
                $files->move(public_path('image/user'), $filename);
            }
        }

        $user->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'user' => $user],
            201
        );
    }
    //user-update
    public function update(Request $request, $id)
    {

        $user = User::find($id);
        $user->name = $request->name; 
        $user->email = $request->email; 
        $user->phone = $request->phone; 
        $user->username = $request->username; 
        $user->password = $request->password; 
        $user->address = $request->address; 
        $user->roles = $request->roles; 
        $user->created_at = date('Y-m-d H:i:s');
        $user->created_by = 1;
        $user->status = $request->status; //form
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $user->slug . '.' . $extension;
                $user->image = $filename;
                $files->move(public_path('image/user'), $filename);
            }
        }

        $user->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'user' => $user],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $user = user::find($id);
        if ($user == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'user' => null],
                404
            );
        }
        $user->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'user' => $user], 200);

    }

    public function register(Request $request)
        {
            $user = new User();
            $user->name = $request->name; //form
            $user->email = $request->email; //form
            $user->phone = $request->phone; //form
            $user->address = $request->address; //form
            $user->image = $request->image; //form
            $user->password=$request->password;
            $user->roles = $request->roles; //form
            $user->created_at = date('Y-m-d H:i:s');
            $user->created_by = 1;
            $user->status = $request->status; //form
            $user->save(); //lưu vào Csdl
         return response()->json(
                ['success' => true, 'message' => 'Đăng ký thành công', 'user' => $user],
                200
            );
        }
    public function login(Request $request)
           {
            $args = [
                ['email', '=',$request->email],
                ['password', '=',$request->password],
                ['status','=',1]
            ];
            $user = User::where($args) -> count();

            if($user===1){
                return response()->json(
                    [
                        'success' => true,
                        'message' => 'Đăng nhập thành công',
                        'user' => $user
                    ],
                    200
                );
            }else{
                return response()->json(
                    [
                        'success' => false,
                        'message' => 'Đăng nhập không thành công',
                        'user' => $user
                    ],
                    200
                );
            }

    
           }

           
           public function delete($id)
           {
               $user = DB::table('user')
                     ->where('id', '=',$id)
                     ->update(['status' => 0]);
               return response()->json(['message' => 'thành công', 'success' => true, 'delete' => $user], 200);
           }
       
           public function restore($id)
           {
               $user = DB::table('user')
                     ->where('id', '=',$id)
                     ->update(['status' => 1]);
               return response()->json(['message' => 'thành công', 'success' => true, 'restore' => $user], 200);
           }
       
           public function getListRemove($limit, $page)  // phân trang
           { 
       
               $offset = ($page - 1) * $limit;
               $users = User::orderBy("created_at", "DESC")
                   ->offset($offset)
                   ->limit($limit)
                   ->where('status', 0)
                   ->get();
       
                   // $product_qty = DB::table('productstore')  //'product_quantity'=>$product_qty,'end'=>$end_page
                 
                   // ->get();
                   $user_all = User::orderBy("created_at", "DESC")
                   ->where('status', 1)
                   ->get();
                   $end_page = 1;
                   if (count($user_all) > $limit) {
                       $end_page = ceil(count($user_all) / $limit);
                   }
       
               return response()->json(
       
                   ['success' => true, 'message' => "tai du lieu thanh cong", 'users' => $users,
                   'end'=>$end_page
               ],
       
                   200
       
               );
           }
           public function get_byPage($limit, $page)  // phân trang
           { 
       
               $offset = ($page - 1) * $limit;
               $users = User::orderBy("created_at", "DESC")
                   ->offset($offset)
                   ->limit($limit)
                   ->where('status', 1)
                   ->get();
       
                   $user_all = User::orderBy("created_at", "DESC")
                   ->where('status', 1)
                   ->get();
                   $end_page = 1;
                   if (count($user_all) > $limit) {
                       $end_page = ceil(count($user_all) / $limit);
                   }
       
               return response()->json(
       
                   ['success' => true, 'message' => "tai du lieu thanh cong", 'users' => $users,
                   'end'=>$end_page
               ],
       
                   200
       
               );
           }
       


}

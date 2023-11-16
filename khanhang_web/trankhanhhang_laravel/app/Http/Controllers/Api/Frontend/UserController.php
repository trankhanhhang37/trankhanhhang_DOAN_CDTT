<?php

namespace App\Http\Controllers\Api\Frontend;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function index()
    {

        $users = User::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'users' => $users],

            200

        );
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

           
}

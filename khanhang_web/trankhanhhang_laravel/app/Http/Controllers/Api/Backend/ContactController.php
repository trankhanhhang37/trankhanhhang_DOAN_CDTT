<?php

namespace App\Http\Controllers\Api\Backend;
use App\Models\Contact;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str; 
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    //    //Get ---brand/index --lấy danh sách 
    public function index()

    {

        $contacts = Contact::orderBy('created_at','DESC')->get();

        return response()->json(

            ['success' => true, 'message' => 'Tải dữ liệu thành công', 'contacts' => $contacts],

            200

        );
    }
    // Get -brand/show-- lấy ra 1 danh mục dựa vào id
    public function show($id)

    {

        $contact = Contact::find($id);
        
            if ($contact == null){
                return response()->json(
                    ['message'=>'Tai du lieu k thanh cong','success'=>false,'contact'=>null],404
                );
            }
            return response()->json(

                ['success' => true, 'message' => 'Tải dữ liệu thành công', 'contact' => $contact],
    
                200

        );
    }
    //Post- them store --them liên hệ
    public function store(Request $request)
    {
        $contact = new Contact();
       // $contact->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $contact->user_id = $request->user_id;

        $contact->name = $request->name; //form

        $contact->email=$request->email;//form

        $contact->title=$request->title;

        $contact->phone=$request->phone;


        $contact->content=$request->content;

        $contact->replay_id= 1 ;

        $contact->created_at = date('Y-m-d H:i:s');
        
        $contact->created_by = 1;
        
        $contact->status = $request->status; //form
        
        $contact->save(); //lưu vào Csdl
        
        return response()->json(
            ['success' => true, 'message' => 'Thành công', 'data' => $contact],
            201
        );
    }
    public function update(Request $request, $id)

    {

        $contact = Contact::find($id);

        $contact->user_id = $request->user_id;

        $contact->name = $request->name; //form

        $contact->email=$request->email;//form

        $contact->phone=$request->phone;

        $contact->title=$request->title;

        $contact->content=$request->content;

        $contact->replay_id=$request->reply_id;

        $contact->updated_at = date('Y-m-d H:i:s');

        $contact->updated_by = 1; //takm cho =1

        $contact->status = $request->status; //form

        $contact->save(); //Luuu vao CSDL

        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'contact' => $contact],

            200

        );
    }
    public function reply(Request $request) // phản hồi liên hệ 

    {

        $contact = new Contact();

        $contact->user_id = $request->user_id;

        $contact->name = $request->name; //form

        $contact->email=$request->email;//form

        $contact->phone=$request->phone;

        $contact->title=$request->title;

        $contact->content=$request->content;

      //  $contact->cont_reply=$request->cont_reply; 


        $contact->replay_id=$request->reply_id;

        $contact->updated_at = date('Y-m-d H:i:s');

        $contact->updated_by = 1; //takm cho =1

        $contact->status = $request->status; //form

        $contact->save(); //Luuu vao CSDL

        return response()->json(

            ['success' => true, 'message' => 'Thành công', 'contact' => $contact],

            200

        );
    }


    // xóa danh mục
    public function destroy ($id)
    {
        $contact = Contact::find($id);
        if($contact == null){
            return response()->json(
                ['message'=>'Tai du lieu thanh cong','success'=>false,'data'=> null],404
            );
        }
        $contact->delete();
        return response()->json(['message'=> 'thành công','success'=>true,'data'=>$contact],200);

    }
    ////////////////////
    public function delete($id)
    {
        $contact = DB::table('contact')
              ->where('id', '=',$id)
              ->update(['status' => 0]);
        return response()->json(['message' => 'thành công', 'success' => true, 'delete' => $contact], 200);
    }

    public function restore($id)
    {
        $contact = DB::table('contact')
              ->where('id', '=',$id)
              ->update(['status' => 1]);
        return response()->json(['message' => 'thành công', 'success' => true, 'restore' => $contact], 200);
    }

    public function getListRemove($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $contacts = Contact::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 0)
            ->get();

            $contacts_all = Contact::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($contacts_all) > $limit) {
                $end_page = ceil(count($contacts_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'contacts' => $contacts,
            'end'=>$end_page
        ],

            200

        );
    }
    public function get_byPage($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $contacts = Contact::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 1)
            ->get();

            $contacts_all = Contact::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($contacts_all) > $limit) {
                $end_page = ceil(count($contacts_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'contacts' => $contacts,
            'end'=>$end_page
        ],

            200

        );
    }


}

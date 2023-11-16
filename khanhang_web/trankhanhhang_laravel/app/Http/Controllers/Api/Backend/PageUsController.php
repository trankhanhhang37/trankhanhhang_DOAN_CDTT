<?php

namespace App\Http\Controllers\Api\Backend;

use App\Http\Controllers\Controller;
use App\Models\PageUs;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str; 

class PageUsController extends Controller
{
    public function index()  //lấy tất cả
    {

        $pages = PageUs::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'pages' => $pages],

            200

        );
    }

    public function show($id) //lấy 1
    {

        if(is_numeric($id)){
            $page = PageUs::findOrFail($id);

        }
        else{
            $page=PageUs::where('slug','=',$id)->first();
        }


        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'page' => $page],

            200

        );
    }
    //page- them store
    public function store(Request $request) //thêm 
    {
        $page = new PageUs();
        //$page->topic_id = $request->topic_id; //form
        $page->title = $request->title; //form
        $page->name = $request->name; //form
        $page->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $page->detail = $request->detail; //form
        $page->type = $request->type; //form
        $page->metakey = $request->metakey; //form
        $page->metadesc = $request->metadesc; //form
        // $page->parent_id = $request->parent_id;
        $page->sort_order = $request->sort_order; //form
        $page->created_at = date('Y-m-d H:i:s');
        $page->created_by = 1;
        $page->status = $request->status; //form
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $page->slug . '.' . $extension;
                $page->image = $filename;
                $files->move(public_path('image/page'), $filename);
            }
        }

        $page->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'page' => $page],
            201
        );
    }
    //page-update
    public function update(Request $request, $id) //cập nhật
    {

        $page = PageUs::find($id);
       // $page->topic_id = $request->topic_id; //form
       $page->name = $request->name; //form
        $page->title = $request->title; //form
        $page->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $page->detail = $request->detail; //form
        $page->type = $request->type; //form
        $page->metakey = $request->metakey; //form
        $page->metadesc = $request->metadesc; //form
        // $page->parent_id = $request->parent_id;
        $page->created_at = date('Y-m-d H:i:s');
        $page->created_by = 1;
        $page->status = $request->status; //form
        $page->sort_order = $request->sort_order; //form
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $page->slug . '.' . $extension;
                $page->image = $filename;
                $files->move(public_path('image/page'), $filename);
            }
        }

        $page->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'page' => $page],

            200

        );
    }
    //xoa
    public function destroy($id)  //xóa
    {
        $page = PageUs::find($id);
        if ($page == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'data' => null],
                404
            );
        }
        $page->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'data' => $page], 200);

    }

    public function delete($id)
    {
        $page = DB::table('pageus')
              ->where('id', '=',$id)
              ->update(['status' => 0]);
        return response()->json(['message' => 'thành công', 'success' => true, 'delete' => $page], 200);
    }

    public function restore($id)
    {
        $page = DB::table('pageus')
              ->where('id', '=',$id)
              ->update(['status' => 1]);
        return response()->json(['message' => 'thành công', 'success' => true, 'restore' => $page], 200);
    }

    public function getListRemove($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $pages = PageUs::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 0)
            ->get();

            $pages_all = PageUs::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($pages_all) > $limit) {
                $end_page = ceil(count($pages_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'pages' => $pages,
            'end'=>$end_page
        ],

            200

        );
    }
    public function get_byPage($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $pages = PageUs::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 1)
            ->get();

            $pages_all = PageUs::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($pages_all) > $limit) {
                $end_page = ceil(count($pages_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'pages' => $pages,
            'end'=>$end_page
        ],

            200

        );
    }



    // public function page_list( $limit,$type)
    // {
    //     $args = [
    //         ['type', '=', $type],
    //         ['status', '=',1]
    //     ];
    //     $page = page::where($args)
    //     ->orderBy('created_at', 'DESC')
    //     ->limit($limit)->get();
    //     return response()->json(
    //         ['success' => true, 
    //         'message' => "tai du lieu thanh cong", 
    //         'page' => $page],200);
    // }

    // public function page_all($limit) 
    // {
    //     //$offset = ($page - 1) * $limit;
    //     $pages = page::where('status', 1)
    //         ->orderBy('created_at', 'DESC')
    //        // ->offset($offset)
    //         ->limit($limit)
    //         ->get();
    //         if(count($pages)>0){
    //             return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'pages' => $pages], 200);

    //         }
    //         else
    //         {
    //             return response()->json(
    //                 ['success' => false,
    //                  'message' => 'Tải dữ liệu k thành công',
    //                   'pages' => $pages],
    //                    200);
    //         }
    // }


    // public function page_detail($slug)
    // {
    //     $page = page::where([['status', '=', 1], ['slug', '=', $slug]])->first();
    //     if ($page == null) {
    //         return response()->json(
    //             [
    //                 'success' => false,
    //                 'message' => 'khong tim thay du lieu',
    //                 'page' => null
    //             ],
    //             404
    //         );
    //     }
    //     $listId = array();
    //     array_push($listId, $page->topic_id);
    //     $args_topic1 = [
    //         ['parent_id', '=', $page->topic_id],
    //         ['status', '=', 1]
    //     ];
    //     $list_topic1 = Topic::where($args_topic1)->get();
    //     if (count($list_topic1) > 0) {
    //         foreach ($list_topic1 as $row1) {
    //             array_push($listid, $row1->id);
    //             $args_topic2 = [
    //                 ['parent_id', '=', $row1->id],
    //                 ['status', '=', 1]
    //             ];
    //             $list_topic2 = Topic::where($args_topic2)->get();
    //             if (count($list_topic2) > 0) {
    //                 foreach ($list_topic2 as $row2) {
    //                     array_push($listid, $row2->id);
    //                 }
    //             }
    //         }
    //     }

    //     $page_other = page::where([['status', '=', 1], ['id', '!=', $page->id]])
    //         ->whereIn('topic_id', $listId)
    //         ->orderBy('created_at', 'DESC')
    //         ->limit(8)
    //         ->get();

    //     return response()->json(
    //         [
    //             'success' => true,
    //             'message' => "tai du lieu thanh cong",
    //             'page' => $page,
    //             'page_other' => $page_other
    //         ],
    //         200


    //     );

    // }

    // public function page_topic($limit,$topic_id)//
    // {
    //     $listid = array();
    //     array_push($listid, $topic_id + 0); //xét cấp con
    //     $args_topic1 = [
    //         ['parent_id', '=', $topic_id + 0],
    //         ['status', '=', 1]
    //     ];
    //     $list_topic1 = Topic::where($args_topic1)->get();
    //     if (count($list_topic1) > 0) {
    //         foreach ($list_topic1 as $row1) {
    //             array_push($listid, $row1->id);
    //             $args_topic2 = [
    //                 ['parent_id', '=', $row1->id],
    //                 ['status', '=', 1]
    //             ];
    //             $list_topic2 = Topic::where($args_topic2)->get();
    //             if (count($list_topic2) > 0) {
    //                 foreach ($list_topic2 as $row2) {
    //                     array_push($listid, $row2->id);
    //                 }
    //             }
    //         }
    //     }
    //    // $offset = (1 - 1) * $limit;
    //     $page_topic = page::where('status', 1) //truy vấn
    //         ->whereIn('topic_id', $listid)
    //         ->orderBy('created_at', 'DESC')
    //       //  ->offset($offset)
    //         ->limit($limit)
    //         ->get();
    //         return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'page_topic' => $page_topic], 200);
    // }

    }


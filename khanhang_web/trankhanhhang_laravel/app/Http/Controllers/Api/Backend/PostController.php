<?php

namespace App\Http\Controllers\Api\Backend;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str; 

class PostController extends Controller
{
    public function index()
    {

        $posts = Post::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'posts' => $posts],

            200

        );
    }

    public function show($id)
    {

        $post = Post::find($id);

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'post' => $post],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $post = new Post();
        $post->topic_id = $request->topic_id; //form
        $post->title = $request->title; //form
        $post->slug = Str::of($request->title)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $post->detail = $request->detail; //form
        $post->type = $request->type; //form
        $post->description = $request->description; //form

        $post->metakey = $request->metakey; //form
        $post->metadesc = $request->metadesc; //form
        $post->sort_order = $request->sort_order;
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = 1;
        $post->status = $request->status; //form
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('image/post'), $filename);
            }
        }

        $post->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'post' => $post],
            201
        );
    }
    //Post-update
    public function update(Request $request, $id)
    {

        $post = Post::find($id);
        $post->topic_id = $request->topic_id; //form
        $post->title = $request->title; //form
        $post->slug = Str::of($request->title)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $post->detail = $request->detail; //form
        $post->description = $request->description; //form

        $post->type = $request->type; //form
        $post->metakey = $request->metakey; //form
        $post->metadesc = $request->metadesc; //form
        $post->sort_order = $request->sort_order;
        $post->created_at = date('Y-m-d H:i:s');
        $post->created_by = 1;
        $post->status = $request->status; //form
        $files = $request->image;
        if ($files != null) {
            $extension = $files->getClientOriginalExtension();
            if (in_array($extension, ['jpg', 'png', 'gif', 'webp', 'jpeg'])) {
                $filename = $post->slug . '.' . $extension;
                $post->image = $filename;
                $files->move(public_path('image/post'), $filename);
            }
        }

        $post->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'post' => $post],

            200

        );
    }
    //xoa
    public function destroy($id)
    {
        $post = Post::find($id);
        if ($post == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'data' => null],
                404
            );
        }
        $post->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'data' => $post], 200);

    }

    public function delete($id)
    {
        $post = DB::table('post')
              ->where('id', '=',$id)
              ->update(['status' => 0]);
        return response()->json(['message' => 'thành công', 'success' => true, 'delete' => $post], 200);
    }

    public function restore($id)
    {
        $post = DB::table('post')
              ->where('id', '=',$id)
              ->update(['status' => 1]);
        return response()->json(['message' => 'thành công', 'success' => true, 'restore' => $post], 200);
    }

    public function getListRemove($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $posts = Post::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 0)
            ->get();

            $posts_all = Post::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($posts_all) > $limit) {
                $end_page = ceil(count($posts_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'posts' => $posts,
            'end'=>$end_page
        ],

            200

        );
    }
    public function get_byPage($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $posts = Post::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 1)
            ->get();

            $posts_all = Post::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($posts_all) > $limit) {
                $end_page = ceil(count($posts_all) / $limit);
            }
        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'posts' => $posts,
            'end'=>$end_page
        ],

            200

        );
    }


    public function post_list( $limit,$type)
    {
        $args = [
            ['type', '=', $type],
            ['status', '=',1]
        ];
        $post = Post::where($args)
        ->orderBy('created_at', 'DESC')
        ->limit($limit)->get();
        return response()->json(
            ['success' => true, 
            'message' => "tai du lieu thanh cong", 
            'post' => $post],200);
    }

    public function post_all($limit,$page) 
    {
        $offset = ($page - 1) * $limit;
        $posts = Post::where('status', 1)
            ->orderBy('created_at', 'DESC')
           ->offset($offset)
            ->limit($limit)
            ->get();

            $post_all = DB::table('post') 
                 //'product_quantity'=>$product_qty,'end'=>$end_page
                ->where('status', 1)
                ->get();
                $end_page = 1;
                if (count($post_all) > $limit) {
                    $end_page = ceil(count($post_all) / $limit);
                }

                return response()->json(

                    ['success' => true, 'message' => "tai du lieu thanh cong", 'posts' => $posts,
                    'end'=>$end_page
                ],
        
                    200
        
                );
            // if(count($posts)>0){
            //     return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'posts' => $posts], 200);

            // }
            // else
            // {
            //     return response()->json(
            //         ['success' => false,
            //          'message' => 'Tải dữ liệu k thành công',
            //           'posts' => $posts],
            //            200);
            // }
    }


    public function post_detail($slug)
    {
        $post = Post::where([['status', '=', 1], ['slug', '=', $slug]])->first();
        if ($post == null) {
            return response()->json(
                [
                    'success' => false,
                    'message' => 'khong tim thay du lieu',
                    'post' => null
                ],
                404
            );
        }
        $listId = array();
        array_push($listId, $post->topic_id);
        $args_topic1 = [
            ['parent_id', '=', $post->topic_id],
            ['status', '=', 1]
        ];
        $list_topic1 = Topic::where($args_topic1)->get();
        if (count($list_topic1) > 0) {
            foreach ($list_topic1 as $row1) {
                array_push($listid, $row1->id);
                $args_topic2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_topic2 = Topic::where($args_topic2)->get();
                if (count($list_topic2) > 0) {
                    foreach ($list_topic2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }

        $post_other = Post::where([['status', '=', 1], ['id', '!=', $post->id]])
            ->whereIn('topic_id', $listId)
            ->orderBy('created_at', 'DESC')
            ->limit(8)
            ->get();

        return response()->json(
            [
                'success' => true,
                'message' => "tai du lieu thanh cong",
                'post' => $post,
                'post_other' => $post_other
            ],
            200


        );

    }

    public function post_topic($limit,$page, $topic_id)//
    {
        $listid = array();
        array_push($listid, $topic_id + 0); //xét cấp con
        $args_topic1 = [
            ['parent_id', '=', $topic_id + 0],
            ['status', '=', 1]
        ];
        $list_topic1 = Topic::where($args_topic1)->get();
        if (count($list_topic1) > 0) {
            foreach ($list_topic1 as $row1) {
                array_push($listid, $row1->id);
                $args_topic2 = [
                    ['parent_id', '=', $row1->id],
                    ['status', '=', 1]
                ];
                $list_topic2 = Topic::where($args_topic2)->get();
                if (count($list_topic2) > 0) {
                    foreach ($list_topic2 as $row2) {
                        array_push($listid, $row2->id);
                    }
                }
            }
        }
        $offset = ($page - 1) * $limit;
        $post_topic = Post::where('status', 1) //truy vấn
            ->whereIn('topic_id', $listid)
            ->orderBy('created_at', 'DESC')
           ->offset($offset)
            ->limit($limit)
            ->get();

            $post_all = DB::table('post')  //'product_quantity'=>$product_qty,'end'=>$end_page
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($post_all) > $limit) {
                $end_page = ceil(count($post_all) / $limit);
            }
        

            return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công',
             'post_topic' => $post_topic,
             'end'=>$end_page,],
              200);
    }
    }


<?php

namespace App\Http\Controllers\Api\Backend;

use App\Http\Controllers\Controller;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str; 


class TopicController extends Controller
{
    public function index()
    {

        $topics = Topic::all(); //::where()->orderBy()->get();

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'topics' => $topics],

            200

        );
    }
    public function show($id)
    {
        if (is_numeric($id)) {
            $topic = Topic::findOrFail($id);
        }
         else {
            $topic = Topic::where('slug', $id)->first(); 
        }
        if ($topic == null) {
            return response()->json(
                ['message' => 'Tai du lieu k thanh cong', 'success' => false, 'topic' => null],
                404
            );
        }

        return response()->json(

            ['success' => true, 'message' => 'tai du lieu thanh cong', 'topic' => $topic],

            200

        );
    }
    //Post- them store
    public function store(Request $request)
    {
        $topic = new Topic();
        $topic->name = $request->name; //form
        $topic->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $topic->metakey = $request->metakey; //form
        $topic->metadesc = $request->metadesc; //form
        $topic->parent_id = $request->parent_id;
        $topic->sort_order = $request->sort_order;
        $topic->description = $request->description;
        $topic->created_at = date('Y-m-d H:i:s');
        $topic->created_by = 1;
        $topic->status = $request->status; //form
        $topic->save(); //lưu vào Csdl
        return response()->json(
            ['success' => true, 'message' => 'Thanh cong', 'data' => $topic],
            201
        );
    }
    //Topic-update
    public function update(Request $request, $id)
    {

        $topic = Topic::find($id);

        $topic->name = $request->name; //form
        $topic->slug = Str::of($request->name)->slug('-');
        //$brand->image=$request->name;//xử lý riêng
        $topic->metakey = $request->metakey; //form
        $topic->metadesc = $request->metadesc; //form
        $topic->parent_id = $request->parent_id;
        $topic->sort_order = $request->sort_order;
        $topic->description = $request->description;
        $topic->created_at = date('Y-m-d H:i:s');
        $topic->created_by = 1;
        $topic->status = $request->status; //form
        $topic->save(); //lưu vào Csdl

        return response()->json(

            ['success' => true, 'message' => 'Thanh cong', 'topic' => $topic],

            200

        );
    }
    //xoa 
    public function destroy($id)
    {
        $topic = Topic::find($id);
        if ($topic == null) {
            return response()->json(
                ['message' => 'Tai du lieu khong thanh cong', 'success' => false, 'data' => null],
                404
            );
        }
        $topic->delete();
        return response()->json(['message' => 'Thanh cong', 'success' => true, 'data' => $topic], 200);

    }
//xoa tam
    public function delete($id)
    {
        $topic = DB::table('topic')
              ->where('id', '=',$id)
              ->update(['status' => 0]);
        return response()->json(['message' => 'thành công', 'success' => true, 'delete' => $topic], 200);
    }

    public function restore($id)
    {
        $topic = DB::table('topic')
              ->where('id', '=',$id)
              ->update(['status' => 1]);
        return response()->json(['message' => 'thành công', 'success' => true, 'restore' => $topic], 200);
    }

    public function getListRemove($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $topics = Topic::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 0)
            ->get();

            $topic_all = Topic::orderBy("created_at", "DESC")
                   ->where('status', 1)
                   ->get();
                   $end_page = 1;
                   if (count($topic_all) > $limit) {
                       $end_page = ceil(count($topic_all) / $limit);
                   }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'topics' => $topics,
            'end'=>$end_page
        ],

            200

        );
    }
    public function get_byPage($limit, $page)  // phân trang
    { 

        $offset = ($page - 1) * $limit;
        $topics = Topic::orderBy("created_at", "DESC")
            ->offset($offset)
            ->limit($limit)
            ->where('status', 1)
            ->get();

            $topic_all = Topic::orderBy("created_at", "DESC")
            ->where('status', 1)
            ->get();
            $end_page = 1;
            if (count($topic_all) > $limit) {
                $end_page = ceil(count($topic_all) / $limit);
            }

        return response()->json(

            ['success' => true, 'message' => "tai du lieu thanh cong", 'topics' => $topics,
            'end'=>$end_page
        ],

            200

        );
    }


    public function topic_all($limit) 
    {
        //$offset = ($page - 1) * $limit;
        $topics = Topic::where('status', 1)
            ->orderBy('created_at', 'DESC')
           // ->offset($offset)
            ->limit($limit)
            ->get();
            if(count($topics)>0){
                return response()->json(['success' => true, 'message' => 'Tải dữ liệu thành công', 'topics' => $topics], 200);

            }
            else
            {
                return response()->json(
                    ['success' => false,
                     'message' => 'Tải dữ liệu k thành công',
                      'topics' => $topics],
                       200);
            }
    }

    public function topic_list($parent_id = 0)
    {
        $args = [

            ['parent_id', '=', $parent_id],
            ['status', '=', 1]
        ];
        $topics = Topic::where($args)->orderBy('sort_order', 'ASC')->get();
        return response()->json([
            'topics' => $topics,
            'message' => "Thành công",
            'success' => true
        ], 200);
    }






}

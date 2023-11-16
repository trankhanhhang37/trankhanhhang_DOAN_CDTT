import { FaEdit, FaEye, FaRegTrashAlt, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useEffect, useState } from "react";
import postservice from "../../../services/PostService";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";
function PostList() {
    const [statusdel, setStatusDelete] =useState(0);
    const[posts,setPost]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await postservice.get_byPage(8, page).then(function (result) {
                setPost(result.data.posts);
                set_page_end(result.data.end)

            });
        })();
    },[statusdel,page])
    
    function postDelete(id){
        postservice.delete_tam(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">POST</strong></div>
                    <div className="col-6 text-end">
                    <Link className=" btn btn-sm btn-danger me-1" to="/admin/post/listremove">
                            <FaRegTrashAlt/>
                        </Link>
                        <Link className=" btn btn-sm btn-success" to="/admin/post/create">
                            <FaSearchPlus/>Thêm
                        </Link>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped text-center">
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Topic</th>
                        <th>Tiêu Đề</th>
                        <th>Slug</th>
                        <th>Chi Tiết</th>
                        <th>Ảnh</th>
                        <th>Type</th>
                        <th>Ngày Tạo</th>
                        <th>Chức Năng</th>
                        
                    </tr>
                 </thead>
                 <tbody>
                    {posts.map(function(post,index){
                        return( <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{post.id}</td>
                            <td>
                                {post.topic_id}
                            </td>
                            <td>
                                {post.title}
                            </td>
                            <td>
                                {post.slug}
                            </td>
                            <td>
                                {post.detail}
                            </td>
                            <td>
                            <img src={urlImage+'post/'+post.image} alt="hinh.png" className="img-fluid"
                                style={{maxWidth:100, maxHeight:100}}/>
                            </td>
                            <td>
                                {post.type}
                            </td>
                            <td>
                               {post.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/post/show/"+post.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/post/update/"+post.id}>
                               <FaEdit/> </Link>
                               <button onClick={()=>postDelete(post.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
                            </td>
                            
                        </tr>);
                    }
                    )}
                   
                 </tbody>
                 </table>
                 <Pagination count={page_end} page={page} onChange={ChangePage} />
             </div>

        </div>
     );
}

export default PostList;
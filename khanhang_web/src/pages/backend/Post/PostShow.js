import { FaEdit,  FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import { urlImage } from "../../../config";
import postservice from "../../../services/PostService";

function PostShow() {
    const navigate= useNavigate();

    const {id} =useParams("id"); //"id" trong routes
    const [post,setPost]=useState([]);
    useEffect(function(){
        (async function(){
            await postservice.getById(id).then(function(result){
                setPost(result.data.post);
            });
        })();
    },[]);
    function postDelete(id){ 
        postservice.delete_tam(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/post', {replace:true});

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT SẢN PHẨM</strong></div>
                    <div className="col-6 text-end">
                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/post/update/"+post.id}>
                               <FaEdit/> </Link>
                            <button onClick={()=>postDelete(post.id)} className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/post" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/* <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Category_ID</th>
                        <th>Brand_ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Slug</th>
                        <th>Đơn giá</th>
                        <th>Giá khuyến mãi</th>
                        <th>Hinh ảnh </th>
                        <th>Sô lượng</th>
                        <th>Chi tiết sản phẩm</th>

                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                    </tr> */}
                 </thead>
                 <tbody>
                 <tr>
                            <th>Id</th>
                            <td>{post.id}</td>
                        </tr>
                        <tr>
                            <th>Topic_ID</th>
                            <td>{post.topic_id}</td>
                        </tr>
                        <tr>
                            <th>Chủ đề</th>
                            <td>{post.title}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{post.slug}</td>
                        </tr>
                        <tr>
                            <th>Chi tiết</th>
                            <td>{post.detail}</td>
                        </tr>
                        <tr>
                            <th>Kiểu</th>
                            <td>{post.type}</td>
                        </tr>
                        <tr>
                            <th>Hình ảnh</th>
                            <img src={urlImage+'post/'+post.image} alt="hinh" className="img-fluid"
                             style={{maxWidth:100,maxHeight:100}} />
                        </tr>

                        <tr>
                            <th>Từ Khóa</th>
                            <td>{post.metakey}</td>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <td>{post.metadesc}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{post.created_at}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{post.sort_order}</td>
                        </tr>


                   
                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default PostShow;
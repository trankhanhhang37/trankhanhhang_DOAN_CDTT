import { FaEdit,  FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import { urlImage } from "../../../config";
import userservice from "../../../services/UserService";

function UserShow() {
    const navigate= useNavigate();
    const {id} =useParams("id"); //"id" trong routes
    const [user,setUser]=useState([]);
    useEffect(function(){
        (async function(){
            await userservice.getById(id).then(function(result){
                setUser(result.data.user);
            });
        })();
    },[]);

    function userDelete(id){ 
        userservice.delete_tam(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/user', {replace:true});

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT SẢN PHẨM</strong></div>
                    <div className="col-6 text-end">
                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/user/update/"+user.id}>
                               <FaEdit/> </Link>
                            <button onClick={()=>userDelete(user.id)} className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/user" className="btn btn-sm btn-info me-2">
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
                            <td>{user.id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <th>UserName</th>
                            <td>{user.username}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{user.email}</td>
                        </tr>
                        <tr>
                            <th>Số điện thoại</th>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{user.address}</td>
                        </tr>
                        <tr>
                            <th>Roles</th>
                            <td>{user.roles}</td>
                        </tr>

                        <tr>
                            <th>Hình ảnh</th>
                            <img src={urlImage+'user/'+user.image} alt="hinh" className="img-fluid"
                             style={{maxWidth:100,maxHeight:100}} />
                        </tr>


                        <tr>
                            <th>Ngày tạo</th>
                            <td>{user.created_at}</td>
                        </tr>

                   
                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default UserShow;
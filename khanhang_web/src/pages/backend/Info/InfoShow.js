import { FaEdit,  FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import infoservice from "../../../services/InfoService";

function InfoShow() {
    const navigate= useNavigate();
    const {id} =useParams("id"); //"id" trong routes
    const [info,setinfo]=useState([]);
    useEffect(function(){
        (async function(){
            await infoservice.getById(id).then(function(result){
                setinfo(result.data.info);
            });
        })();
    },[]);

    function infoDelete(id){ 
        infoservice.delete_tam(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/info', {replace:true});

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">THÔNG TIN CHI TIẾT</strong></div>
                    <div className="col-6 text-end">
                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/info/update/"+info.id}>
                               <FaEdit/> </Link>
                            <button onClick={()=>infoDelete(info.id)} className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/info" className="btn btn-sm btn-info me-2">
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
                            <td>{info.id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{info.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{info.email}</td>
                        </tr>
                        <tr>
                            <th>Số điện thoại</th>
                            <td>{info.phone}</td>
                        </tr>
                        <tr>
                            <th>Địa chỉ</th>
                            <td>{info.address}</td>
                        </tr>



                        <tr>
                            <th>Ngày tạo</th>
                            <td>{info.created_at}</td>
                        </tr>

                   
                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default InfoShow;
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import orderservice from "../../../services/OrderService";
function OrderShow() {
    const navigate= useNavigate();

    const {id} =useParams("id"); //"id" trong routes
    const [order,setOrder]=useState([]);
    useEffect(function(){
        (async function(){
            await orderservice.getById(id).then(function(result){ //// show controller 
                setOrder(result.data.order);
            });
        })();
    },[]);
    function orderDelete(id){ 
        orderservice.delete_tam(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/order', {replace:true});

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT ĐƠN HÀNG</strong></div>
                        <div className="col-md-6 text-end " >
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/order/update/"+order.id}>
                               <FaEdit/> </Link>
                            <button onClick={()=>orderDelete(order.id)} className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/order" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                        </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/* <tr>
                        <th>ID</th>
                        <th>Tên danh mục</th>
                        <th>Slug</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                    </tr> */}
                 </thead>
                 <tbody>
                       <tr>
                            <th>Id</th>
                            <td>{order.id}</td>
                        </tr>
                        <tr>
                            <th>Mã Khách Hàng</th>
                            <td>{order.user_id}</td>
                        </tr>

                        <tr>
                            <th>Tên Khách Hàng</th>
                            <td>{order.name}</td>
                        </tr>
                        <tr>
                            <th>Số Điện Thoại</th>
                            <td>{order.phone}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{order.email}</td>
                        </tr>
                        <tr>
                            <th>Địa Chỉ</th>
                            <td>{order.address}</td>
                        </tr>
                        <tr>
                            <th>Ghi Chú</th>
                            <td>{order.note}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{order.created_at}</td>
                        </tr>
                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default OrderShow;
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import orderdetailservice from "../../../services/OrderdetailService";
function OrderdetailShow() {
    const navigate= useNavigate();
    const {id} =useParams("id"); //"id" trong routes
    const [orderdetail,setOrderdetail]=useState([]);
    useEffect(function(){
        (async function(){
            await orderdetailservice.getById(id).then(function(result){ //// show controller 
                setOrderdetail(result.data.orderdetail);
            });
        })();
    },[]);
    function orderdetailDelete(id){ 
        orderdetailservice.remove(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/orderdetail', {replace:true});

        });
    }
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">XEM CHI TIẾT ĐƠN HÀNG</strong></div>
                        <div className="col-md-6 text-end " >
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/orderdetail/update/"+orderdetail.id}>
                               <FaEdit/> </Link>
                            <button onClick={()=>orderdetailDelete(orderdetail.id)} className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/orderdetail" className="btn btn-sm btn-info me-2">
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
                            <td>{orderdetail.id}</td>
                        </tr>
                        <tr>
                            <th>Mã Đơn Hàng</th>
                            <td>{orderdetail.order_id}</td>
                        </tr>

                        <tr>
                            <th>Mã Sản Phẩm</th>
                            <td>{orderdetail.product_id}</td>
                        </tr>
                        <tr>
                            <th>Đơn giá</th>
                            <td>{orderdetail.price}</td>
                        </tr>
                        <tr>
                            <th>Số lượng</th>
                            <td>{orderdetail.quantity}</td>
                        </tr>
                        <tr>
                            <th>Số lượng</th>
                            <td>{orderdetail.amount}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{orderdetail.created_at}</td>
                        </tr>
                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default OrderdetailShow;
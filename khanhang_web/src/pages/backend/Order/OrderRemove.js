import { FaCloudDownloadAlt, FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useState } from "react";
import { useEffect } from "react";
import orderservice from "../../../services/OrderService";
import { Pagination } from "@mui/material";
function OrderRemove() {
    const [statusdel, setStatusDelete] =useState(0);

    const [orders,setOrders]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);

    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await orderservice.getListRemove(8, page).then(function (result) {
                setOrders(result.data.orders);
                set_page_end(result.data.end)

            });
        })();

    },[statusdel,page]);
    function orderRestore(id) {
        orderservice.restore(id).then(function (result) {
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }
      
    function orderDelete(id){
        orderservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                    <Link to="/admin/order"><strong className="text-primary">ĐƠN HÀNG</strong></Link>
                        </div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/order/create">
                            <FaSearchPlus/>Thêm
                        </Link>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>User_id</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Chú thích</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>

                    </tr>
                 </thead>
                 <tbody>
                    {orders.map(function(order,index){
                        return( 
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                {order.id}
                            </td>
                            <td>
                                {order.user_id}
                            </td>

                            <td>
                                {order.name}
                            </td>
                            <td>
                                {order.email}
                            </td>
                            <td>
                                {order.phone}
                            </td>
                            <td>
                                {order.address}
                            </td>
                            <td>
                                {order.note}
                            </td>
                            <td>
                               {order.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/order/show/"+order.id}>
                               <FaEye/> </Link>
                               <button onClick={() => orderRestore(order.id)} className="btn btn-sm btn-danger me-1">
                                            <FaCloudDownloadAlt /> </button>
                               <button  onClick={()=>orderDelete(order.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
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

export default OrderRemove;
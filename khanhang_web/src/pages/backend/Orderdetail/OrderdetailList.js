import { FaEdit, FaEye, FaRegTrashAlt, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useState } from "react";
import { useEffect } from "react";
import orderdetailservice from "../../../services/OrderdetailService";
import { Pagination } from "@mui/material";
function OrderdetailList() {
    const [statusdel, setStatusDelete] =useState(0);

    const [orderdetails,setOrderdetails]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await orderdetailservice.get_byPage(8, page).then(function (result) {
                setOrderdetails(result.data.orderdetails);
                set_page_end(result.data.end)

            });
        })();

    },[statusdel,page]);
    function orderdetailDelete(id){
        orderdetailservice.delete_tam(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Đơn Hàng </strong></div>
                    <div className="col-6 text-end">
                    <Link className=" btn btn-sm btn-danger me-1" to="/admin/orderdetail/listremove">
                            <FaRegTrashAlt/>
                        </Link>
                        <Link className=" btn btn-sm btn-success" to="/admin/orderdetail/create">
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
                        <th>Order_id</th>
                        <th>product_id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>

                    </tr>
                 </thead>
                 <tbody>
                    {orderdetails.map(function(orderdetail,index){
                        return( 
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                {orderdetail.id}
                            </td>
                            <td>
                                {orderdetail.order_id}
                            </td>

                            <td>
                                {orderdetail.product_id}
                            </td>
                            <td>
                                {orderdetail.price}
                            </td>
                            <td>
                                {orderdetail.quantity}
                            </td>
                            <td>
                                {orderdetail.amount}
                            </td>
                            <td>
                                {orderdetail.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/orderdetail/show/"+orderdetail.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/orderdetail/update/"+orderdetail.id}>
                               <FaEdit/> </Link>
                               <button onClick={()=>orderdetailDelete(orderdetail.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
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

export default OrderdetailList;
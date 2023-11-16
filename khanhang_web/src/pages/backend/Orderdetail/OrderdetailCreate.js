import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import orderdetailservice from "../../../services/OrderdetailService";

function OrderdetailCreate() {
        const navigate = useNavigate ();
        const [orderdetails,setOrderdetails]=useState([]);
        useEffect(function(){
            (async function(){
                await orderdetailservice.getAll().then(function(result){
                    setOrderdetails(result.data.orderdetails);
                });
            })();
    
        },[]);
    
    const [order_id, setOrderId] = useState('');
    const [product_id, setProductId] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');


    async function orderdetailStore(event) {
        event.preventDefault();
        //dùng để upload file lên
        var orderdetail= new FormData();

        orderdetail.append("order_id",order_id);
        orderdetail.append("product_id",product_id);
        orderdetail.append("price",price);
        orderdetail.append("quantity",quantity);
        orderdetail.append("amount",amount);

        await orderdetailservice.create(orderdetail).then(function (res) {
                alert(res.data.message)
                navigate('../../admin/orderdetail', { replace: true });
            });
        }

    

    return (
        <form onSubmit={orderdetailStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm CT Đơn Hàng</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/orderdetail" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                    <label >Mã Đơn Hàng</label>
                                    <input
                                        name="order_id" 
                                        value={order_id} 
                                        onChange={(e) => setOrderId(e.target.value)} 
                                        className="form-control">
                                    
                                    </input>
                                </div>
                            <div className="md-3">
                                    <label >Mã Sản Phẩm</label>
                                    <input
                                        name="product_id" 
                                        value={product_id} 
                                        onChange={(e) => setProductId(e.target.value)} 
                                        className="form-control">
                                    
                                    </input>
                            </div>
                            
                            <div className="mb-3">
                                <label htmlFor="name">Đơn Giá</label>
                                <input type="text"
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Số Lượng</label>
                                <input 
                                    name="quantity"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className="form-control"></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Số Lượng</label>
                                <textarea 
                                    name="amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </form>
    );
}

export default OrderdetailCreate;
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import orderservice from "../../../services/OrderService";
function OrderUpdate() {
    const {id} =useParams('id');
        const navigate = useNavigate ();
        const [orders,setOrders]=useState([]);
        useEffect(function(){
            (async function(){
                await orderservice.getAll().then(function(result){
                    setOrders(result.data.orders);
                });
            })();
    
        },[]);

        useEffect(function(){
            (async function(){
                await orderservice.getById(id).then(function(result){
    
                    const tmp=result.data.order;
                    // setCategory(tmp);
                    setName(tmp.name);
                    setUserId(tmp.user_id);
                    setEmail(tmp.email);
                    setPhone(tmp.phone);
                    setAddress(tmp.address);
                    setNote(tmp.note);
                    setStatus(tmp.status);
                 
                });
            })();
    
        },[]);
    const [user_id, setUserId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');
    const [status, setStatus] = useState(0);


    async function orderEdit(event) {
        event.preventDefault();
        //dùng để upload file lên
        var order= new FormData();

        order.append("name",name);
        order.append("phone",phone);
        order.append("email",email);
        order.append("address",address);
        order.append("note",note);
        order.append("user_id",user_id);
        order.append("status",status);

        await orderservice.update(order,id).then(function (res) {
                alert(res.data.message)
                navigate('../../admin/order', { replace: true });
            });
        }

    

    return (
        <form onSubmit={orderEdit} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm Đơn Hàng</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/order" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                    <label >Mã Khách Hàng</label>
                                    <input
                                        name="user_id" 
                                        value={user_id} 
                                        onChange={(e) => setUserId(e.target.value)} 
                                        className="form-control">
                                    
                                    </input>
                                </div>

                            
                            <div className="mb-3">
                                <label htmlFor="name">Tên Khách Hàng</label>
                                <input type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Số ĐT</label>
                                <textarea 
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Email</label>
                                <textarea 
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="name">Địa chỉ</label>
                                <textarea 
                                    name="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name">Ghi chú</label>
                                <textarea 
                                    name="note"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    className="form-control"></textarea>
                            </div>
                            


                            <div className="md-3">
                                <label >Trạng thái</label>
                                <select 
                                    name="status"
                                    className="form-control"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)} >

                                    <option value="1"> Xuất bản</option>


                                    <option value="2"> Chưa xuất bản</option>
                                </select>
                            </div>



                        </div>
                    </div>


                </div>

            </div>
        </form>
    );
}

export default OrderUpdate;
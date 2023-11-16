import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userservice from "../../../services/UserService";
function CustomerCreate() {
        const navigate = useNavigate ();
        const [users,setUsers]=useState([]);
        useEffect(function(){
            (async function(){
                await userservice.getAll().then(function(result){   ///////////////////////////////
                    setUsers(result.data.users); //index user

                });
            })();
    
        },[]);
    
    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(1);

    async function userStore(event) {
        event.preventDefault();
        const image =document.querySelector("#image");
        var user= new FormData();

        user.append("name",name);
        user.append("username",username);
        user.append("password",password);
        user.append("phone",phone);
        user.append("email",email);
        user.append("address",address);
        user.append("roles","KHACHHANG"); ///////////////////////////////////
        user.append("status",status);
        if (image.files.length === 0) {
            alert("Xin thêm thông tin ảnh!");
        } 
        else {
            user.append("image", image.files[0]);
    
        }
        await userservice.create(user).then(function (res) {
            alert(res.data.message);
            navigate('../../admin/customer',{replace:true});
        });
    }



    

    return (
        <form onSubmit={userStore} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm Khách Hàng</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/customer" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                    <label >Họ Tên</label>
                                    <input
                                        name="name" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        className="form-control">
                                    
                                    </input>
                                </div>

                                <div className="mb-3">
                                <label htmlFor="name">UserName</label>
                                <textarea 
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUserName(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="name">password</label>
                                <textarea 
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"></textarea>
                            </div>


                            <div className="mb-3">
                                <label htmlFor="name">Số ĐT</label>
                                <textarea 
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="form-control"></textarea>
                            </div>

                            {/* <div className="mb-3">
                                <label htmlFor="name">Địa chỉ</label>
                                <textarea 
                                    name="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="form-control"></textarea>
                            </div> */}
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
                            


                            <div className="md-3">
                                <label >Hình đại diện</label>
                                <input type="file" id="image" className="form-control"></input>
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

export default CustomerCreate;
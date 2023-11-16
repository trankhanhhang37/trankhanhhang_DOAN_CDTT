import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import infoservice from "../../../services/InfoService";

function InfoUpdate() {
        const {id} =useParams('id');
        const navigate = useNavigate ();
        const [infos,setinfos]=useState([]);
        useEffect(function(){
            (async function(){
                await infoservice.getAll().then(function(result){
                    setinfos(result.data.infos);// infos  index 
                });
            })();
    
        },[]);

        useEffect(function(){
            (async function(){
                await infoservice.getById(id).then(function(result){  //info show
    
                    const tmp=result.data.info;
                    setPhone(tmp.phone);
                    setName(tmp.name);
                    setEmail(tmp.email);
                    setAddress(tmp.address);
                    setStatus(tmp.status);
                 
                });
            })();
    
        },[]);


        const [name, setName] = useState('');
        const [phone, setPhone] = useState('');
        const [email, setEmail] = useState('');
        const [address, setAddress] = useState('');
        const [status, setStatus] = useState(0);
    

    async function infoEdit(event) {
        event.preventDefault();
        var info= new FormData();

        info.append("name",name);
        info.append("phone",phone);
        info.append("email",email);
        info.append("address",address);
        // info.append("info_id",info_id);
        info.append("status",status);
        
        await infoservice.update(info,id).
        then(function (res) {
            alert(res.data.message);
            navigate('../../admin/info',{replace:true});
        });
    }

    return (
        <form onSubmit={infoEdit} method="post" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Chỉnh Sửa Thông Tin</strong>

                        </div>

                        <div className="col-md-6 text-end " >
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/info" className="btn btn-sm btn-info">
                                Về danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="md-3">
                                    <label >Tên info</label>
                                    <input
                                        name="name" 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                        className="form-control">
                                    
                                    </input>
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


export default InfoUpdate;
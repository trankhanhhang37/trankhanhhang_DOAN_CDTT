import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import infoservice from "../../../services/InfoService";
function InfoCreate() {
        const navigate = useNavigate ();
        const [infos,setInfos]=useState([]);
        useEffect(function(){
            (async function(){
                await infoservice.getAll().then(function(result){
                    setInfos(result.data.infos); //index info

                });
            })();
    
        },[]);
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState(0);


    async function infoStore(event) {
        event.preventDefault();
        var info= new FormData();

        info.append("name",name);
        info.append("phone",phone);
        info.append("email",email);
        info.append("address",address);
       
        info.append("status",status);
        await infoservice.create(info).then(function (res) {
            alert(res.data.message);
            navigate('../../admin/info',{replace:true});
        });
    }



    

    return (
        <form onSubmit={infoStore} method="" >
            <div className="card">
                <div className="card-header">
                    <div className="row" >
                        <div className="col-md-6" >
                            <strong className="text-danger">Thêm Thông Tin</strong>

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

export default InfoCreate;
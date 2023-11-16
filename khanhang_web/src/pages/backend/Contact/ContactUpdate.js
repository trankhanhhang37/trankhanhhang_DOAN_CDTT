import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import contactservice from "../../../services/ContactService";

function ContactUpdate() {
    const {id} =useParams('id');
    const navigate = useNavigate ();
    const [contacts,setContacts]=useState([]);
    useEffect(function(){
        (async function(){
            await contactservice.getAll().then(function(result){
                setContacts(result.data.contacts);
            });
        })();

    },[]);

    useEffect(function(){
        (async function(){
            await contactservice.getById(id).then(function(result){

                const tmp=result.data.contact;
                // setCategory(tmp);
                setName(tmp.name);
                setUserId(tmp.user_id);
                setEmail(tmp.email);
                setPhone(tmp.phone);
                setTitle(tmp.title);
                setReplyId(tmp.reply_id);
                setContent(tmp.content);
                setStatus(tmp.status);
             
            });
        })();

    },[]);


    const [name, setName] = useState('');
    const [user_id,setUserId]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [reply_id,setReplyId]=useState('');
    const [status, setStatus] = useState(0);

async function contactEdit(event) {
    event.preventDefault();
    // const image =document.querySelector("#image");

    //dùng để upload file lên
    var contact= new FormData();

    contact.append("name",name);
    contact.append("user_id",user_id);
    contact.append("email",email);
    contact.append("phone",phone);
    contact.append("status",status);
    contact.append("title",title);
    contact.append("content",content);
    contact.append("reply_id",reply_id);

    await contactservice.update(contact,id).then(function (res) {
        alert(res.data.message)
        navigate('../../admin/contact', { replace: true });
    });


    // await categoryservice.update(category,id).
    //     then(function (res) {
    //         alert(res.data.message);
    //         navigate('../../admin/category',{replace:true});
    //     });

}
return (
    <form onSubmit={contactEdit} method="post" >
        <div className="card">
            <div className="card-header">
                <div className="row" >
                    <div className="col-md-6" >
                        <strong className="text-danger">Thêm liên hệ</strong>

                    </div>

                    <div className="col-md-6 text-end " >
                        <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                        <Link to="/admin/contact" className="btn btn-sm btn-info">
                            Về danh sách
                        </Link>
                    </div>
                </div>
            </div>

            <div className="card-body">
                <div className="row">
                    <div className="col-md-9">
                        <div className="mb-3">
                            <label htmlFor="name">Tên Liên hệ</label>
                            <input type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name">Email</label>
                            <textarea 
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name">Điện thoại</label>
                            <textarea 
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="form-control"></textarea>
                        </div>

                    </div>

                    <div className="col-md-3">
                    <div className="md-3">
                                <label >Title</label>
                                <textarea 
                                    name="title" 
                                    value={title} 
                                    onChange={(e) => setTitle(e.target.value)} 
                                    className="form-control">
                                </textarea>
                            </div>
                            <div className="md-3">
                                <label >Content</label>
                                <textarea 
                                    name="content" 
                                    value={content} 
                                    onChange={(e) => setContent(e.target.value)} 
                                    className="form-control">
                                </textarea>
                            </div>
                            <div className="md-3">
                                <label >replay_id</label>
                                <textarea 
                                    name="replay_id" 
                                    value={reply_id} 
                                    onChange={(e) => setReplyId(e.target.value)} 
                                    className="form-control">
                                </textarea>
                            </div>
                        <div className="md-3">
                            <label >User_id</label>
                            <select 
                                name="user_id" 
                                value={user_id} onChange={(e) => setUserId(e.target.value)} 
                                className="form-control">
                                <option value="0">None</option>
                                {contacts.map(function(con,index){
                                    return(
                                        <option key={index} value={con.user_id+1}>Sau :{con.name}</option>
                                    )
                                })}

                            </select>
                        </div>

                        {/* <div className="md-3">
                            <label >Hình đại diện</label>
                            <input type="file" id="image" className="form-control"></input>
                        </div> */}
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

export default ContactUpdate;
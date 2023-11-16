import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import contactservice from "../../../services/ContactService";
function ContactShow() {
    const navigate= useNavigate();
    const {id} =useParams("id"); //"id" trong routes
    const [contact,setContact]=useState([]);
    useEffect(function(){
        (async function(){
            await contactservice.getById(id).then(function(result){
                setContact(result.data.contact);
            });
        })();
    },[]);
    function contactDelete(id){ 
        contactservice.delete_tam(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/contact', {replace:true});

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT LIÊN HỆ</strong></div>
                        <div className="col-md-6 text-end " >
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/"+contact.id}>
                               <FaEdit/> </Link>
                            <button onClick={()=>contactDelete(contact.id)} className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/contact" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                        </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <tbody>
                       <tr>
                            <th>Id</th>
                            <td>{contact.id}</td>
                        </tr>
                        <tr>
                            <th>Tên liên hệ</th>
                            <td>{contact.name}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{contact.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{contact.phone}</td>
                        </tr>
                        <tr>
                            <th>Title</th>
                            <td>{contact.title}</td>
                        </tr>
                        <tr>
                            <th>Nội dung</th>
                            <td>{contact.content}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{contact.created_at}</td>
                        </tr>
                        <tr>
                            <th>User_id</th>
                            <td>{contact.user_id}</td>
                        </tr>
                        <tr>
                            <th>Reply_id</th>
                            <td>{contact.reply_id}</td>
                        </tr>

                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default ContactShow;
import { FaClipboardCheck, FaEdit, FaEye, FaHockeyPuck, FaRegTrashAlt, FaSearchPlus, FaTrash, FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from "react";
import contactservice from "../../../services/ContactService";
import { Pagination } from "@mui/material";
import React,{ useState } from "react";


function ContactList() {
    const [statusdel, setStatusDelete] =useState(0);
    const [contacts,setContacts]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await contactservice.get_byPage(8, page).then(function (result) {
                setContacts(result.data.contacts);
                set_page_end(result.data.end)

            });
        })();

    },[statusdel,page]);
    function contactDelete(id){
        contactservice.delete_tam(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Trang Liên Hệ </strong></div>
                    <div className="col-6 text-end">
                    <Link className=" btn btn-sm btn-danger me-1" to="/admin/contact/listremove">
                            <FaRegTrashAlt/>
                        </Link>
                        <Link className=" btn btn-sm btn-success" to="/admin/contact/create">
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
                        <th>Chủ đề</th>
                        <th>Nội dung</th>
                        <th>Replay_id</th>
                        <th>Chức năng</th>

                    </tr>
                 </thead>
                 <tbody>
                    {contacts.map(function(contact,index){
                        return( 
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                {contact.id}
                            </td>
                            <td>
                                {contact.user_id}
                            </td>

                            <td>
                                {contact.name}
                            </td>
                            <td>
                                {contact.email}
                            </td>
                            <td>
                                {contact.phone}
                            </td>
                            <td>
                                {contact.title}
                            </td>
                            <td>
                                {contact.content}
                            </td>
                            <td>
                               {contact.replay_id}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/contact/show/"+contact.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/update/"+contact.id}>
                               <FaEdit/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/contact/reply/"+contact.id}>
                               <FaUserCheck/> </Link>

                               <button onClick={()=>contactDelete(contact.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
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

export default ContactList;
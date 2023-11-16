import { FaEdit, FaEye, FaRegTrashAlt, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useEffect, useState } from "react";
import userservice from "../../../services/UserService";
import { Pagination } from "@mui/material";
function UserList() {
    const [statusdel, setStatusDelete] =useState(0);

    const[users,setUsers]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await userservice.get_byPage(5, page).then(function (result) {
                setUsers(result.data.users);
                set_page_end(result.data.end)

            });
        })();
    },[statusdel,page]);

    function userDelete(id){
        userservice.delete_tam(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">NGƯỜI DÙNG</strong></div>
                    <div className="col-6 text-end">
                    <Link className=" btn btn-sm btn-danger me-1" to="/admin/user/listremove">
                            <FaRegTrashAlt/>List Trash
                        </Link>
                        <Link className=" btn btn-sm btn-success" to="/admin/user/create">
                            <FaSearchPlus/>Thêm
                        </Link>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped text-center">
                 <thead>
                    <tr>
                        <th>#</th>
                        <th>Vai trò</th>
                        <th>ID</th>
                        <th>Tên người dùng</th>
                        <th>Email</th>
                        <th>Điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>


                        
                    </tr>
                 </thead>
                 <tbody>
                    {users.map(function(user,index){
                        return( <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{user.roles}</td>

                            <td>{user.id}</td>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>{user.phone}</td>
                            
                            <td>{user.address}</td>

                            <td>
                               {user.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/user/show/"+user.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/user/update/"+user.id}>
                               <FaEdit/> </Link>
                               <button onClick={()=>userDelete(user.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
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

export default UserList;
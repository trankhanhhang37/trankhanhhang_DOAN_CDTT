import { FaEdit, FaEye, FaRegTrashAlt, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useState } from "react";
import { useEffect } from "react";
import menuservice from "../../../services/MenuService";
import { Pagination } from "@mui/material";

function MenuList() {
    const [statusdel, setStatusDelete] =useState(0);
    const [menus,setMenus]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await menuservice.get_byPage(5, page).then(function (result) {
                setMenus(result.data.menus);
                set_page_end(result.data.end)

            });
        })();

    },[statusdel,page]);

    function menuDelete(id){
        menuservice.delete_tam(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">Trang MeNu </strong></div>
                    <div className="col-6 text-end">
                    <Link className=" btn btn-sm btn-danger me-1" to="/admin/menu/listremove">
                            <FaRegTrashAlt/>
                        </Link>
                        <Link className=" btn btn-sm btn-success" to="/admin/menu/create">
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
                        <th>Table_id</th>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Loại</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>

                    </tr>
                 </thead>
                 <tbody>
                    {menus.map(function(menu,index){
                        return( 
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                {menu.id}
                            </td>
                            <td>
                                {menu.parent_id}
                            </td>

                            <td>
                                {menu.name}
                            </td>
                            <td>
                                {menu.link}
                            </td>
                            <td>
                                {menu.type}
                            </td>
                            <td>
                               {menu.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/menu/show/"+menu.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/menu/update/"+menu.id}>
                               <FaEdit/> </Link>
                               <button  onClick={()=>menuDelete(menu.id)}  className="btn btn-sm btn-danger"><FaTrash/></button>
                            
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

export default MenuList;
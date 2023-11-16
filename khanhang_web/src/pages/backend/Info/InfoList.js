import { FaEdit, FaEye, FaRegTrashAlt, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import infoservice from "../../../services/InfoService";

function InfoList() {
    const [statusdel, setStatusDelete] =useState(0);
    const[infos,setinfos]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await infoservice.get_byPage(8, page).then(function (result) {
                setinfos(result.data.infos);
                set_page_end(result.data.end)

            });
        })();
    },[statusdel,page]);

    function infoDelete(id){
        infoservice.delete_tam(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">THÔNG TIN</strong></div>
                    <div className="col-6 text-end">
                    <Link className=" btn btn-sm btn-danger me-1" to="/admin/info/listremove">
                            <FaRegTrashAlt/>
                        </Link>
                        <Link className=" btn btn-sm btn-success" to="/admin/info/create">
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
                        <th>ID</th>
                        <th>Tên </th>
                        <th>Email</th>
                        <th>Điện thoại</th>
                        <th>Địa chỉ</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>


                        
                    </tr>
                 </thead>
                 <tbody>
                    {infos.map(function(info,index){
                        return( <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>

                            <td>{info.id}</td>
                            <td>
                                {info.name}
                            </td>
                            <td>
                                {info.email}
                            </td>
                            <td>{info.phone}</td>
                            
                            <td>{info.address}</td>

                            <td>
                               {info.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/info/show/"+info.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/info/update/"+info.id}>
                               <FaEdit/> </Link>
                               <button onClick={()=>infoDelete(info.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
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

export default InfoList;
import { useEffect } from "react";
import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaRegTrashAlt, FaSearchPlus, FaTrash } from "react-icons/fa";
import { urlImage } from "../../../config";
import pageusservice from "../../../services/PageUsService";
import { Pagination } from "@mui/material";

function PageList() {

    const [statusdel, setStatusDelete] =useState(0);
    const[pages,setPages]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await pageusservice.get_byPage(8, page).then(function (result) {
                setPages(result.data.pages);
                set_page_end(result.data.end)

            });
        })();
    },[statusdel,page])
    
    function pageDelete(id){
        pageusservice.delete_tam(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
        <div className="card-header">
           <div className="row">
               <div className="col-6">
                   <strong className="text-primary">PAGEUS</strong></div>
               <div className="col-6 text-end">
               <Link className=" btn btn-sm btn-danger me-1" to="/admin/page/listremove">
                            <FaRegTrashAlt/>
                        </Link>
                   <Link className=" btn btn-sm btn-success" to="/admin/page/create">
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
                   <th>Tên</th>
                   <th>Tiêu Đề</th>
                   <th>Slug</th>
                   <th>Chi Tiết</th>
                   <th>Ảnh</th>
                   <th>Type</th>
                   <th>Ngày Tạo</th>
                   <th>Chức Năng</th>
                   
               </tr>
            </thead>
            <tbody>
               {pages.map(function(page,index){
                   return( <tr key={index}>
                       <td>
                           <input type="checkbox" />
                       </td>
                       <td>{page.id}</td>
                       <td>{page.name}</td>
                       <td>
                           {page.title}
                       </td>
                       <td>
                           {page.slug}
                       </td>
                       <td>
                           {page.detail}
                       </td>
                       <td>
                       <img src={urlImage+'page/'+page.image} alt="hinh.png" className="img-fluid"
                           style={{maxWidth:100, maxHeight:100}}/>
                       </td>
                       <td>
                           {page.type}
                       </td>
                       <td>
                          {page.created_at}
                       </td>
                       <td>
                          <Link className="btn btn-sm btn-info me-1" to={"/admin/page/show/"+page.id}>
                          <FaEye/> </Link>
                          <Link className="btn btn-sm btn-primary me-1" to={"/admin/page/update/"+page.id}>
                          <FaEdit/> </Link>
                          <button onClick={()=>pageDelete(page.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                       
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

export default PageList;
import { FaEdit, FaEye, FaRegTrashAlt, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useState } from "react";
import { useEffect } from "react";
import categoryservice from "../../../services/CategoryService";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";

function CategoryList() {
    const [statusdel, setStatusDelete] =useState(0);
    const [categories,setCategories]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);
    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await categoryservice.get_byPage(5, page).then(function (result) {
                setCategories(result.data.categories);
                set_page_end(result.data.end)

            });
        })();   
     },[statusdel,page]); //khi bien nay thay doi gia tri , thi useEffect se chay lai => giao dien se chay lai
    //[]() chay 1 lan ; dua bien vao thi khi bien thay doi thi chay lai; k dua []() thi luon chay
    
    function categoryDelete(id){
        categoryservice.delete_tam(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">DANH MUC SAN PHAM</strong></div>
                    <div className="col-6 text-end">
                    <Link className=" btn btn-sm btn-danger me-1" to="/admin/category/listremove">
                            <FaRegTrashAlt/>
                        </Link>
                        <Link className=" btn btn-sm btn-success" to="/admin/category/create">
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
                        <th>Hình ảnh</th>
                        <th>Tên danh mục</th>
                        <th>Slug</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                    </tr>
                 </thead>
                 <tbody>
                    {categories.map(function(category,index){
                        return( 
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>
                                <img src={urlImage+'category/'+category.image} alt="hinh.png" className="img-fluid"
                                style={{maxWidth:100, maxHeight:100}}/>
                            </td>
                            <td>
                                {category.name}
                            </td>
                            <td>
                                {category.slug}
                            </td>
                            <td>
                               {category.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/category/show/"+category.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/category/update/"+category.id}>
                               <FaEdit/> </Link>
                               <button onClick={()=>categoryDelete(category.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
                            </td>
                            <td>{category.id}</td>
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

export default CategoryList;
import { FaEdit, FaEye, FaRegTrashAlt, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React,{ useState } from "react";
import { useEffect } from "react";
import brandservice from "../../../services/BrandService";
import { urlImage } from "../../../config";
import { Pagination} from "@mui/material";

function BrandList() {
    const [statusdel, setStatusDelete] =useState(1);
    const [brands,setBrands]=useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);

    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await brandservice.get_byPage(5, page).then(function (result) {
                setBrands(result.data.brands);
                set_page_end(result.data.end)

            });
        })();

    },[statusdel,page]);

    function brandDelete(id){
        brandservice.delete_tam(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);
        });

    }
    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">THƯƠNG HIỆU</strong></div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-danger me-1" to="/admin/brand/listremove">
                            <FaRegTrashAlt/>
                        </Link>
                        <Link className=" btn btn-sm btn-success" to="/admin/brand/create">
                            <FaSearchPlus/>
                        </Link>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    <tr>
                        {/* <th>#</th> */}
                       
                        <th>Hình ảnh</th>
                        <th>Tên Brand</th>
                        <th>Slug</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                        
                    </tr>
                 </thead>
                 <tbody>
                    {brands.map(function(brand,index){
                        return( 
                        <tr key={index}>
                            {/* <td>
                                <input type="checkbox" />
                            </td> */}
                            
                            <td>
                            <img src={urlImage+'brand/'+brand.image} alt="hinh.png" className="img-fluid"
                                style={{maxWidth:100, maxHeight:100}}/>
                            </td>
                            <td>
                                {brand.name}
                            </td>
                            <td>
                               {brand.slug}
                            </td>
                            <td>
                               {brand.created_at}
                            </td>
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/brand/show/"+brand.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/brand/update/"+brand.id}>
                               <FaEdit/> </Link>
                               <button onClick={()=>brandDelete(brand.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                               <p></p>
                            
                            </td>
                            <td>{brand.id}</td>
                        </tr>);
                    }
                    )}
                   
                 </tbody>
                 <Pagination  count={page_end} page={page} onChange={ChangePage} />

                 </table>
             </div>
        </div>
     );
}

export default BrandList;
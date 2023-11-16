import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { urlImage } from "../../../config";
import { FaEdit, FaTrash } from "react-icons/fa";
import brandservice from "../../../services/BrandService";
function BrandShow() {
    const navigate= useNavigate();
    const {id} =useParams("id"); //"id" trong routes
    const [brand,setBrand]=useState([]);
    useEffect(function(){
        (async function(){
            await brandservice.getById(id).then(function(result){
                setBrand(result.data.brand);
            });
        })();
    },[]);

    function brandDelete(id){ 
        brandservice.delete_tam(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/brand', {replace:true});

        });
    }


    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT THƯƠNG HIỆU</strong></div>
                        <div className="col-md-6 text-end " >
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/brand/update/"+brand.id}>
                               <FaEdit/> </Link>
                            <button onClick={()=>brandDelete(brand.id)} className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/brand" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                        </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/* <tr>
                        <th>ID</th>
                        <th>Tên danh mục</th>
                        <th>Slug</th>
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                    </tr> */}
                 </thead>
                 <tbody>
                       <tr>
                            <th>Id</th>
                            <td>{brand.id}</td>
                        </tr>
                        <tr>
                            <th>Tên thương hiệu</th>
                            <td>{brand.name}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{brand.slug}</td>
                        </tr>
                        <tr>
                            <th>Ngày tạo</th>
                            <td>{brand.created_at}</td>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <td>{brand.metadesc}</td>
                        </tr>

                        <tr>
                            <th>Hình ảnh</th>
                            <img src={urlImage+'brand/'+brand.image} alt="hinh" className="img-fluid"
                             style={{maxWidth:100,maxHeight:100}} />
                        </tr>
                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default BrandShow;
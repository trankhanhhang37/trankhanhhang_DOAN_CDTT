import { Link, useNavigate, useParams } from "react-router-dom";
import categoryservice from "../../../services/CategoryService";
import { useState } from "react";
import { useEffect } from "react";
import { urlImage } from "../../../config";
import { FaEdit, FaTrash } from "react-icons/fa";
function CategoryShow() {
    const navigate= useNavigate();
    const {id} =useParams("id"); //"id" trong routes
    const [category,setCategory]=useState([]);
    useEffect(function(){
        (async function(){
            await categoryservice.getById(id).then(function(result){
                setCategory(result.data.category);
            });
        })();
    },[]); //[]() chay 1 lan 
    function categoryDelete(id){ 
        categoryservice.delete_tam(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/category', {replace:true});

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT DANH MỤC</strong></div>
                        <div className="col-md-6 text-end " >
                            <Link className="btn btn-sm btn-primary me-1" to={"/admin/category/update/"+category.id}>
                               <FaEdit/> </Link>
                            <button onClick={()=>categoryDelete(category.id)} className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/category" className="btn btn-sm btn-info me-2">
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
                            <td>{category.id}</td>
                        </tr>
                        <tr>
                            <th>Tên thương hiệu</th>
                            <td>{category.name}</td>
                        </tr>
                        <tr>
                            <th>Slug</th>
                            <td>{category.slug}</td>
                        </tr>
                        <tr>
                            <th>Ngày tạo</th>
                            <td>{category.created_at}</td>
                        </tr>
                        <tr>
                            <th>Mô tả</th>
                            <td>{category.metadesc}</td>
                        </tr>
                        <tr>
                            <th>Parent_id</th>
                            <td>{category.parent_id}</td>
                        </tr>

                        <tr>
                            <th>Hình ảnh</th>
                            <img src={urlImage+'category/'+category.image} alt="hinh" className="img-fluid"
                             style={{maxWidth:100,maxHeight:100}} />
                        </tr>
                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default CategoryShow;
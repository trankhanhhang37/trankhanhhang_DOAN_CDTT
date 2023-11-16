import { FaEdit,  FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import productservice from "../../../services/ProductService";
import { urlImage } from "../../../config";

function ProductShow() {
    const navigate= useNavigate();

    const {id} =useParams("id"); //"id" trong routes
    const [product,setProduct]=useState([]);
    useEffect(function(){
        (async function(){
            await productservice.getById(id).then(function(result){
                setProduct(result.data.product);
            });
        })();
    },[]);
    function productDelete(id){ 
        productservice.remove(id).then(function(result){
            alert(result.data.message);
            navigate('/admin/product', {replace:true});

        });
    }

    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">CHI TIẾT SẢN PHẨM</strong></div>
                    <div className="col-6 text-end">
                    <Link className="btn btn-sm btn-primary me-1" to={"/admin/product/update/"+product.id}>
                               <FaEdit/> </Link>
                            <button onClick={()=>productDelete(product.id)} className="btn btn-sm btn-danger me-2"><FaTrash/></button>
                            <button type="submit" className="btn btn-sm btn-success me-2">Lưu</button>
                            <Link to="/admin/product" className="btn btn-sm btn-info me-2">
                                Về danh sách
                            </Link>
                    </div>

                </div>
            </div>

             <div className="card-body">
                <table className="table table-bordered table-hover table-striped">
                 <thead>
                    {/* <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Category_ID</th>
                        <th>Brand_ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Slug</th>
                        <th>Đơn giá</th>
                        <th>Giá khuyến mãi</th>
                        <th>Hinh ảnh </th>
                        <th>Sô lượng</th>
                        <th>Chi tiết sản phẩm</th>

                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                        <th>ID</th>
                    </tr> */}
                 </thead>
                 <tbody>
                 <tr>
                            <th>Id</th>
                            <td>{product.id}</td>
                        </tr>
                        <tr>
                            <th>category_id</th>
                            <td>{product.category_id}</td>
                        </tr>
                        <tr>
                            <th>brand_id</th>
                            <td>{product.brand_id}</td>
                        </tr>
                        <tr>
                            <th>Tên Sản Phẩm</th>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <th>Đơn giá</th>
                            <td>{product.price}</td>
                        </tr>
                        <tr>
                            <th>Giá khuyến mãi</th>
                            <td>{product.price_sale}</td>
                        </tr>
                        <tr>
                            <th>Hình ảnh</th>
                            <img src={urlImage+'product/'+product.image} alt="hinh" className="img-fluid"
                             style={{maxWidth:100,maxHeight:100}} />
                        </tr>

                        <tr>
                            <th>Slug</th>
                            <td>{product.slug}</td>
                        </tr>
                        <tr>
                            <th>Số lượng</th>
                            <td>{product.quantity}</td>
                        </tr>
                        <tr>
                            <th>Chi tiết</th>
                            <td>{product.detail}</td>
                        </tr>

                        <tr>
                            <th>Ngày tạo</th>
                            <td>{product.created_at}</td>
                        </tr>
                        <tr>
                            <th>Từ khóa</th>
                            <td>{product.metakey}</td>
                        </tr>

                        <tr>
                            <th>Mô tả</th>
                            <td>{product.metadesc}</td>
                        </tr>

                   
                   
                 </tbody>
                 </table>
             </div>

        </div>
     );
}

export default ProductShow;
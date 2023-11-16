import { FaEdit, FaEye, FaSearchPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";
import { useEffect } from "react";
import productservice from "../../../services/ProductService";
import { urlImage } from "../../../config";
import { Pagination } from "react-bootstrap";

function ProductList() {
    const [statusdel, setStatusDelete] =useState(0);
    const [page, setPage] = useState(1);
    const [products,setProducts]=useState([]);
    if (page === 0) {
        setPage(page + 1)
    }
    useEffect(function(){
        (async function(){
            await productservice.get_byPage(4,page ).then(function(result){
                setProducts(result.data.products)
            
                if (page === result.data.end + 1) {
                    setPage(page - 1) 
                }
            });
        })();

    },[statusdel,page])


    function productDelete(id){
        productservice.remove(id).then(function(result){
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }


    return ( 
        <div className="card">
             <div className="card-header">
                <div className="row">
                    <div className="col-6">
                        <strong className="text-primary">DANH SÁCH SẢN PHẨM</strong></div>
                    <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/product/create">
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
                        <th>Category_ID</th>
                        <th>Brand_ID</th>
                        <th>Tên sản phẩm</th>
                        <th>Slug</th>
                        <th>Đơn giá</th>
                        {/* <th>Giá khuyến mãi</th> */}
                        <th>Hinh ảnh </th>
                        {/* <th>Sô lượng</th> */}
                        <th>Chi tiết sản phẩm</th> 
                        <th>Ngày tạo</th>
                        <th>Chức năng</th>
                    </tr>
                 </thead>
                 <tbody>
                    {products.map(function(product,index){
                        return( 
                        <tr key={index}>
                            <td>
                                <input type="checkbox" />
                            </td>
                            <td>{product.id}</td>
                            <td>{product.category_id}</td>
                            <td>{product.brand_id}</td>
                            <td>
                                {product.name}
                            </td>
                            <td>
                                Slug
                            </td>
                            <td>
                                {product.price}
                            </td>
                            {/* <td>
                                {product.pricesale}
                            </td> */}


                            <td>
                            <img src={urlImage+'product/'+product.image} alt="hinh.png" className="img-fluid"
                                style={{maxWidth:100, maxHeight:100}}/>
                            </td>
                            {/* <td>
                                {product.qty}
                            </td> */}
                            <td>
                                {product.detail}
                            </td>

                            <td>
                               {product.created_at}
                            </td>
                            
                            <td>
                               <Link className="btn btn-sm btn-info me-1" to={"/admin/product/show/"+product.id}>
                               <FaEye/> </Link>
                               <Link className="btn btn-sm btn-primary me-1" to={"/admin/product/update/"+product.id}>
                               <FaEdit/> </Link>
                               <button onClick={()=>productDelete(product.id)} className="btn btn-sm btn-danger"><FaTrash/></button>
                            
                            </td>
                          
                        </tr>);
                    }
                    )}
                   
                 </tbody>
                 </table>
                 <Pagination >
                    <Pagination.Prev onClick={() => setPage(page - 1)} />

                    <Pagination.Item active>{page}</Pagination.Item>

                    <Pagination.Next onClick={() => setPage(page + 1)} />
                </Pagination>
             </div>

        </div>
     );
}

export default ProductList;
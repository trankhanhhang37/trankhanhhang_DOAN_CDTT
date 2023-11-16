import { FaEye, FaSearchPlus, FaTrash, FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState } from "react";
import { useEffect } from "react";
import productservice from "../../../services/ProductService";
import { urlImage } from "../../../config";
import { Pagination } from "@mui/material";


function ProductRemove() {
    const [statusdel, setStatusDelete] = useState(0);
    const [products, setProducts] = useState([]);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);



    const ChangePage = (event, value) => {
        setPage(value);
    };
    useEffect(function () {
        (async function () {
            await productservice.getListRemove(6, page).then(function (result) {
                setProducts(result.data.products);
                set_page_end(result.data.end)

            });
        })();

    }, [statusdel, page])


    function productRestore(id) {
        productservice.restore(id).then(function (result) {
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }


    function productDelete(id) {
        productservice.remove(id).then(function (result) {
            console.log(result.data.message);
            setStatusDelete(result.data.id);

        });
    }


    return (
        <div className="card">
            <div className="card-header">
                <div className="row">
                    <div className="col-6">
                    <Link to="/admin/product"><strong className="text-primary">SẢn PHẨM</strong></Link>
                        </div>
                    {/* <div className="col-6 text-end">
                        <Link className=" btn btn-sm btn-success" to="/admin/product/create">
                            <FaSearchPlus />Thêm
                        </Link>
                    </div> */}

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
                        {products.map(function (product, index) {
                            return (
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
                                        <img src={urlImage + 'product/' + product.image} alt="hinh.png" className="img-fluid"
                                            style={{ maxWidth: 100, maxHeight: 100 }} />
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
                                        <Link className="btn btn-sm btn-info me-1" to={"/admin/product/show/" + product.id}>
                                            <FaEye /> </Link>
                                            <button onClick={() => productRestore(product.id)} className="btn btn-sm btn-danger me-1">
                                            <FaCloudDownloadAlt /> </button>
                                        <button onClick={() => productDelete(product.id)} className="btn btn-sm btn-danger"><FaTrash /></button>

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

export default ProductRemove;
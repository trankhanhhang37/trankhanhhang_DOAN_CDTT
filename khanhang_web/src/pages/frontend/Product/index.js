import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productservice from "../../../services/ProductService";
import ProductItem from "../../../Component/Home/ProductItem";
import { Pagination } from "@mui/material";
import CategoryList from "../Home/CategoryList";
import BrandList from "../Home/BrandList";

function Product() {
    const [new_product_all, setNewProductAll] = useState([]);
    const[limit,setLimit]=useState(9);

    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);

    const ChangePage = (event, value) => {
        setPage(value);
    };

    useEffect(function () {
        (async function () {
            await productservice.getNewProductAll(limit, page).then(function (result) {
                setNewProductAll(result.data.new_products_all);
                set_page_end(result.data.end)

            });
        })();

    },[limit,page]);



    // const fetchData = useCallback(async () => {
    //     const products_data = await productservice.get_byPage(limit, page);
    //     setNewProductAll(products_data.data.products); // sua
    //     set_page_end(page.data.end)

    // }, [limit,page]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetchData()
    //             .catch(console.error);
    //     }, 100);
    // }, [fetchData])

    // function add() {
    //     if (page >= 1 && new_product_all.length === 2) {
    //         setPage(page + 1);
    //     }
    // }
    // function sub() {
    //     if (page > 1) {
    //         setPage(page - 1);
    //     }
    // }


    return (
        <section className="product-home">
            <div className="container">
                <div class="sidebar  has-scrollbar pl-3" data-mobile-menu>

                             <BrandList/>
                             <CategoryList/>
                    <div class="brand">
                        <p class="d-inline-flex gap-2">
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Thương Hiệu
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="list-group brand">
                                {/* <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Default checkbox
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label class="form-check-label" for="flexCheckChecked">
                                        Checked checkbox
                                    </label>
                                </div> */}
                            </div>

                        </div>
                    </div>


                    <div class="price">
                        <p class="d-inline-flex gap-2">
                            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Mức Giá
                            </button>
                        </p>
                        <div class="collapse" id="collapseExample">
                            <div class="list-group price">
                                <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                    Dưới 200.000
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">200.000 - 400.000</a>
                                <a href="#" class="list-group-item list-group-item-action">400.000 - 600.000</a>
                                <a class="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
                            </div>

                        </div>
                    </div>

                </div>

                <div class="col-md-9 col-xl-9 col-lg-9">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2">Sắp Xếp Theo: </div>
                            <div class="col-md-10">
                                <ul class="list-inline">
                                    <li class="list-inline-item mr-3">
                                        <div class="form-inline border-bottom border-primary">

                                            <Link to="/khuyen-mai/" class="">Khuyến mãi</Link>

                                        </div>
                                    </li>

                                    <li class="list-inline-item mr-3">
                                        <div class="form-inline border-bottom border-primary">

                                            <a href="#" class="">Giá giảm dần</a>

                                        </div>
                                    </li>

                                    <li class="list-inline-item mr-3">
                                        <div class="form-inline border-bottom border-primary">

                                            <a href="#" class="">Giá tăng dần</a>

                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* <!-- col.// --> */}
                        </div>
                        {/* <!-- row.// --> */}
                    </div>
                    {/* <header class="mb-3">
                        <div class="form-inline">
                            {/* <strong class="mr-md-auto">32 Items found </strong>
                            <select class="mr-2 form-control">
                                <option>Latest items</option>
                                <option>Trending</option>
                                <option>Most Popular</option>
                                <option>Cheapest</option>
                            </select>
                            <div class="btn-group">
                                <a href="page-listing-grid.html" class="btn btn-light active" data-toggle="tooltip" title="List view">
                                    <i class="fa fa-bars"></i></a>
                                <a href="page-listing-large.html" class="btn btn-light" data-toggle="tooltip" title="Grid view">
                                    <i class="fa fa-th"></i></a>
                            </div>
                        </div>
                    </header> */}

                    <div className="product-new">
                        <h3 className="text-center">All Product</h3>
                        <div class="row">
                            {new_product_all.map(function (item, index) {
                                return <ProductItem key={index} product={item} />;
                            })}
                        </div>
                        {/* <div className="" >
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <button className="page-link" href="#" aria-label="Previous" onClick={() => sub()}>
                                            <span aria-hidden="true">&laquo;</span>
                                        </button>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">{page - 1}</a></li>
                                    <li className="page-item"><a className="page-link" href="#">{page}</a></li>
                                    <li className="page-item"><a className="page-link" href="#">{page + 1}</a></li>
                                    <li className="page-item">
                                        <button className="page-link" href="#" aria-label="Next" onClick={() => add()}>
                                            <span aria-hidden="true">&raquo;</span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}
                          
                    </div>

                    <Pagination count={page_end} page={page} onChange={ChangePage} />

                </div>

            </div>
        </section>



    );
}



export default Product;
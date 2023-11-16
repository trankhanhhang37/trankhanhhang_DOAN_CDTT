
import { useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
// import brandservice from "../../../services/BrandService";
import productservice from "../../../services/ProductService";
import CategoryList from "../Home/CategoryList";
import BrandList from "../Home/BrandList";
import ProductItem from "../../../Component/Home/ProductItem";
import { Pagination } from "@mui/material";

function ProBra() {
    const { slug } = useParams();
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = React.useState(1);
    const [page_end, set_page_end] = React.useState(1);

    const ChangePage = (event, value) => {
        setPage(value);
    };


    useEffect(function () {
        (async function () {
            await productservice.getNewProductByBrand(limit, page, slug).then(function (result) {
                setProducts(result.data.products_brand);
                set_page_end(result.data.end)

            });
        })();

    }, [limit, page, slug]);

    return (

        <section className="maincontent">
            <div className="container my-4">

                <div className="row">
                    <div className="col-md-3">
                        <CategoryList />
                        <BrandList />
                    </div>
                    <div className="col-md-9">
                        {/* <h5 className="text-center text-success " >{title}</h5> */}
                        <div className="row">
                            {products.map(function (product, index) {
                                return <ProductItem product={product} key={index} />;
                            })}
                        </div>

                        {/* <div className="row">
                                <div className="col-12 text-center my-4">
                                    <button className="btn btn-success" onClick={() => setLimit(limit + 2)}>Xem thêm</button>
                                </div>
                            </div> */}

                        <Pagination count={page_end} page={page} onChange={ChangePage} />
                    </div>



                </div>



            </div>
        </section>
    );
}

export default ProBra;

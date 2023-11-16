import React, { useCallback, useEffect, useState } from "react";
import productservice from "../../../../services/ProductService";
import ProductItem from "../../../../Component/Home/ProductItem";

function SaleProduct() {
    const [product_sale, setProduct_sale] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = useCallback(async () => {
        const products_data = await productservice.getSaleProduct(8, page);
        setProduct_sale(products_data.data.products_sale); // sua

    }, [page]);

    useEffect(() => {
        setTimeout(() => {
            fetchData()
                .catch(console.error);
        }, 100);
    }, [fetchData])


    return (


        <div className="product-new">
            <h3 className="text-center">Sale Products</h3>

            <div class="row ">
                {product_sale.map(function (item, index) {
                    return <ProductItem key={index} product={item} />;
                })}
            </div>


        </div>



    );
}
export default SaleProduct;

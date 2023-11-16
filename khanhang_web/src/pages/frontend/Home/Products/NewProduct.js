import React, { useEffect, useState } from "react";
import productservice from "../../../../services/ProductService";
import ProductItem from "../../../../Component/Home/ProductItem";
import { useCallback } from "react";

function NewProduct() {
    const [productsNew, setProuctsNew] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = useCallback(async () => {
        const products_data = await productservice.getNewProductAll(6, page);
        setProuctsNew(products_data.data.new_products_all); // sua

    }, [page]);

    useEffect(() => {
        setTimeout(() => {
            fetchData()
                .catch(console.error);
        }, 100);
    }, [fetchData])

    // try {
    //     useEffect(function () {
    //         (async function () {
    //             const products_data = await productservice.getNewProductAll(6, 1);
    //             setProuctsNew(products_data.data.new_products_all);
    //         })();
    //     }, []);
    // } catch (e) {
    //     console.error(e);
    // }


    return (


        <div className="product-new">
            <h3 className="text-center">New Products</h3>

            <div class="row">
                {productsNew.map(function (item, index) {
                    return <ProductItem key={index} product={item} />;
                })}


            </div>
        </div>



    );
}
export default NewProduct;

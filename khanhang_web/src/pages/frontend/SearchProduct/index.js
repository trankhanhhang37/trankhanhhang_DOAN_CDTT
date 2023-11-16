import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productservice from "../../../services/ProductService";
import ProductItem from "../../../Component/Home/ProductItem";

function SearchProduct() {
    const {metakey} =useParams();
    const [products, setProduct] = useState([]);
    
    useEffect(function(){
        (async function(){
            try{
            const infoproduct = await productservice.getProductByMetakey(metakey);
            setProduct(infoproduct.data.product);

        }
        catch(error){
            console.error(error);

        }
        })();
    },[]);


    return ( 
        <section className="maincontent">
        <div className="container">
            <div className="product-metakey pt-2 pb-2 mt-1 text-center text-danger ">
                <h4 className="tetx-danger">SẢN PHẨM TÌM KIẾM</h4>
                
                <div className="row">
                    {products.map(function(product,index){
                        return <ProductItem product={product} key={index}/>;
                    })}

                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        {/* <button className="btn btn-success" onClick={()=>setLimit(limit+8)}>Xem Thêm</button> */}

                    </div>

                </div>
            </div>
            
            
        </div>
    </section>


     );
}

export default SearchProduct;
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../config";
import productservice from "../../services/ProductService";


function SaleItem(props) {
    const {slug}=useParams();
    const[products,setProducts]=useState([]);
    const[limit,setLimit]=useState(2);

    useEffect(function(){
        (async function(){
            try{   
                const infoproduct = await productservice.getNewProductByBrand(limit, 1, slug);
                setProducts(infoproduct.data.products_brand);
            }
            catch(error){
                console.error(error);

            }
            
        })();
    },[limit,slug]);


    return (
        <div class="col-md-3">
        <figure class="card card-product-grid">
            <div class="img-wrap">
                <span class="badge badge-danger"> Sale </span>
                <img src={urlImage + "product/" + props.product.image} />
            </div>
            <figcaption class="info-wrap">
                <Link href="#" class="title mb-2">{props.product.name}</Link>
                <div class="price-wrap">
                    <span class="price">{props.product.price}</span>
                    <small class="text-muted">/bánh</small>
                    <hr/>

                    <span class="price text-danger">{props.product.pricesale}</span>
                    <small class="text-muted">/bánh</small>
                </div>


                <div class="form-row  mt-4">
                    <div class="form-group col-md">
                        <a href="#" class="btn  btn-primary">
                            <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                        </a>
                       
                    </div>
                  
                </div>


                <Link to={"/chi-tiet-san-pham/"+props.product.slug} className="btn btn-primary">Chi Tiet </Link>

            </figcaption>
        </figure>
    </div>

    );
}
export default SaleItem;

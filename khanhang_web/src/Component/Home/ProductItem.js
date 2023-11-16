import React, { useState } from "react";
import { Link } from "react-router-dom";
import { urlImage } from "../../config";
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";
import { Rating } from "@mui/material";


function ProductItem(props) {

    // const { addItem } = useCart();
    // const addToCart = () => {
    //     addItem(props.product); //them san pham vao cart, luu thogn tin san pham
    // }
    const [qty, setQty] = useState(1);

    const { addItem } = useCart();
    const addToCart =async () => {
        if (props.product.price_sale) {
            const cart_product_data = await { 'id': props.product.product_id, 'price': props.product.price_sale, 'listed_price': props.product.listed_price, 'price_sale': props.product.price_sale, 'product_name': props.product.product_name, 'product_image': props.product.product_image, 'brand_name': props.product.brand_name };
            addItem(cart_product_data, qty);
        } else {
            const cart_product_data = await { 'id': props.product.product_id, 'price': props.product.listed_price, 'listed_price': props.product.listed_price, 'price_sale': props.product.price_sale, 'product_name': props.product.product_name, 'product_image': props.product.product_image, 'brand_name': props.product.brand_name };
            addItem(cart_product_data, qty);
        }
     
    }
    return (
        <div class="col-md-4 view overlay">
            <figure class="card card-product-grid">
                {/* <div class="img-wrap">
                <span class="badge badge-danger"> NEW </span>
                <img src={urlImage + "product/" + props.product.image} />
            </div> */}
                <div class=" img-wrap " style={{ height: "300px"}}>
                    {props.product.price_sale ? <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Sale</div>
                        : <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>}

                    <img src={urlImage + "product/" + props.product.product_image} />

                </div>

                <figcaption class="info-wrap">
                    {/* <a href="#" class="title mb-2">{props.product.name}</a>
                <div class="price-wrap">
                    <span class="price">{props.product.price}</span>
                    <small class="text-muted">/bánh</small>

                </div>

                <div class="form-row  mt-4">
                    <div class="form-group col-md">
                        <Button class="btn  btn-primary" onClick={() => addToCart()}> 
                            <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                        </Button>
                    </div>
                    
                </div>
                <Link to={"/chi-tiet-san-pham/"+props.product.slug} className="btn btn-primary">Chi Tiet </Link>
 */}<Link class="d-block h5 mb-2" href="">{props.product.product_name}</Link>
                    <div class=" price-wrap text-center p-4">


                        <Rating size="large" readOnly value={props.product.rating_score || null} />

                        {/* nếu tồn tại pricesale thì hiện pricesale, ngược lại hiện giá thường */}
                        {props.product.price_sale ? <span class="text-primary me-1">{props.product.price_sale}</span>
                            : <span class="text-primary me-1">{props.product.listed_price}</span>}
                        {/* nếu tồn tại pricesale hiện giá thường */}
                        {props.product.price_sale && <span class="text-body text-decoration-line-through">{props.product.listed_price}</span>}

                    </div>
                    <div class="d-flex border-top ">
                        <medium class="w-50  text-center border-end py-2">
                            <Link class="text-body" to={"/chi-tiet-san-pham/" + props.product.product_slug}><i class="fa fa-eye text-primary me-2"></i>Chi Tiet </Link>
                        </medium>
                        <medium class="w-50 text-center py-2 view overlay" onClick={() => addToCart()}>
                            <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                        </medium>

                    </div>


                </figcaption>
            </figure>
        </div>



    );
}
export default ProductItem;

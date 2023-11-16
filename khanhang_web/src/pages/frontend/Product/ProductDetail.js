import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productservice from "../../../services/ProductService";
import { urlImage } from "../../../config";
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";
import { Rating } from "@mui/material";
import ProductItem from "../../../Component/Home/ProductItem";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";


function ProductDetail() {
    const { slug } = useParams();
    const [product, setProduct] = useState([]);
    const [product_other, setProductOther] = useState([]);
    const [sold_qty, setsold_qty] = useState([]);
    const [product_comment, setProductComment] = useState([]);


    const [qty, setQty] = useState(1);

    useEffect(function () {
        (function () {
            productservice.getProductBySlug(slug, 8, 4).then(function (result) {
                if (result.data.success === true) {
                    setProduct(result.data.product_detail);
                    setProductOther(result.data.other_products);
                    setsold_qty(result.data.sold_qty);
                    setProductComment(result.data.product_comment);

                }

            });
        })();
    }, [slug]);


    function Add() {
        if (qty >= 1) {
            setQty(qty + 1);
        }
    }

    function Sub() {
        if (qty > 1) {
            setQty(qty - 1);
        }
    }

    const { addItem } = useCart();
    const addToCart =async () => {
        if (product.price_sale) {
            const cart_product_data = await { 'id': product.product_id, 'price': product.price_sale, 'listed_price': product.listed_price, 'price_sale': product.price_sale, 'product_name': product.product_name, 'product_image': product.product_image, 'brand_name': product.brand_name };
            addItem(cart_product_data, qty);
        } else {
            const cart_product_data = await { 'id': product.product_id, 'price': product.listed_price, 'listed_price': product.listed_price, 'price_sale': product.price_sale, 'product_name': product.product_name, 'product_image': product.product_image, 'brand_name': product.brand_name };
            addItem(cart_product_data, qty);
        }
     
    }
    return (

        // <section class="section-content bg-white padding-y">
        <div class="container">

            {/* <!-- ============================ ITEM DETAIL ======================== --> */}
            <div class="row">
                <aside class="col-md-6">
                    <div class="card">
                        <article class="gallery-wrap">
                            <div class="img-big-wrap">
                                <div> <a href="#"><img src={urlImage + "product/" + product.product_image} /></a></div>
                            </div>
                            {/* <!-- slider-nav.// --> */}
                        </article>
                        {/* <!-- gallery-wrap .end// --> */}
                    </div>
                    {/* <!-- card.// --> */}
                </aside>
                <main class="col-md-6">
                    <article class="product-info-aside">

                        <h2 class="title mt-3">{product.product_name} </h2>

                        <div class="rating-wrap my-3">
                            <ul class="rating-stars">
                                <Rating size="large" readOnly value={product.rating_score || null} />

                            </ul>
                            {/* <small class="label-rating text-muted">132 reviews</small>
                            <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154 orders </small> */}
                        </div>
                        {/* <!-- rating-wrap.// --> */}

                        <div class="mb-3">
                            {product.sale_id ? <var class="price h4">{product.price_sale}</var>
                                : <var class="price h4">{product.listed_price}</var>
                            }
                            {product.sale_id && <span class="text-body text-decoration-line-through ms-3">{product.listed_price}</span>}
                            {/* <span class="text-muted">USD 562.65 incl. VAT</span> */}
                        </div>
                        {/* <!-- price-detail-wrap .// --> */}




                        <dl class="row">
                            {/* <dt class="col-sm-3">Manufacturer</dt>
                            <dd class="col-sm-9"><a href="#">Great textile Ltd.</a></dd> */}

                            {/* <dt class="col-sm-3">Article number</dt>
                            <dd class="col-sm-9">596 065</dd> */}

                            {/* <dt class="col-sm-3">Chi tiết</dt>
                            <dd class="col-sm-9">  {product.product_detail}</dd> */}

                            <dt class="col-sm-3">Đã bán</dt>
                            <dd class="col-sm-9">{sold_qty}</dd>

                            <dt class="col-sm-3">Thời gian nhận hàng</dt>
                            <dd class="col-sm-9">3-4 days</dd>

                            <dt class="col-sm-3">Availabilty</dt>
                            <dd class="col-sm-9">Còn Hàng</dd>
                        </dl>

                        <div class="form-row  mt-4">
                            <div class="form-group col-md flex-grow-0">
                                <div class="input-group mb-3 input-spinner">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-light" type="button" id="button-plus" onClick={() => Add()}> + </button>
                                    </div>
                                    <input type="text" class="form-control" value={qty} />
                                    <div class="input-group-append">
                                        <button class="btn btn-light" type="button" id="button-minus" onClick={() => Sub()}> &minus; </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- col.// --> */}
                            <div class="form-group col-md">

                                <Button class="btn  btn-primary" onClick={() => addToCart()}>
                                    <i class="fas fa-shopping-cart"></i> <span class="text">Add to cart</span>
                                </Button>
                                <a href="#" class="btn btn-light">
                                    <i class="fas fa-envelope"></i> <span class="text">Contact supplier</span>
                                </a>
                            </div>
                        </div>

                    </article>
                </main>
                {/* <!-- col.// --> */}
              
            </div>
            {/* <!-- row.// --> */}

            {/* <!-- ================ ITEM DETAIL END .// ================= --> */}

            <div className="product-main pt-4">
                <asside>
                {product_comment.map((product_order, index) => {
                    return (
                        <MDBContainer className="" style={{ maxWidth: "1000px" }}>
                            <MDBRow className="justify-content-left">
                                <MDBCol md="11" lg="9" xl="7">
                                    <div className="d-flex flex-start mb-4">
                                        <img
                                            className="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                                            alt="avatar"
                                            width="65"
                                            height="65"
                                        />

                                        <MDBCard className="w-100">
                                            <MDBCardBody className="p-4">
                                                <div>
                                                    <MDBTypography tag="h5">{product_order.customer_name}</MDBTypography>
                                                    <p className="small">{product_order.review_date}</p>
                                                    <p>
                                            
                                                     {product.content}
                                                    </p>
                                                    <Rating size="small" readOnly value={product_order.rating_score || null} />
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div className="d-flex align-items-center">
                                                            <a href="#!" className="link-muted me-2">
                                                                <MDBIcon fas icon="thumbs-up me-1" />
                                                                132
                                                            </a>
                                                            <a href="#!" className="link-muted">
                                                                <MDBIcon fas icon="thumbs-down me-1" />
                                                                15
                                                            </a>
                                                        </div>
                                                        <a href="#!" className="link-muted">
                                                            <MDBIcon fas icon="reply me-1" /> Reply
                                                        </a>
                                                    </div>
                                                </div>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </div>


                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    );



                })}

                </asside>

            </div>




            <div class="product-main">

                <div className="d-flex align-items-center justify-content-between border-bottom mb-2">
                    <h4 className=" m-0">Sản Phẩm Tương Tự</h4>
                    <Link to={"/danh-muc/" + product.category_slug} className="showcase-title ">
                        Xem thêm
                    </Link>
                </div>


                <div class="row">

                    {product_other.length > 0 && product_other.map((product, index) => {
                        return <ProductItem product={product} key={index} />;
                    })}
                </div>

            </div>


        </div>
        // </section>

    );
}



export default ProductDetail;


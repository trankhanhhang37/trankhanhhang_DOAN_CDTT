import React from "react";
import NewProduct from "./NewProduct";
import SaleProduct from "./SaleProduct";
import CategoryList from "../CategoryList";
import BrandList from "../BrandList";
// import CategoryHome from "../CategoryHome";

function ProductHome() {

    return (
        <div className="product-home">
            <div className="container">

                <div class="sidebar  has-scrollbar" data-mobile-menu>

                    <div class="sidebar-category">

                        <div class="sidebar-top">
                            <BrandList/>
                             <CategoryList/>
                            
                            <button class="sidebar-close-btn" data-mobile-menu-close-btn>
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>


                    </div>


                
                </div>



                <div className="product col-md-9 col-xl-9 col-lg-9">

                    <NewProduct />

                    <SaleProduct />


                    <div className="product-bestseller">
                        <h3 className="text-center">Best Sellers Products</h3>
                        <div class="row">





                        </div>
                    </div>

                    <div className="product-bestseller">

                        <div class="row">





                        </div>
                    </div>



                </div>




            </div>

        </div>

    );
}
export default ProductHome;

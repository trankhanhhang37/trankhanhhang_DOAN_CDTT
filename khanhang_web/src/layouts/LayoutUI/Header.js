import { Link } from "react-router-dom";
import "./HeaderStyle.css";
import { useEffect, useState } from "react";
import productservice from "../../services/ProductService";
import { useCallback } from "react";
import { useCart } from "react-use-cart";

function Header() {
    const { isEmpty, totalItems } = useCart();
    const [metakey, setMetakey] = useState([]);
    const fetchData = useCallback(async () => {
        const products_data = await productservice.getProductByMetakey(metakey)
        setMetakey(products_data.data.product)
    }, []);
    useEffect(() => {
        setTimeout(() => {
            fetchData()
                .catch(console.error);
        }, 1000);
    }, [fetchData])




    return (
        <header class="section-header">
            <section class="header-main border-bottom">
                <div class="container">
                    <div class="row align-items-center d-flex justify-content-around">
                        {/* <div class="col-sm-1">
                            <nav class="navbar navbar-main navbar-expand-lg border-bottom">
                                <div class="container">

                                </div>
                            </nav>
                        </div> */}

                        <div class="col-2 d-flex justify-content-center pt-1 pb-1">
                            <Link to="/" className="brand-wrap">  <img src={require("../../assets/images/Khanhang.png")} style={{ width: '100px', height: '80px' }} className="img-fluid1" />  </Link>
                            {/* <Link /> */}
                        </div>

                        {/* <div class="col-lg col-sm col-md col-6 flex-grow-0">
                            <div class="category-wrap dropdown d-inline-block float-md-right">
                                <div class="dropdown-menu">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <Link class="nav-link pl-0" to="/"> <strong>Trang Chủ</strong></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link pl-0" to="/san-pham"> <strong>Tất Cả Sản Phẩm</strong></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link pl-0" to="/san-pham"> <strong>Tất Cả Sản Phẩm</strong></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link pl-0" to="/san-pham"> <strong>Tất Cả Sản Phẩm</strong></Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link pl-0" to="/san-pham"> <strong>Tất Cả Sản Phẩm</strong></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- col.// --> */}
                        <div class="col-lg-6 ">
                            <form action={"/tim-kiem/" + metakey} class="search-header">
                                <div class="input-group w-100">
                                    <input type="text" class="form-control" placeholder="Tìm kiếm"
                                        aria-label="Tim kiem"
                                        name="name"
                                        value={metakey}
                                        onChange={(e) => setMetakey(e.target.value)}
                                        className="form-control"
                                    />
                                    <div class="input-group-append">
                                        <button class="btn" style={{ width: '60px' }} type="submit">
                                            <i class="fa fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {/* <!-- search-wrap .end// --> */}
                        </div>
                        {/* <!-- col.// --> */}
                        <div class="col-lg-4 d-flex justify-content-center">
                            <div class="widgets-wrap ">
                            <Link to="/gio-hang" class="widget-header mr-3 ">
                                    <i class="icon icon-sm rounded-circle  fa fa-shopping-cart"></i>
                                    {!isEmpty && < span class="notify">
                                        {totalItems}</span>}
                            </Link>
                            <a href="#" class="widget-header ">
                                <i class="icon icon-sm rounded-circle fa fa-heart"></i>
                            </a>

                            <div class="widget-header dropdown">
                                <a href="#" data-toggle="dropdown" data-offset="20,10">
                                      <div class="icontext">
                                        <Link to="/dang-nhap">
                                        <div class="icon">
                                            <i class="icon-sm rounded-circle fa fa-user"></i>
                                        </div>
                                        </Link>
                                        <div class="text">
                                            {/* <small class="text-muted">Signup| Login</small> */}
                                            <div>Tài khoản <i class="fa fa-caret-down"></i> </div>
                                        </div>
                                    </div>
                                </a>

                                {/* <div class="dropdown-menu dropdown-menu-right">
                                        <form class="px-4 py-3">
                                            <div class="form-group">
                                                <label>Email address</label>
                                                <input type="email" class="form-control" placeholder="email@example.com" />
                                            </div>
                                            <div class="form-group">
                                                <label>Password</label>
                                                <input type="password" class="form-control" placeholder="Password" />
                                            </div>
                                            <button type="submit" class="btn btn-primary">Sign in</button>
                                        </form>
                                        <hr class="dropdown-divider" />
                                        <a class="dropdown-item" href="#">Have account? Sign up</a>
                                        <a class="dropdown-item" href="#">Forgot password?</a>
                                    </div> */}

                                {/* <!--  dropdown-menu .// --> */}
                            </div>

                            {/* <!-- widget-header .// --> */}
                        </div>
                        {/* <!-- widgets-wrap.// --> */}
                    </div>
                    {/* <!-- col.// --> */}
                </div>
                {/* <!-- row.// --> */}
            </div>
            {/* <!-- container.// --> */}
        </section>
            {/* <!-- header-main .// --> */ }


    {/* <!-- navbar main end.// --> */ }
    {/* <!-- section-header.// --> */ }
        </header >


    );

}

export default Header;
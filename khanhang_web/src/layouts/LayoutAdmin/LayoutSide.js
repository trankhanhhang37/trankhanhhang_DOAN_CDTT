import { Link, Outlet } from "react-router-dom";

function LayoutSide() {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading">MeNu</div>

                            <a class="nav-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Quản Lý Sản Phẩm
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>

                            <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="/admin/product">Tất cả sản phẩm</Link>
                                    <Link class="nav-link" to="/admin/brand">Thương Hiệu</Link>
                                    <Link class="nav-link" to="/admin/category">Danh Mục</Link>
                                </nav>
                            </div>

                            {/* 
                        <Link class="nav-link" to="/admin/brand">
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Quản Lý Thương Hiệu
                        </Link>

                        <Link class="nav-link" >
                            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                            Quản Lý Danh Mục
                        </Link> */}
                            <div class="sb-sidenav-menu-heading">Interface</div>

                            {/* <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                            <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                            Layouts
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                        </a>
                        <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav class="sb-sidenav-menu-nested nav">
                                <a class="nav-link" href="layout-static.html">Static Navigation</a>
                                <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                            </nav>
                        </div> */}

                            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                Pages
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Quản Lý Trang Người Dùng
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <Link className="nav-link" to="/admin/menu">Menu</Link>
                                            <Link className="nav-link" to="/admin/post">Bài Viết</Link>
                                            <Link className="nav-link" to="/admin/topic">Topic</Link>
                                            <Link className="nav-link" to="/admin/user">User</Link>
                                            <Link className="nav-link" to="/admin/slider">Slider</Link>
                                            <Link className="nav-link" to="/admin/page">Page</Link>
                                            <Link className="nav-link" to="/admin/customer">Khách Hàng</Link>

                                        </nav>
                                    </div>
                                    <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Quản Lý Đơn Hàng
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <Link className="nav-link" to="/admin/order">Đơn Hàng</Link>
                                            <Link className="nav-link" to="/admin/orderdetail">Chi tiết đơn hàng</Link>

                                        </nav>
                                    </div>
                                </nav>
                            </div>

                            <div class="sb-sidenav-menu-heading">Addons</div>

                            <Link className="nav-link text-white" to="/admin/info">

                                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                Thông tin
                            </Link>

                            <Link className="nav-link text-white" to ="/admin/contact">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                Liên hệ
                                </Link>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                </nav>
            </div>


            {/* <!--  */}
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid px-4">
                        <h1 class="mt-4"></h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active">Static Navigation</li>
                        </ol>
                        <Outlet />



                        <div class="" style={{ height: "100vh" }} ></div>
                        {/* <div class="card mb-4"><div class="card-body">When scrolling, the navigation stays at the top of the page. This is the end of the static navigation demo.</div></div> */}
                    </div>
                </main>
            </div>

        </div>
    );
}

export default LayoutSide;
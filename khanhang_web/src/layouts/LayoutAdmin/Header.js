import { Link } from "react-router-dom";

function BackendHeader() {
    return (
        // <section className="header bg-primary ">
        //     <div className="container-fluid">
        //         <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //             <div className="container-fluid">
        //                 <Link className="navbar-brand text-dark" to="/admin">Quản trị</Link>
        //                 <button className="navbar-toggler text-dark" 
        //                 type="button" 
        //                 data-bs-toggle="collapse" 
        //                 data-bs-target="#navbarSupportedContent" 
        //                 aria-controls="navbarSupportedContent" 
        //                 aria-expanded="false" 
        //                 aria-label="Toggle navigation">
        //                     <span className="navbar-toggler-icon"></span>
        //                 </button>
        //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                
        //                         <li className="nav-item dropdown text-dark">
        //                             <Link className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                Quản lí sản phẩm
        //                             </Link>
        //                             <ul className="dropdown-menu">
        //                                 <li><Link className="dropdown-item" to="/admin/product">Tất cả sản phẩm</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/category">Danh mục</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/brand">Thương hiệu</Link></li>
        //                             </ul>
        //                         </li>

        //                         <li className="nav-item dropdown text-dark">
        //                             <Link className="nav-link dropdown-toggle text-dar" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                Quản lí đơn hàng
        //                             </Link>
        //                             <ul className="dropdown-menu">
        //                                 <li><Link className="dropdown-item" to="/admin/order">Đơn Hàng</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/orderdetail">Chi tiết đơn hàng</Link></li>
        //                             </ul>
        //                         </li>

        //                         <li className="nav-item dropdown text-dark">
        //                             <Link className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                                Quản lí người dùng
        //                             </Link>
        //                             <ul className="dropdown-menu">
        //                                 <li><Link className="dropdown-item" to="/admin/menu">Menu</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/post">Bài Viết</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/topic">Topic</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/user">User</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/slider">Slider</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/page">Page</Link></li>
        //                                 <li><Link className="dropdown-item" to="/admin/customer">Khách Hàng</Link></li>


        //                             </ul>
        //                         </li>


        //                         <li className="nav-item">
        //                             <Link className="nav-link text-dark" to ="/admin/contact">Liên hệ</Link>
        //                         </li>
        //                         <li className="nav-item">
        //                             <Link className="nav-link text-dark" to ="/admin/info">Thông tin</Link>
        //                         </li>

        //                         <li className="nav-item">
        //                             <Link className="nav-link disabled">Disabled</Link>
        //                         </li>
        //                     </ul>
        //                     <form className="d-flex" role="search">
        //                         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        //                         <button className="btn btn-outline-success" type="submit">Search</button>
        //                     </form>
        //                 </div>
        //             </div>
        //         </nav>
        //     </div>

        // </section>
        <>
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* <!-- Navbar Brand--> */}
        <Link to="/" className="brand-wrap pl-2 pt-1 pb-1 ">  <img src={require("../../assets/images/Khanhang.png")} style={{ width: '50px', height: '50px' }} className="img-fluid1" />  </Link>

        <Link class="navbar-brand ps-3" to="/admin">KHANHANG</Link>
        {/* <!-- Sidebar Toggle--> */}
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
        {/* <!-- Navbar Search--> */}
        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
            </div>
        </form>
        {/* <!-- Navbar--> */}
        <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#!">Settings</a></li>
                    <li><a class="dropdown-item" href="#!">Activity Log</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#!">Logout</a></li>
                </ul>
            </li>
        </ul>
        </nav>

    </>

    );
}

export default BackendHeader;
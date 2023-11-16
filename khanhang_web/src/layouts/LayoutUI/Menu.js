import { Link } from "react-router-dom";

function Menu() {
    return (
        <div className="menu d-flex justify-content-center pt-1">

            <nav class="navbar navbar-main navbar-expand-lg ">
                <div class="container">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav4" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="main_nav4">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link pl-1" to="/"> <strong>Trang Chủ</strong></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link pl-2" to="/bai-viet"> <strong>Bài Viết</strong></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link pl-2" to="/san-pham"> <strong> Sản Phẩm</strong></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link pl-2" to="/khuyen-mai"> <strong>Khuyến Mãi</strong></Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link pl-2" to="/lien-he"> <strong>Liên Hệ</strong></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );

}

export default Menu;
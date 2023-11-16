import { FaPhoneSquareAlt, FaSearchLocation, FaVoicemail } from "react-icons/fa";
import { Link } from "react-router-dom";
// import "./FooterStyle.css";
// import Contact from "../../pages/frontend/Contact";


function Footer() {
    return ( 
        // <!-- ========================= FOOTER ========================= -->
        <footer class="section-footer border-top">
            <div class="container">
                <section class="footer-top  padding-y">
                    <div class="row">
                        <aside class="col-md-4 col-12">
                            <article class="mr-md-4">
                                <h5 class="title">Về Chúng Tôi</h5>
                                <ul class="list-icon">
                                    <li> <i class="icon fa fa-map-marker"> </i>420 Hy Vong, Quận 9, TP.HCM</li>
                                    <li> <i class="icon fa fa-envelope"> </i> tranhang3726@gmail.com</li>
                                    <li> <i class="icon fa fa-phone"> </i> 030702062000</li>
                                    <li> <i class="icon fa fa-clock"> </i>Mỗi Ngày 9:00 - 22:00</li>
                                </ul>
                            </article>
                        </aside>
                        <aside class="col-md col-6">
                            <h5 class="title">Thông Tin Của Hàng</h5>
                            <ul class="list-unstyled">
                                <li> <Link to ="lien-he">Liên Hệ</Link></li>
                                {/* <li> <Link to ="lien-he">Tuyển Dụng</a></li>
                                <li> <Link to ="lien-he">Hệ Thống Cửa Hàng</a></li> */}
                            </ul>
                        </aside>
                        <aside class="col-md col-6">
                            <h5 class="title">Chính Sách Cửa Hàng</h5>
                            <ul class="list-unstyled">
                                <li> <Link to ='/chinh-sach-van-chuyen'>Giao Hàng</Link></li>
                                 {/* <li> <Link to ='/chinh-sach-doi-tra'></Link></li>
                                <li> <Link to ='/chinh-sach-van-chuyen'>Giao Hàng</Link></li>  */}
                                <li> <Link to ='/chinh-sach-mua-hang'>Mua Hàng</Link></li>
                            </ul>
                        </aside>
{/* 
                    {footer.map(function (ft, index) {
                                  return (<p key ={index}>
                        <Link className="text-black"to ={"/don/"+ft.slug}>{ft.title}</Link>
                        </p>)

                      })} */}
                        <aside class="col-md-4 col-12">
                            <h5 class="title">Đăng kí nhận tin</h5>
                            
                            <form class="form-inline mb-3">
                                <input type="text" placeholder="Email" class="form-control" name=""/>
                                <button class="btn ml-2 btn-succes"> Đăng Kí</button>
                            </form>
                
                        </aside>
                    </div> 
                    {/* <!-- row.// --> */}
                </section>	
                {/* <!-- footer-top.// --> */}
        
                {/* <section class="footer-bottom border-top row">
                    <div class="col-md-6">
                        <p class="mb-0">
                            <a href="">Terms and Conditions</a> | 
                            <a href="">Privacy</a> | 
                            <a href="">Cookies</a>
                        </p>
                    </div>
                    <div class="col-md-6 text-md-right">
                        <i class="fab fa-lg fa-cc-visa"></i>
                        <i class="fab fa-lg fa-cc-paypal"></i>
                        <i class="fab fa-lg fa-cc-mastercard"></i>
                    </div>
                </section> */}

            </div>
            {/* <!-- //container --> */}
        </footer>
            );
}

export default Footer;
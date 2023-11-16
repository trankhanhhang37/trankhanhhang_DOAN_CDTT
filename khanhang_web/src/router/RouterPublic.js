// import { Next } from "react-bootstrap/esm/PageItem";

import ShoppingCart from "../pages/frontend/Cart";
import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
// import CategoryHome from "../pages/frontend/Home/CategoryHome";
import SaleProduct from "../pages/frontend/Home/Products/SaleProduct";
import Login from "../pages/frontend/Login";
import Delivery from "../pages/frontend/Page/Delivery";
import Exchange from "../pages/frontend/Page/Exchange";
import Intro from "../pages/frontend/Page/Intro";
import Shopping from "../pages/frontend/Page/Shopping";
import Warranty from "../pages/frontend/Page/Warranty";
import Post from "../pages/frontend/Post";
import PostDetail from "../pages/frontend/Post/PostDetail";
import PostTopic from "../pages/frontend/PostTopic";
import ProBra from "../pages/frontend/ProBra";
import ProCat from "../pages/frontend/ProCat";
import Product from "../pages/frontend/Product";
import ProductDetail from "../pages/frontend/Product/ProductDetail";
import SearchProduct from "../pages/frontend/SearchProduct";
import SignUp from "../pages/frontend/SignUp";


const RouterPublic =[
    {path:'/',component:Home},
    {path:'/lien-he',component:Contact},
    {path:'/dang-nhap',component:Login},
    {path:'/san-pham',component:Product}, 
    {path:'/dang-ki',component:SignUp},
    {path:'/chi-tiet-san-pham/:slug',component:ProductDetail},
    {path:'/danh-muc-san-pham/:slug',component:ProCat},
    {path:'/thuong-hieu/:slug',component:ProBra},
    {path:'/tim-kiem/:metakey',component:SearchProduct},
    {path:'/gio-hang',component:ShoppingCart},
    {path:'/khuyen-mai',component:SaleProduct},

    {path:'/chi-tiet-bai-viet/:slug',component:PostDetail},
    
    {path:'/bai-viet',component:Post},

    {path:'/danh-muc-bai-viet/:slug',component:PostTopic},


    
    {path:'/gioi-thieu',component:Intro},

    {path:'/chinh-sach-bao-hanh',component:Warranty},

    {path:'/chinh-sach-doi-tra',component:Exchange},

    {path:'/chinh-sach-van-chuyen',component:Delivery},

    {path:'/chinh-sach-mua-hang',component:Shopping},


    
    







];
export default RouterPublic; 
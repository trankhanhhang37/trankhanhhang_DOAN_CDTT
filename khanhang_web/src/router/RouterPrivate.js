// import BrandCreate from "../pages/backend/Brand/BrandCreate";
// import BrandList from "../pages/backend/Brand/BrandList";
// import BrandShow from "../pages/backend/Brand/BrandShow";
// import BrandUpdate from "../pages/backend/Brand/BrandUpdate";

import BrandCreate from "../pages/backend/Brand/BrandCreate";
import BrandList from "../pages/backend/Brand/BrandList";
import BrandShow from "../pages/backend/Brand/BrandShow";
import BrandUpdate from "../pages/backend/Brand/BrandUpdate";

import CategoryCreate from "../pages/backend/Category/CatCreate";
import CategoryList from "../pages/backend/Category/CatList";
import CategoryShow from "../pages/backend/Category/CatShow";
import CategoryUpdate from "../pages/backend/Category/CatUpdate";

import Dashboard from "../pages/backend/Dashboard";

import OrderdetailCreate from "../pages/backend/Orderdetail/OrderdetailCreate";
import OrderdetailList from "../pages/backend/Orderdetail/OrderdetailList";
import OrderdetailShow from "../pages/backend/Orderdetail/OrderdetailShow";
import OrderdetailUpdate from "../pages/backend/Orderdetail/OrderdetailUpdate";

import PostCreate from "../pages/backend/Post/PostCreate";
import PostList from "../pages/backend/Post/PostList";
import PostShow from "../pages/backend/Post/PostShow";
import PostUpdate from "../pages/backend/Post/PostUpdate";

import ProductCreate from "../pages/backend/Product/ProductCreate";
import ProductList from "../pages/backend/Product/ProductList";
import ProductShow from "../pages/backend/Product/ProductShow";
import ProductUpdate from "../pages/backend/Product/ProductUpdate";



import ContactCreate from "../pages/backend/Contact/ContactCreate";
import ContactList from "../pages/backend/Contact/ContactList";
import ContactShow from "../pages/backend/Contact/ContactShow";
import ContactUpdate from "../pages/backend/Contact/ContactUpdate";
import ContactReply from "../pages/backend/Contact/ContactReply";


import MenuCreate from "../pages/backend/Menu/MenuCreate";
import MenuList from "../pages/backend/Menu/MenuList";
import MenuShow from "../pages/backend/Menu/MenuShow";
import MenuUpdate from "../pages/backend/Menu/MenuUpdate";

import OrderCreate from "../pages/backend/Order/OrderCreate";
import OrderList from "../pages/backend/Order/OrderList";
import OrderShow from "../pages/backend/Order/OrderShow";
import OrderUpdate from "../pages/backend/Order/OrderUpdate";

import PageList from "../pages/backend/Pageus/PageList";
import PageCreate from "../pages/backend/Pageus/PageCreate";
import PageUpdate from "../pages/backend/Pageus/PageUpdate";
import PageShow from "../pages/backend/Pageus/PageShow";

import TopicList from "../pages/backend/Topic/TopicList";
import TopicCreate from "../pages/backend/Topic/TopicCreate";
import TopicUpdate from "../pages/backend/Topic/TopicUpdate";
import TopicShow from "../pages/backend/Topic/TopicShow";

import SliderList from "../pages/backend/Slider/SliderList";
import SLiderCreate from "../pages/backend/Slider/SliderCreate";
import SliderUpdate from "../pages/backend/Slider/SliderUpdate";
import SliderShow from "../pages/backend/Slider/SliderShow";

import UserCreate from "../pages/backend/User/UserCreate";
import UserList from "../pages/backend/User/UserList";
import UserUpdate from "../pages/backend/User/UserUpdate";
import UserShow from "../pages/backend/User/UserShow";

import InfoList from "../pages/backend/Info/InfoList";
import InfoCreate from "../pages/backend/Info/InfoCreate";
import InfoShow from "../pages/backend/Info/InfoShow";
import InfoUpdate from "../pages/backend/Info/InfoUpdate";

import CustomerList from "../pages/backend/Customer/CustomerList";
import CustomerCreate from "../pages/backend/Customer/CustomerCreate";
import CustomerShow from "../pages/backend/Customer/CustomerShow";
import CustomerUpdate from "../pages/backend/Customer/CustomerUpdate";
import ProductRemove from "../pages/backend/Product/ProductRemove";
import BrandRemove from "../pages/backend/Brand/BrandRemove";
import CategoryRemove from "../pages/backend/Category/CategoryRemove";
import ContactRemove from "../pages/backend/Contact/ContacRemove";
import MenuRemove from "../pages/backend/Menu/MenuRemove";
import OrderRemove from "../pages/backend/Order/OrderRemove";
import OrderdetailRemove from "../pages/backend/Orderdetail/OrderdetailRemove";
import PostRemove from "../pages/backend/Post/PostRemove";
import PageRemove from "../pages/backend/Pageus/PageRemove";
import TopicRemove from "../pages/backend/Topic/TopicRemove";
import SliderRemove from "../pages/backend/Slider/SliderRemove";
import UserRemove from "../pages/backend/User/UserRemove";
import InfoRemove from "../pages/backend/Info/InfoRemove";
import CustomerRemove from "../pages/backend/Customer/CustomerRemove";




const RouterPrivate =[
    {path:'/admin',component:Dashboard},
    {path:'/admin/brand',component:BrandList},
    {path:'/admin/brand/create',component:BrandCreate},
    {path:'/admin/brand/update/:id',component:BrandUpdate},
    {path:'/admin/brand/show/:id',component:BrandShow},
    {path:'/admin/brand/listremove',component:BrandRemove},


    {path:'/admin/category',component:CategoryList},
    {path:'/admin/category/create',component:CategoryCreate},
    {path:'/admin/category/update/:id',component:CategoryUpdate},
    {path:'/admin/category/show/:id',component:CategoryShow},
    {path:'/admin/category/listremove',component:CategoryRemove},


    {path:'/admin/product',component:ProductList},
    {path:'/admin/product/create',component:ProductCreate},
    {path:'/admin/product/listremove',component:ProductRemove},
    {path:'/admin/product/update/:id',component:ProductUpdate},
    {path:'/admin/product/show/:id',component:ProductShow},

    {path:'/admin/contact',component:ContactList},
    {path:'/admin/contact/create',component:ContactCreate},
    {path:'/admin/contact/update/:id',component:ContactUpdate},
    {path:'/admin/contact/show/:id',component:ContactShow},
    {path:'/admin/contact/reply/:id',component:ContactReply},
    {path:'/admin/contact/listremove',component:ContactRemove},



    {path:'/admin/menu',component:MenuList},
    {path:'/admin/menu/create',component:MenuCreate},
    {path:'/admin/menu/update/:id',component:MenuUpdate},
    {path:'/admin/menu/show/:id',component:MenuShow},
    {path:'/admin/menu/listremove',component:MenuRemove},

    {path:'/admin/order',component:OrderList},
    {path:'/admin/order/create',component:OrderCreate},
    {path:'/admin/order/update/:id',component:OrderUpdate},
    {path:'/admin/order/show/:id',component:OrderShow},
    {path:'/admin/order/listremove',component:OrderRemove},


    {path:'/admin/orderdetail',component:OrderdetailList},
    {path:'/admin/orderdetail/create',component:OrderdetailCreate},
    {path:'/admin/orderdetail/update/:id',component:OrderdetailUpdate},
    {path:'/admin/orderdetail/show/:id',component:OrderdetailShow},
    {path:'/admin/orderdetail/listremove',component:OrderdetailRemove},


    {path:'/admin/post',component:PostList},
    {path:'/admin/post/create',component:PostCreate},
    {path:'/admin/post/update/:id',component:PostUpdate},
    {path:'/admin/post/show/:id',component:PostShow},
    {path:'/admin/post/listremove',component:PostRemove},


    {path:'/admin/page',component:PageList},
    {path:'/admin/page/create',component:PageCreate},
    {path:'/admin/page/update/:id',component:PageUpdate},
    {path:'/admin/page/show/:id',component:PageShow},
    {path:'/admin/page/listremove',component:PageRemove},



    {path:'/admin/topic',component:TopicList},
    {path:'/admin/topic/create',component:TopicCreate},
    {path:'/admin/topic/update/:id',component:TopicUpdate},
    {path:'/admin/topic/show/:id',component:TopicShow},
    {path:'/admin/topic/listremove',component:TopicRemove},

 
    {path:'/admin/slider',component:SliderList},
    {path:'/admin/slider/create',component:SLiderCreate},
    {path:'/admin/slider/update/:id',component:SliderUpdate},
    {path:'/admin/slider/show/:id',component:SliderShow},
    {path:'/admin/slider/listremove',component:SliderRemove},


    {path:'/admin/user',component:UserList},
    {path:'/admin/user/create',component:UserCreate},
    {path:'/admin/user/update/:id',component:UserUpdate},
    {path:'/admin/user/show/:id',component:UserShow},
    {path:'/admin/user/listremove',component:UserRemove},


    {path:'/admin/info',component:InfoList},
    {path:'/admin/info/create',component:InfoCreate},
    {path:'/admin/info/update/:id',component:InfoUpdate},
    {path:'/admin/info/show/:id',component:InfoShow},
    {path:'/admin/info/listremove',component:InfoRemove},


    {path:'/admin/customer',component:CustomerList},
    {path:'/admin/customer/create',component:CustomerCreate},
    {path:'/admin/customer/update/:id',component:CustomerUpdate},
    {path:'/admin/customer/show/:id',component:CustomerShow},
    {path:'/admin/customer/listremove',component:CustomerRemove},







];
export default RouterPrivate;
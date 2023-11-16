import React, { useEffect, useState } from "react";
import categoryservice from "../../../services/CategoryService";
import { Link } from "react-router-dom";

function CategoryList() {

    const [category_list, setCategoryList] = useState([]);
    useEffect(function () {
        (async function () {
            await categoryservice.getCategoryByParentId(0).then(function (result) {
                setCategoryList(result.data.categories)
            });
        })();
    }, []);
    
    return (
        <aside class="col-lg-3 mt-3 flex-lg-grow-0">
        <nav class="nav-home-aside">
            <h6 class="title-category"> DANH MỤC SẢN PHẨM<i class="d-md-none icon fa fa-chevron-down"></i></h6>
            <ul class="menu-category">
            {category_list.map(function(cat,index){
                    return(<li key={index}>
                        <Link to={"/danh-muc-san-pham/"+cat.slug}>{cat.name}</Link>

                    </li>)

                })}
                {/* <li><a href="#">{category.name}</a></li>
                <li><a href="#">Bánh Kem 1 Tầng</a></li>
                <li><a href="#">Bánh Kem 2 Tầng</a></li>
                <li><a href="#">Bánh Theo Yêu Cầu</a></li>
                <li><a href="#">Bánh Nướng</a></li>
                <li><a href="#">Bánh Đông Sương</a></li>
                <li><a href="#">Bánh Trái Cây</a></li>
                <li class="has-submenu"><a href="#">Xem Thêm</a> */}
                    {/* <ul class="submenu">
                        <li><a href="#">Submenu name</a></li>
                        <li><a href="#">Great submenu</a></li>
                        <li><a href="#">Another menu</a></li>
                        <li><a href="#">Some others</a></li>
                    </ul> */}
                {/* </li> */}
            </ul>
        </nav>
    </aside>
);
}
export default CategoryList;

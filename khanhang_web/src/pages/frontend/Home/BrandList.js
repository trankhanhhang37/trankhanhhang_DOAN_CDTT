
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import brandservice from "../../../services/BrandService";



// function ListBrand() {
//     const [brands, setBrand] = useState([]);
//     useEffect(function () {
//         (async function () {
//             await brandservice.getAll().then(function (result) {
//                 setBrand(result.data.brands)
//             });
//         })();
//     }, [])
//     return (

//         <section className="maincontent">
//             <div className="container">
//                 <div className="product-category text-center">
//                     <h3>Thương Hiệu</h3>
//                     <div className="row">
//                         {brands.map(function (brand, index) {
//                             return <Link key={index} className="text-center text-success nav-link" to={'../thuong-hieu/'+brand.slug}>{brand.name}</Link>;
//                         })}

//                     </div>

//                 </div>

//             </div>
//         </section>
//     );
// }

// export default ListBrand;

function BrandList() {
    const [listbrand, setListBrands] = useState([]);
    useEffect(function () {
        (async function () {
            try{
            const result = await brandservice.getAll();
            setListBrands(result.data.brands);
            }
            catch(error){
                console.error(error);

            }
        })();
    }, []);
    return (
    <aside class="col-lg-3 mt-3 flex-lg-grow-0">
        <nav class="nav-home-aside">
            <h6 class="title-category"> THƯƠNG HIỆU SẢN PHẨM<i class="d-md-none icon fa fa-chevron-down"></i></h6>
            <ul class="menu-category">
            {listbrand.map(function(bra,index){
                    return(<li key={index}>
                        <Link to={"/thuong-hieu/"+bra.slug}>{bra.name}</Link>

                    </li>)

                })}
            </ul>
        </nav>
    </aside>

        // <div className="listbrand">
        //     <h5 className="bg-info p-3 m-0 text-center">Thương hiệu sản phẩm</h5>
        //     <ul>
        //     {listbrand.map(function(bra,index){
        //             return(<li key={index}>
        //                 <Link to={"/thuong-hieu/"+bra.slug}>{bra.name}</Link>

        //             </li>)

        //         })}
        //         <li>
        //             <Link></Link>
        //         </li>
        //     </ul>
        // </div>
      );
}

export default BrandList;
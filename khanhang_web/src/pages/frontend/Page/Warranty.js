import { useEffect, useState } from "react";
import pageusservice from "../../../services/PageUsService";
import { urlImage } from "../../../config";

function Warranty() {
    const [page, setPages] = useState([]);
    useEffect(function () {
        (function () {
            pageusservice.getById('chinh-sach-bao-hanh').then(function (result) {
            
                setPages(result.data.page);

            });
        })();
    }, []);

    return (
        <section className="maincontent">
            <div className="container">
            <div className="product-category pt-2 pb-2 mt-1  text-success ">
                <h2 className="tetx-dark">{page.name}</h2>

                <h3 className="tetx-dark">{page.title}</h3>
                        <div className="col-md-9">
                        <h5 className="name2 text-dark"> {page.detail}</h5>

                        </div>
                        <div className="col-md-9">
                        <img src={urlImage + "page/" + page.image} className="img-fluid " alt="S" />

                        </div>


                    
                </div>



            </div>
        </section>
    );
}

export default Warranty;
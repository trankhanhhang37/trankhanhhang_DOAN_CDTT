import { useEffect, useState } from "react";
import pageusservice from "../../../services/PageUsService";
import { urlImage } from "../../../config";


function Intro() {

    const [page, setPages] = useState([]);
    useEffect(function () {
        (function () {
            pageusservice.getById('gioi-thieu').then(function (result) {
            
                setPages(result.data.page);

            });
        })();
    }, []);

    return (
        <section className="maincontent">
            <div className="container">
                <div className="product-category pt-2 pb-2 mt-1 text-success ">
                <h4 className="tetx-dark">{page.name}</h4>

                <h4 className="tetx-dark">{page.title}</h4>
                        <div className="col-md-6">
                        <div className="name2 text-dark"> {page.detail}</div>

                        </div>

                        <div className="col-md-9">
                        <img src={urlImage + "page/" + page.image} className="img-fluid " alt="S" />

                        </div>


                </div>



            </div>
        </section>
    );
}

export default Intro;
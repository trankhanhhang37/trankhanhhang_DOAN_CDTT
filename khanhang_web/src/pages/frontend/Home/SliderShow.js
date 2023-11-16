import React from "react";

function SliderShow() {

    // const [sliders, setSliders] = useState([]);
    // useEffect(function () {
    //     (async function () {
    //         await sliderservice.getSlider_byPosition('main').then(function (result) {
    //             setSliders(result.data.sliders)
    //         });
    //     })();
    // }, []);
    return (
        // <div id="carousel1_indicator" class="slider-home-banner carousel slide" data-ride="carousel">
        //     <ol class="carousel-indicators">
        //         <li data-target="#carousel1_indicator" data-slide-to="0" class="active"></li>
        //         <li data-target="#carousel1_indicator" data-slide-to="1"></li>
        //         <li data-target="#carousel1_indicator" data-slide-to="2"></li>
        //     </ol>
        //     <div class="carousel-inner">
        //         <div class="carousel-item active">
        //         <img src={require("../../../assets/images/banners/slide1.jpg")} />
        //         </div>
        //         <div class="carousel-item">
        //         <img src={require("../../../assets/images/banners/slide2.jpg")} />
        //         </div>
        //         <div class="carousel-item">
        //             <img src="images/banners/slide3.jpg" alt="Third slide" />
        //         </div>
        //     </div>
        //     <a class="carousel-control-prev" href="#carousel1_indicator" role="button" data-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Previous</span>
        //     </a>
        //     <a class="carousel-control-next" href="#carousel1_indicator" role="button" data-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="sr-only">Next</span>
        //     </a>
        // </div>
        <div class="col-md-6 mt-3 ">

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require("../../../assets/images/banners/banner1.jpg")} className=" " alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={require("../../../assets/images/banners/banner2.jpg")} className="" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src={require("../../../assets/images/banners/banner3.jpg")} className="" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>


    );
}
export default SliderShow;

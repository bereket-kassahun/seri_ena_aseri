import { Link } from "react-router-dom"
export const Categories = () => {
    return (<>
        <div class="container container-two" data-padding-top="100" data-padding-bottom="100">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-two">
                        <h3 class="title"> Browse Category </h3>
                    </div>
                </div>
            </div>
            <div class="row margin-top-20">
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(http://elouzeir.sprintstudio.net/assets/uploads/media-uploader/young-beautiful-cleaner-woman-holding-bucket-with-products-pointing-camera-against-blue-backdrop-51643712682.png)` }}>

                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Electronics'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Electronics
                                    </a>
                                </h4>
                            </Link>
                            <span class="category-para"> 5+ Service </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(http://elouzeir.sprintstudio.net/assets/uploads/media-uploader/young-beautiful-cleaner-woman-holding-bucket-with-products-pointing-camera-against-blue-backdrop-91643715796.png)` }}>

                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Cleaning'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Cleaning
                                    </a>
                                </h4>
                            </Link>
                            <span class="category-para"> 5+ Service </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(http://elouzeir.sprintstudio.net/assets/uploads/media-uploader/young-beautiful-cleaner-woman-holding-bucket-with-products-pointing-camera-against-blue-backdrop-541643714922.png)` }}>

                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'home move'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Home Move
                                    </a>
                                </h4>
                            </Link>
                            <span class="category-para"> 2+ Service </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(http://elouzeir.sprintstudio.net/assets/uploads/media-uploader/young-beautiful-cleaner-woman-holding-bucket-with-products-pointing-camera-against-blue-backdrop-201643715291.png)` }}>

                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'painting'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Paiting
                                    </a>
                                </h4>
                            </Link>
                            <span class="category-para"> 2+ Service </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(http://elouzeir.sprintstudio.net/assets/uploads/media-uploader/young-beautiful-cleaner-woman-holding-bucket-with-products-pointing-camera-against-blue-backdrop-521643715484.png)` }}>

                        </div>
                        <div class="category-contents">
                        <Link to="/category" state={'Salon and Spa'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Salon and Spa
                                    </a>
                                </h4>
                            </Link>
                            <span class="category-para"> 5+ Service </span>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(http://elouzeir.sprintstudio.net/assets/uploads/media-uploader/img-20220314-wa00001649348574.jpg)` }}>

                        </div>
                        <div class="category-contents">
                        <Link to="/category" state={'Digital Marketing'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Digital Marketing
                                    </a>
                                </h4>
                            </Link>
                            <span class="category-para"> 5+ Service </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}
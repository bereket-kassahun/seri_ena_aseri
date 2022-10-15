import { Link } from "react-router-dom"
export const Categories = () => {
    return (<>
        <div class="container container-two" data-padding-top="100" data-padding-bottom="100">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-two">
                        <h3 class="title"> Browse Category </h3>
                        <Link to="category_list"> <a class="section-btn"> Explore All </a></Link>
                    </div>
                </div>
            </div>
            <div class="row margin-top-20">
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/category/plumbing.jpg)` }}>
                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Plumbing'} >
                                <h4 class="category-title">
                                    <a href="" style={{color: "black", fontSize: "17px", }}>
                                        Plumbing
                                    </a>
                                </h4>
                            </Link>
                            {/* <span class="category-para"> 5+ Service </span> */}
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/category/cleaning.jpg)` }}>

                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Cleaning'} >
                                <h4 class="category-title">
                                    <a href="" style={{color: "black", fontSize: "17px", }}>
                                        Cleaning
                                    </a>
                                </h4>
                            </Link>
                            {/* <span class="category-para"> 5+ Service </span> */}
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/category/tutoring.jpg)` }}>

                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Tutoring'} >
                                <h4 class="category-title">
                                    <a href="" style={{color: "black", fontSize: "17px", }}>
                                    Tutoring
                                    </a>
                                </h4>
                            </Link>
                            {/* <span class="category-para"> 2+ Service </span> */}
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/category/painting.jpg)` }}>

                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'painting'} >
                                <h4 class="category-title">
                                    <a href="" style={{color: "black", fontSize: "17px", }}>
                                        Paiting
                                    </a>
                                </h4>
                            </Link>
                            {/* <span class="category-para"> 2+ Service </span> */}
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/category/hairdresser.jpg)` }}>

                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Hairdresser'} >
                                <h4 class="category-title">
                                    <a href="" style={{color: "black", fontSize: "17px", }}>
                                        Hairdresser
                                    </a>
                                </h4>
                            </Link>
                            {/* <span class="category-para"> 5+ Service </span> */}
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/category/laundary.jpg)` }}>

                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Laundry'} >
                                <h4 class="category-title">
                                    <a href="" style={{color: "black", fontSize: "17px", }}>
                                    Laundry 
                                    </a>
                                </h4>
                            </Link>
                            {/* <span class="category-para"> 5+ Service </span> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}
import { Link } from "react-router-dom"
export const ProfessionalServices = () => {
    return (<>
        <div class="container container-two" data-padding-top="100"  data-padding-bottom="70">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title-two">
                        <h3 class="title"> Professional Services </h3>
                        <Link to="category_list"> <a class="section-btn"> Explore All </a></Link>
                    </div>
                </div>
            </div>
            {/* <div class="row margin-top-20">
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/category/plumbing.jpg)` }}>
                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Plumbing'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Accountancy, banking and finance
                                    </a>
                                </h4>
                            </Link>
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
                                    <a href="">
                                        Business
                                    </a>
                                </h4>
                            </Link>
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
                                    <a href="">
                                        Charity and voluntary work
                                    </a>
                                </h4>
                            </Link>
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
                                    <a href="">
                                        Creative arts and design
                                    </a>
                                </h4>
                            </Link>
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
                                    <a href="">
                                        Energy and utilities
                                    </a>
                                </h4>
                            </Link>
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
                                    <a href="">
                                        Engineering and construction
                                    </a>
                                </h4>
                            </Link>
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
                                    <a href="">
                                        Manufacturing
                                    </a>
                                </h4>
                            </Link>
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
                                    <a href="">
                                        Environment and agriculture
                                    </a>
                                </h4>
                            </Link>
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
                                    <a href="">
                                        Healthcare
                                    </a>
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>

            </div> */}
            <div class="row margin-top-20">
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/new_category/creative_thinking_service.png)` }}>
                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Cleaning'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Cleaning
                                    </a>
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/new_category/creative_thinking_service.png)` }}>
                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Plumbing'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Accountancy, banking and finance
                                    </a>
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/new_category/investment_data_service.png)` }}>
                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Plumbing'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Investment Counsling
                                    </a>
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/new_category/manufacturing_process_service.png)` }}>
                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Plumbing'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Manufacturing Process
                                    </a>
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/new_category/energy_service.png)` }}>
                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Plumbing'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Energy Service
                                    </a>
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                    <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                        <div class="icon category-bg-thumb-format" style={{ backgroundImage: `url(imgs/new_category/hospital_wheelchair_service.png)` }}>
                        </div>
                        <div class="category-contents">
                            <Link to="/category" state={'Plumbing'} >
                                <h4 class="category-title">
                                    <a href="">
                                        Nursing Service
                                    </a>
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
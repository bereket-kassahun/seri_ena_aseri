
import { Link } from "react-router-dom"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header"

export default function CategoryList() {
    return (
        <>
        <Header/>
            <section class="banner-area home-three-banner signup-area padding-top-70 padding-bottom-100 category-area padding-top-100 padding-bottom-100">
                <div class="container container-two">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title-two">
                                <h3 class="title">Categories</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row margin-top-20">
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/plumbing.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Plumbing'} > <h4 class="category-title"> <a > Plumbing  </a> </h4></Link>

                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/dish.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Plumbing'} >
                                        <h4 class="category-title"> <a > Electronics Installations and Repairs </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/cleaning.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Cleaning'} >
                                        <h4 class="category-title"> <a > Cleaning  </a> </h4>
                                        {/* <span class="category-para"> 5+ Service </span> */}</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/dish.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'TV Dish Installation and Repairs'} >
                                        <h4 class="category-title"> <a> TV Dish Installation and Repairs </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/maid.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Maids'} >
                                        <h4 class="category-title"> <a href=""> Maids </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/painting.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Painting'} >
                                        <h4 class="category-title"> <a href=""> Painting  </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/disinfection.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Disinfection Services'} >
                                        <h4 class="category-title"> <a href=""> Disinfection Services </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/laundary.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Laundry Services'} >
                                        <h4 class="category-title"> <a > Laundry Services </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/hairdresser.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Hairdresser'} >
                                        <h4 class="category-title"> <a > Hairdresser </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/tutoring.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Tutoring'} >
                                        <h4 class="category-title"> <a > Tutoring </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/accounting.jpeg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Accounting'} >
                                        <h4 class="category-title"> <a > Accounting </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/web.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={' Web Development'} >
                                        <h4 class="category-title"> <a > Web Development </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/graphics.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Graphics Designer'} >
                                        <h4 class="category-title"> <a > Graphics Designer </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/it_support.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'IT support technician'} >
                                        <h4 class="category-title"> <a > IT support technician </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/vet.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Veterinary nurse'} >
                                        <h4 class="category-title"> <a > Veterinary nurse </a> </h4>
                                    </Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/mechanic.jpeg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Mechanic'} >
                                        <h4 class="category-title"> <a > Mechanic </a> </h4></Link>
                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div class="icon">
                                    <img src="imgs/category/nurse.jpg" alt="AAAAA" />
                                </div>
                                <div class="category-contents">
                                    <Link to="/category" state={'Nurse'} ><h4 class="category-title"> <a > Nurse </a> </h4></Link>


                                    {/* <span class="category-para"> 5+ Service </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
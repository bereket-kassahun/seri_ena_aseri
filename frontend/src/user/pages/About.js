import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header"

const About = () => {
    return (
        <>
            <div style={{ height: "13vh", background: " #37517e" }}>

            </div>

            <section class="About-area" data-padding-top="70" data-padding-bottom="140">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 margin-top-30">
                            <div class="about-thumb-content">
                                <div class="about-shape">
                                    {/* <img src="imgs/sd1643688644.jpg" alt="" /> */}
                                </div>
                                <div class="about-thumb">
                                    <img src="imgs/sd1643688644.jpg" alt="" />
                                    <div class="about-experience">
                                        <h2 class="years-tiitle">8 Years </h2>
                                        <h4 class="experience-tiitle"> Experience </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 margin-top-30">
                            <div class="single-about">
                                <h2 class="about-title">Know About Us</h2>
                                <div class="about-contents">
                                    <p class="about-para">Welcome to SERA, a platform connecting professionals and qualified individuals
                                        with local and international users. We pride ourselves on providing a secure and user-friendly
                                        experience for both clients and professionals.</p>

                                    <div class="overview-single style-03">
                                        <ul class="overview-benefits margin-top-30">
                                            <li class="list"> Our team of experts work tirelessly to ensure that our platform is always up to date and running smoothly. </li>
                                            <li class="list"> We carefully vet all of our professionals to ensure that they have the qualifications and experience needed to provide top-quality service. </li>
                                            <li class="list"> Our goal is to make it easy for clients to find the professional they need, and for professionals to find the clients and projects they want.</li>
                                            <li class="list"> Our platform is accessible from anywhere, and it is mobile-friendly, making it easy for users to access it from any device </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="margketplace-area" data-padding-top="100" data-padding-bottom="100"
                style={{ backgroundColor: `rgb(242, 247, 255)` }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-9 col-lg-10 col-md-12">
                            <div class="section-title">
                                <h2 class="title"> Why Our <span >Marketplace? </span> </h2>
                                <span class="section-para">
                                    We are dedicated to providing a seamless experience for our users to find the right professional for their needs, and for professionals to showcase their skills and services. We understand that connecting with the right professional can be a daunting task, which is why we've made it our mission to make the process as simple and straightforward as possible, and experience the power of connecting with the right professional for your project.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row margin-top-20">

                        <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                            <div class="single-marketplace wow fadeInUp" data-wow-delay=".2s">
                                <div class="icon">
                                    <i class="las la-tools"></i>
                                </div>
                                <div class="marketplace-contents">
                                    <h5 class="common-title">Service Commitment </h5>
                                    <p class="common-para">
                                        Our dedicated customer service team is always available to assist you in finding the right professional for the service you require and ensuring a smooth experience. We also take great pride in the quality of our professionals and strive to maintain a high standard of excellence 0ur platform. Join us today and experience the power of connecting with the right professionals.
                                    </p>
                                </div>
                            </div>
                        </div>
{/* 
                        <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                            <div class="single-marketplace wow fadeInUp" data-wow-delay=".2s">
                                <div class="icon">
                                    <i class="las la-users-cog"></i>
                                </div>
                                <div class="marketplace-contents">
                                    <h5 class="common-title">Super Experience </h5>
                                    <p class="common-para">It is a long established fact that a reader will be distracted by the
                                        readable. It is a long established fact that a reader.</p>
                                </div>
                            </div>
                        </div> */}

                        <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                            <div class="single-marketplace wow fadeInUp" data-wow-delay=".2s">
                                <div class="icon">
                                    <i class="las la-shield-alt"></i>
                                </div>
                                <div class="marketplace-contents">
                                    <h5 class="common-title">User Data Secure </h5>
                                    <p class="common-para">
                                        We understand the importance of protecting our users' data. That's why we have implemented strict security measures to ensure that all information shared on our platform is kept safe and secure. Our platform is built on a secure infrastructure and uses industry-standard encryption to protect all data transmitted and stored on our servers.
                                        We comply with all applicable laws and regulations regarding the collection, use, and storage of personal data
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                            <div class="single-marketplace wow fadeInUp" data-wow-delay=".2s">
                                <div class="icon">
                                    <i class="las la-stopwatch"></i>
                                </div>
                                <div class="marketplace-contents">
                                    <h5 class="common-title">Fast Service </h5>
                                    <p class="common-para">We strive to provide our users with the fastest and most efficient service possible. Our customer service team is dedicated to always ensure that all your enquiries are answered whether you are a professional or looking for a professional with fast responses ensuring a smooth experience for all users on the platform.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                            <div class="single-marketplace wow fadeInUp" data-wow-delay=".2s">
                                <div class="icon">
                                    <i class="las la-file-invoice-dollar"></i>
                                </div>
                                <div class="marketplace-contents">
                                    <h5 class="common-title">Secure Payment </h5>
                                    <p class="common-para">
                                    We strive to instil confidence in users on the platform with our secure and reliable payment methods, at SIRA ALLE your privacy is in safe hands.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 margin-top-30 marketplace-child">
                            <div class="single-marketplace wow fadeInUp" data-wow-delay=".2s">
                                <div class="icon">
                                    <i class="las la-headset"></i>
                                </div>
                                <div class="marketplace-contents">
                                    <h5 class="common-title">Dedicated Support </h5>
                                    <p class="common-para">Our customer service team is available to assist with any questions or concerns. We value your feedback and are constantly working to improve our platform.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* <section class="category-area section-bg-1" data-padding-top="100" data-padding-bottom="100"
                style={{ backgroundColor: `rgb(255, 255, 255)` }}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-6 col-lg-7 col-md-10">
                            <div class="section-title">
                                <h2 class="title"> Browse <span > Categories </span> </h2>
                                <span class="section-para">It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout.</span>
                            </div>
                        </div>
                    </div>
                    <div class="row margin-top-50">
                        <div class="col-lg-12">
                            <div class="category-slider dot-style-one">
                                <div class="single-category-item wow fadeInUp" data-wow-delay=".2s">
                                    <div class="single-category">
                                        <div class="icon">
                                            <i class="las la-charging-station"></i>
                                        </div>
                                        <div class="category-contents">
                                            <h4 class="category-title"> <a href="service-list/category/electronics.html">
                                                Electronics </a> </h4>
                                            <span class="category-para"> 5+ Service </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-category-item wow fadeInUp" data-wow-delay=".2s">
                                    <div class="single-category">
                                        <div class="icon">
                                            <i class="las la-toilet"></i>
                                        </div>
                                        <div class="category-contents">
                                            <h4 class="category-title"> <a href="service-list/category/cleaning.html"> Cleaning
                                            </a> </h4>
                                            <span class="category-para"> 5+ Service </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-category-item wow fadeInUp" data-wow-delay=".2s">
                                    <div class="single-category">
                                        <div class="icon">
                                            <i class="las la-people-carry"></i>
                                        </div>
                                        <div class="category-contents">
                                            <h4 class="category-title"> <a href="service-list/category/home-move.html"> Home
                                                Move </a> </h4>
                                            <span class="category-para"> 2+ Service </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-category-item wow fadeInUp" data-wow-delay=".2s">
                                    <div class="single-category">
                                        <div class="icon">
                                            <i class="las la-paint-roller"></i>
                                        </div>
                                        <div class="category-contents">
                                            <h4 class="category-title"> <a href="service-list/category/painting.html"> Painting
                                            </a> </h4>
                                            <span class="category-para"> 2+ Service </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-category-item wow fadeInUp" data-wow-delay=".2s">
                                    <div class="single-category">
                                        <div class="icon">
                                            <i class="las la-hand-scissors"></i>
                                        </div>
                                        <div class="category-contents">
                                            <h4 class="category-title"> <a href="service-list/category/salon-%26-spa.html">
                                                Salon & Spa </a> </h4>
                                            <span class="category-para"> 5+ Service </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-category-item wow fadeInUp" data-wow-delay=".2s">
                                    <div class="single-category">
                                        <div class="icon">
                                            <i class="las la-closed-captioning"></i>
                                        </div>
                                        <div class="category-contents">
                                            <h4 class="category-title"> <a href="service-list/category/digital-marketing.html">
                                                Digital Marketing </a> </h4>
                                            <span class="category-para"> 5+ Service </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section class="seller-area" data-padding-top="70" data-padding-bottom="105"
                style={{ backgroundColor: `rgb(242, 247, 255)` }}>
                <div class="container">
                    <div class="row flex-column-reverse flex-lg-row align-items-center">
                        <div class="col-lg-6 margin-top-30">
                            <div class="seller-wrapper">
                                <div class="section-title text-left">
                                    <h2 class="title"> Start As <span > Seller </span> </h2>
                                    <span class="section-para">It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout. It is a long established fact
                                        that a reader will be distracted by the readable content of a page when looking at its
                                        layout.</span>
                                </div>
                                <div class="seller-contents">
                                    <ul class="seller-list">
                                        <li class="list">It is a long established fact that a reader will be distracted by the
                                            readable.</li>
                                        <li class="list">It is a long established fact that a reader will be distracted by the
                                            readable.</li>
                                        <li class="list">It is a long established fact that a reader will be distracted by the
                                            readable.</li>

                                    </ul>
                                    <div class="btn-wrapper">
                                        <a class="cmn-btn btn-bg-1" >
                                            Become Seller </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 margin-top-30">
                            <div class="seller-thumbs wow slideInRight" data-wow-delay=".2s">
                                <img src="assets/uploads/media-uploader/seller21641902661.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="clientlogo-area" data-padding-top="100" data-padding-bottom="100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="clientlogo-wrapper">
                                <div class="clientlogo-slider dot-style-one dot-02">
                                    <div class="clientlogo-item">
                                        <div class="single-clientlogo">
                                            <div class="thumb">
                                                <a target="_blank" href="Test1.html" data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom" title="Test1"> <img
                                                        src="assets/uploads/media-uploader/cl11641478287.png" alt="" /> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clientlogo-item">
                                        <div class="single-clientlogo">
                                            <div class="thumb">
                                                <a target="_blank" href="Test2.html" data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom" title="Test2"> <img
                                                        src="assets/uploads/media-uploader/cl21641480573.png" alt="" /> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clientlogo-item">
                                        <div class="single-clientlogo">
                                            <div class="thumb">
                                                <a target="_blank" href="Test3.html" data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom" title="Test3"> <img
                                                        src="assets/uploads/media-uploader/cl31641615538.png" alt="" /> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clientlogo-item">
                                        <div class="single-clientlogo">
                                            <div class="thumb">
                                                <a target="_blank" href="Test4.html" data-bs-toggle="tooltip"
                                                    data-bs-placement="bottom" title="Test4"> <img
                                                        src="assets/uploads/media-uploader/cl41641615570.png" alt="" /> </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clientlogo-item">
                                        <div class="single-clientlogo">
                                            <div class="thumb">
                                                <a target="_blank" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom"
                                                    title="Test5"> <img src="assets/uploads/media-uploader/cl21641480573.png"
                                                        alt="" /> </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default About
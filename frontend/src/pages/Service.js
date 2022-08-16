import { useEffect, useState } from "react"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header"
import { ServiceHeader } from "../components/service/ServiceHeader"
import { useLocation } from "react-router-dom"
import { professional_services } from "../api/professional_services"
import { ServiceBody } from "../components/service/ServiceBody"

const Service = () => {

    const location = useLocation()

    let state = location.state ? location.state : ""
    const currentServiceId = state.currentServiceId
    const professionalId = state.professionalId
    const [professional, setProfessional] = useState({})
    const [currentService, setCurrentService] = useState({})


    const [activeElement, setActiveElement] = useState(1)

    useEffect(() => {
        professional_services(professionalId, (data) => {
            if (data.length > 0) {
                setProfessional(data[0])
            }
        })
    }, [currentServiceId])

    useEffect(() => {
        if (professional.service_data != null && professional.service_data.length > 0) {
            professional.service_data.forEach((service) => {
                if (service._id == currentServiceId) {
                    setCurrentService(service)
                }
            })
        }

    }, [professional])


    const otherServices = () => {
        let ret = []
        if (professional.service_data != null) {
            if (professional.service_data.length > 1) {
                professional.service_data.forEach(data => {
                    if (data._id != currentServiceId) {
                        ret.push(data)
                    }
                })
            }
        }
        return (<ServiceBody data={ret} />)
    }

    return (
        <>
            <Header />
            <ServiceHeader title={currentService.title} />
            <section class="service-details-area padding-top-70 padding-bottom-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 margin-top-30 order-2 order-lg-1">
                            <div class="service-details-wrapper">
                                <div class="service-details-inner">
                                    <div class="details-thumb">
                                        <div class="main-img-box ">
                                            <div class="service-details-slider">

                                                <div class="single-slider">
                                                    <div class="gallery-images single-featured">
                                                        <li>
                                                            <img src={"imgs/"+currentService.img} alt="" />
                                                        </li>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <ul class="author-tag style-02 mt-4">
                                        <li class="tag-list">
                                            <a href="../test_seller.html">
                                                <div class="authors">
                                                    <div class="thumb">
                                                        <img src="imgs/sample_category.jpg" alt="" />
                                                        <span class="notification-dot"></span>
                                                    </div>
                                                    <span class="author-title"> {professional.firstName} {professional.lastName} </span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>

                                    <ul class="details-tabs tabs margin-top-55">
                                        <li data-tab="tab1" className={"list " + (activeElement == 1 ? 'active' : '')} onClick={() => {
                                            setActiveElement(1)
                                        }}>
                                            Overview
                                        </li>
                                        <li className={"list " + (activeElement == 2 ? 'active' : '')} data-tab="tab2" onClick={() => {
                                            setActiveElement(2)
                                        }}>
                                            About Seller
                                        </li>
                                    </ul>
                                    <div className={"tab-content another-tab-content " + (activeElement == 1 ? 'active' : '')} id="tab1">
                                        <div class="details-content-tab padding-top-10">
                                            <p class="details-tap-para"> {currentService.overview} </p>
                                        </div>
                                    </div>
                                    <div className={"tab-content another-tab-content " + (activeElement == 2 ? 'active' : '')} id="tab2">
                                        <div class="details-content-tab padding-top-10">
                                            <div class="about-seller-tab margin-top-30">
                                                <div class="about-seller-flex-content">
                                                    <div class="about-seller-thumb">
                                                        <img src="imgs/sample_category.jpg" alt="" />
                                                    </div>
                                                    <div class="about-seller-content">
                                                        <h5 class="title"> <a href="../test_seller.html"> {professional.firstName} {professional.lastName}</a> </h5>
                                                    </div>
                                                </div>
                                                <div class="seller-details-box margin-top-40">
                                                    <ul class="seller-box-list">
                                                        <li class="box-list"> From
                                                            <strong>
                                                                <h6>
                                                                    {currentService.location}
                                                                </h6>
                                                            </strong>
                                                        </li>
                                                        <li class="box-list"> Verified
                                                            <strong>
                                                                {
                                                                    currentService.professionalPaid && (
                                                                        <div class="award-icons style-02">
                                                                            <i class="las  la-check"></i>
                                                                        </div>)
                                                                }
                                                                {
                                                                    !currentService.professionalPaid && (
                                                                        <div class="award-icons style-02">
                                                                            <i class="las  la la-close"></i>
                                                                        </div>)
                                                                }
                                                            </strong>
                                                        </li>
                                                    </ul>
                                                    <p class="seller-details-para">{currentService.about_seller} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="another-details-wrapper padding-top-100">
                                <div class="section-title-two">
                                    <h3 class="title">Other Services of this Seller</h3>
                                    {/* <a href="seller/all-services/1.html" class="section-btn">Explore All</a> */}
                                </div>
                                <div class="row padding-top-20">
                                    {
                                        otherServices()
                                    }
                                    {/* <div class="col-md-6 margin-top-30">
                                        <div class="single-service no-margin">
                                            <a href="cleaning-your-old-house-from-our-expert-cleaner-team-at-low-cost.html" class="service-thumb service-bg-thumb-format" style={{ backgroundImage: ` url(../assets/uploads/media-uploader/young-beautiful-cleaner-woman-holding-bucket-with-products-pointing-camera-against-blue-backdrop-591644647980.png)` }}>

                                                <div class="country_city_location">
                                                    <span class="single_location"> <i class="las la-map-marker-alt"></i> Dhaka, Bangladesh </span>
                                                </div>
                                            </a>
                                            <div class="services-contents">
                                                <ul class="author-tag">
                                                    <li class="tag-list">
                                                        <a href="../test_seller.html">
                                                            <div class="authors">
                                                                <div class="thumb">
                                                                    <img src="imgs/sample_category.jpg" alt="" />
                                                                    <span class="notification-dot"></span>
                                                                </div>
                                                                <span class="author-title"> Nazmul Hoque  </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h5 class="common-title"> <a href="cleaning-your-old-house-from-our-expert-cleaner-team-at-low-cost.html">Cleaning Your Old House From Our Expert Cleaner Team at Low Cost</a> </h5>
                                                <p class="common-para"> It is a long established fact that a reader will be distracted by the readable content of a page whe... </p>
                                                <div class="service-price">
                                                    <span class="starting">Starting at</span>
                                                    <span class="prices"> $35 </span>
                                                </div>
                                                <div class="btn-wrapper d-flex flex-wrap">
                                                    <a href="book-now/cleaning-your-old-house-from-our-expert-cleaner-team-at-low-cost.html" class="cmn-btn btn-small btn-bg-1"> Book Now </a>
                                                    <a href="cleaning-your-old-house-from-our-expert-cleaner-team-at-low-cost.html" class="cmn-btn btn-small btn-outline-1 ml-auto"> View Details </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 margin-top-30">
                                        <div class="single-service no-margin">
                                            <a href="get-beard-shaving-service-at-low-price.html" class="service-thumb service-bg-thumb-format" style={{ backgroundImage: `url(imgs/sample_category.jpg` }}>

                                                <div class="country_city_location">
                                                    <span class="single_location"> <i class="las la-map-marker-alt"></i> New York, United States (USA) </span>
                                                </div>
                                            </a>
                                            <div class="services-contents">
                                                <ul class="author-tag">
                                                    <li class="tag-list">
                                                        <a href="../test_seller.html">
                                                            <div class="authors">
                                                                <div class="thumb">
                                                                    <img src="imgs/sample_category.jpg" alt="" />
                                                                    <span class="notification-dot"></span>
                                                                </div>
                                                                <span class="author-title"> Nazmul Hoque  </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h5 class="common-title"> <a href="get-beard-shaving-service-at-low-price.html">Get Beard Shaving Service At Low Price</a> </h5>
                                                <p class="common-para"> It is a long established fact that a reader will be distracted by the readable content of a page whe... </p>
                                                <div class="service-price">
                                                    <span class="starting">Starting at</span>
                                                    <span class="prices"> $10 </span>
                                                </div>
                                                <div class="btn-wrapper d-flex flex-wrap">
                                                    <a href="book-now/get-beard-shaving-service-at-low-price.html" class="cmn-btn btn-small btn-bg-1"> Book Now </a>
                                                    <a href="get-beard-shaving-service-at-low-price.html" class="cmn-btn btn-small btn-outline-1 ml-auto"> View Details </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 margin-top-30  order-1 order-lg-2">
                            <div class="service-details-package">
                                <div class="single-packages">
                                    <ul class="package-price">
                                        <li> Package </li>
                                        <li> {currentService.price} Birr </li>
                                    </ul>
                                    <div class="details-available-price margin-top-20">
                                        <span class="summery-title">
                                            <ul class='onlilne-special-list'>
                                                <li><i class="las la-clock"></i> Delivery Days: {currentService.deliveryDay}</li>
                                            </ul>
                                        </span>
                                    </div>
                                    <div class="btn-wrapper text-center margin-top-30">
                                        <a class="cmn-btn btn-bg-1 d-block" href="book-now/are-you-looking-some-who-able-to-rich-you-business.html"> Call Now </a>
                                    </div>
                                </div>
                                <div class="order-pagkages">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Service
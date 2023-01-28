
import '../../../style/detail-preview-modal.css'
import { useEffect, useState } from "react"

import { ServiceHeader } from "../../../user/components/service/ServiceHeader"
export const DetailPreview = ({ professional, currentService }) => {

    // const [professional, setProfessional] = useState({})
    // const [currentService, setCurrentService] = useState({})


    const [activeElement, setActiveElement] = useState(1)

    // useEffect(() => {
    //     professional_services(professionalId, (data) => {
    //         if (data.length > 0) {
    //             setProfessional(data[0])
    //         }
    //     })
    // }, [currentServiceId])

    // useEffect(() => {
    //     if (professional.service_data != null && professional.service_data.length > 0) {
    //         professional.service_data.forEach((service) => {
    //             if (service._id == currentServiceId) {
    //                 setCurrentService(service)
    //             }
    //         })
    //     }

    // }, [professional])


    // const otherServices = () => {
    //     let ret = []
    //     if (professional.service_data != null) {
    //         if (professional.service_data.length > 1) {
    //             professional.service_data.forEach(data => {
    //                 if (data._id != currentServiceId) {
    //                     ret.push(data)
    //                 }
    //             })
    //         }
    //     }
    //     return (<ServiceBody data={ret} />)
    // }

    return (
        <>
            <div class="modal modal-fullscreen" id="modal-fullscreen-xl" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        {/* <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div> */}
                        <div class="modal-body">
                            <div class="banner-inner-area section-bg-2 " style={{ paddingTop: "50px" }}>
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="banner-inner-contents">
                                                <h2 class="banner-inner-title"> {currentService.title}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                                                            <img src={"" + currentService.img} alt="" />
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
                                                                        <img src={currentService.professionalImage != "" ? currentService.professionalImage : "imgs/seller-s21644057790.jpg"} alt="" />
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
                                                    <div className={"tab-content another-tab-content " + (activeElement == 1 ? 'active' : '')} id="tab1" style={{ marginTop: "20px" }}>
                                                        <div class="details-content-tab padding-top-10 " dangerouslySetInnerHTML={{ __html: currentService.detail }} className="custom-editor">

                                                        </div>
                                                    </div>
                                                    <div className={"tab-content another-tab-content " + (activeElement == 2 ? 'active' : '')} id="tab2">
                                                        <div class="details-content-tab padding-top-10">
                                                            <div class="about-seller-tab margin-top-30">
                                                                <div class="about-seller-flex-content">
                                                                    <div class="about-seller-thumb">
                                                                        <img src={currentService.professionalImage != "" ? currentService.professionalImage : "imgs/seller-s21644057790.jpg"} alt="" />
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
                                                                                    {currentService.city}, lat:{currentService.latitude}, lon:{currentService.longitude}
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
                                                                    <p class="seller-details-para">{currentService.bio} </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 margin-top-30  order-1 order-lg-2">
                                            <div class="service-details-package">
                                                <div class="single-packages">
                                                    <ul class="package-price">
                                                        <li> Package </li>
                                                        {
                                                            currentService.paymentType == 3 ?
                                                                (
                                                                    <li class="card-title">
                                                                        Negotiable Price
                                                                    </li>
                                                                ) :
                                                                (
                                                                    <li>
                                                                        {currentService.paymentType == 2 && "Starting From"} {currentService.price} Birr{currentService.paymentType == 1 && "/Hr"}
                                                                    </li>
                                                                )
                                                        }
                                                    </ul>
                                                    <div class="details-available-price margin-top-20">
                                                        <span class="summery-title">
                                                            <ul class='onlilne-special-list'>
                                                                <li><i class="las la-clock"></i> Delivery Days: {currentService.deliveryDay}</li>
                                                            </ul>
                                                        </span>

                                                        <ul class="available-list">
                                                            <li> Category: {currentService.category}</li>
                                                        </ul>
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
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


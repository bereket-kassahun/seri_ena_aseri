
import '../../../style/detail-preview-modal.css'

import '../../../style/rating.css'
import { useEffect, useState } from "react"

export const PremiumServiceCardPreview = ({ data }) => {


    const [ratingView, setRatingView] = useState([])

    let body = ""
    if (data.overview.length < 60) {
        body = data.overview
    } else {
        body = data.overview.substring(0, 59) + '...'
    }




    let title = ""

    if (data.title.length < 16) {
        title = data.title
    } else {
        title = data.title.substring(0, 15) + '...'
    }



    useEffect(() => {
        let rating = data.rating ? data.rating : 0
        let tmp = []


        for (var i = 0; i < rating; i++) {
            tmp.push(
                <span class="fa fa-star checked"></span>
            )
        }

        for (var j = 5 - rating; j > 0; j--) {
            tmp.push(
                <span class="fa fa-star "></span>
            )
        }

        setRatingView([...tmp])
    }, [])


    const [isHover, setIsHover] = useState(false)


    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const cardStyle = {
        container: {
            webkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",
            boxSizing: "inherit",
            color: "inherit",
            borderRadius: "0.5rem",
            webkitBoxShadow: "0.4rem 0.7rem 2.8rem 0 rgba(68,77,91,0.14)",
            textDecoration: "none",
            transform: isHover ? "scale(1.05)" : "scale(1.00)",
            paddingRight: "0",
            paddingLeft: "0"
        }
    }

    return (
        <>
            <div class="modal " id="modal-preview-service" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h5 class="modal-title">{title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div class="modal-body" style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ paddingRight: "2px", paddingLeft: "2px" }} className="col-6 " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <div style={cardStyle.container} class=" card single-service service-two style-03 " >
                                    <a
                                        class="service-thumb service-bg-thumb-format"
                                        style={{ backgroundImage: 'url(' + data.img + ')', height: "150px" }}>
                                        <div class="award-icons style-02">
                                            <i class="las  la-check"></i>
                                        </div>
                                        <div class="country_city_location color-three">
                                            <span class="single_location"> <i class="las la-map-marker-alt"></i>{data.city} {data.specificAdress}</span>
                                        </div>
                                    </a>
                                    <div class="card-body" style={{ padding: "3px" }}>
                                        <ul class="author-tag" style={{ margin: "3px" }}>
                                            <li class="tag-list">
                                                <a >
                                                    <div class="authors">
                                                        <div class="thumb">
                                                            <img src={data.professionalImage != "" ? data.professionalImage : "imgs/seller-s21644057790.jpg"} alt="" />
                                                        </div>
                                                        <p class="font-weight-bold" style={{ color: "black" }}>{data.professionalFirstName} {data.professionalLastName}</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <h5 class="font-weight-bold" style={{ color: "black" }}>{title}</h5>
                                        <div style={{ height: "70px" }}>
                                            <p class="font-weight-normal" style={{ color: "black" }}>{body}</p>
                                        </div>
                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                        <div class="service-price-wrapper" style={{ textAlign: "center" }}>
                                            <div class="d-flex" >
                                                <div class="rating" style={{ display: "inline", flexGrow: "2" }}>
                                                    {
                                                        (
                                                            <div class="rating" style={{ display: "inline" }}>
                                                                {ratingView}
                                                            </div>
                                                        )
                                                    }
                                                    <div>
                                                        <p>{data.numberOfRating}</p>
                                                    </div>
                                                </div>
                                                <div style={{ flexGrow: "1" }}>
                                                    {
                                                        data.paymentType == 3 ?
                                                            (
                                                                <h6 class="card-title">
                                                                    Negotiable Price
                                                                </h6>
                                                            ) :
                                                            (
                                                                <h6 class="card-title">
                                                                    {data.paymentType == 2 && "Starting From"} {data.price} Birr{data.paymentType == 1 && "/Hr"}
                                                                </h6>
                                                            )
                                                    }
                                                </div>
                                            </div>
                                            <div class="btn-wrapper">
                                                <a href="tel:+6199942413" class="cmn-btn btn-bg-3" style={{ background: ``, padding: "5px 10px 5px 10px" }}>
                                                    Call Now <i class="fas fa-phone ms-2"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


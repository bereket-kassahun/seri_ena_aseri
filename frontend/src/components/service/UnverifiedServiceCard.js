import { Link } from "react-router-dom"

export const UnverifiedServiceCard = ({ data }) => {
    let body = ""
    if (data.overview.length < 70) {
        body = data.overview
    } else {
        body = data.overview.trim(0, 70) + '...'
    }
    return (
        <div class="col-md-6" >
            <div class="single-service service-two style-03 service-padding section-bg-2 wow fadeInUp"
                data-wow-delay=".2s">
                <div class="services-contents content-padding-reverse">
                    <ul class="author-tag">
                        <li class="tag-list">
                            <a href="test_seller.html">
                                <div class="authors">
                                    <div class="thumb">
                                        <img src="imgs/seller-s21644057790.jpg"
                                            alt="" />
                                        <span class="notification-dot"></span>
                                    </div>
                                    <span class="author-title">{data.username}</span>
                                </div>
                            </a>
                        </li>
                        <li class="tag-list">

                        </li>
                    </ul>
                    <Link to="/service" state={{professionalId: data.professionalId, currentServiceId:data._id}} >
                        <h5 class="common-title"> <a
                            href="service-list/painting-%26-renovation-service-from-us-at-affordable-price.html">
                            {data.title} </a> </h5>
                        <p class="common-para"> {body} </p>
                    </Link>
                    <div class="service-price-wrapper">
                        <div class="service-price style-02">
                            <span class="prices style-02"> {data.price} Birr</span>
                        </div>
                        <div class="btn-wrapper">
                            <a href="service-list/book-now/painting-%26-renovation-service-from-us-at-affordable-price.html"
                                class="cmn-btn btn-bg-3" style={{ background: `` }}> Call Now </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
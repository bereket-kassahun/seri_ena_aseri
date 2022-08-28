import '../style/rating.css'

export const MediumSellerCard = ({ data }) => {

    let body = ""
    if (data.overview.length < 120) {
        body = data.overview
    } else {
        body = data.overview.substring(0, 69) + '...'
    }

    return (
        <>
            <div class="col-xl-2 col-lg-3 col-sm-4 col-6 " style={{ padding: "2px" }}>
                <div class=" card single-service service-two style-03  section-bg-2 wow fadeInUp" data-wow-delay=".2s" style={{ margin: "5px" }}>
                    <a
                        class="service-thumb service-bg-thumb-format"
                        style={{ backgroundImage: 'url( imgs/1.png )', height: "150px" }}>
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
                                            <img src="imgs/seller-s21644057790.jpg" alt="" />
                                        </div>
                                        <p class="font-weight-bold" style={{ color: "black" }}>{data.professionalFirstName} {data.professionalLastName}</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <h5 class="font-weight-bold" style={{ color: "black" }}>{data.title}</h5>

                        <p class="font-weight-normal" style={{ color: "black" }}>{body}</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <div class="service-price-wrapper" style={{ textAlign: "center" }}>
                            <div class="service-price style-02" style={{ textAlign: "right" }}>
                                <div class="rating" style={{ display: "inline" }}>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star"></span>
                                    <span class="fa fa-star"></span>

                                </div>
                                <h6 class="card-title"> {data.price} Birr</h6>
                            </div>
                            <div class="btn-wrapper">
                                <a class="cmn-btn btn-bg-3" style={{ background: ``, padding: "5px 10px 5px 10px" }}>
                                    Call Now <i class="fas fa-phone ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
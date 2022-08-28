
import { Link } from "react-router-dom"

export const PaidCard = ({ data }) => {
    let body = ""
    if (data.overview.length < 120) {
        body = data.overview
    } else {
        body = data.overview.substring(0, 69) + '...'
    }
    return (
        <div class=" card single-service service-two style-03  section-bg-2 wow fadeInUp" data-wow-delay=".2s" style={{marginTop: "10px"}}>
            <Link to="/service" state={{ professionalId: data.professionalId, currentServiceId: data._id }} >
                <a
                    class="service-thumb service-bg-thumb-format"
                    style={{ backgroundImage: 'url('+ data.img +')' }}>
                    <div class="award-icons style-02">
                        <i class="las  la-check"></i>
                    </div>
                    <div class="country_city_location color-three">
                        <span class="single_location"> <i class="las la-map-marker-alt"></i>{data.city} {data.specificAdress}
                        </span>
                    </div>
                </a>
            </Link>
            <div class="card-body">
                <ul class="author-tag">
                    <li class="tag-list">
                        <a >
                            <div class="authors">
                                <div class="thumb">
                                    <img src="imgs/seller-s21644057790.jpg" alt="" />
                                </div>
                                <span class="author-title">{data.professionalFirstName} {data.professionalLastName} </span>
                            </div>
                        </a>
                    </li>
                </ul>
                <h5 class="card-title">{data.title}</h5>
                <p class="card-text"> {body} Birr</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                <div class="service-price-wrapper">
                    <div class="service-price style-02" style={{ textAlign: "right" }}>
                        <h6 class="card-title"> {data.price} Birr</h6>
                    </div>
                    <div class="btn-wrapper">
                        <a class="cmn-btn btn-bg-3" style={{ background: `` }}> Call Now </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
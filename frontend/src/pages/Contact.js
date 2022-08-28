import '../style/rating.css'
import { Link } from 'react-router-dom'
export default function Contact() {
    return (
        <>
            <div className='row' style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <div class="col-xl-2 col-lg-3 col-sm-4 col-6 " style={{ padding: "2px" }}>
                    <div class=" card single-service service-two style-03  section-bg-2 wow fadeInUp" data-wow-delay=".2s" style={{ margin: "5px" }}>
                        <Link to="/service"  >
                            <a
                                class="service-thumb service-bg-thumb-format"
                                style={{ backgroundImage: 'url( imgs/1.png )', height: "150px" }}>
                                <div class="award-icons style-02">
                                    <i class="las  la-check"></i>
                                </div>
                                <div class="country_city_location color-three">
                                    <span class="single_location"> <i class="las la-map-marker-alt"></i>Addis Ababa
                                    </span>
                                </div>
                            </a>
                        </Link>
                        <div class="card-body" style={{ padding: "3px" }}>
                            <ul class="author-tag" style={{ margin: "3px" }}>
                                <li class="tag-list">
                                    <a >
                                        <div class="authors">
                                            <div class="thumb">
                                                <img src="imgs/seller-s21644057790.jpg" alt="" />
                                            </div>
                                            <p class="font-weight-bold" style={{ color: "black" }}>Kate Hunington</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <h5 class="font-weight-bold" style={{ color: "black" }}>Cleaning</h5>

                            <p class="font-weight-normal" style={{ color: "black" }}>This is normal text that... </p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            <div class="service-price-wrapper" style={{ textAlign: "center" }}>
                                <div class="d-flex" >
                                    <div class="rating" style={{ display: "inline", flexGrow: "2" }}>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star checked"></span>
                                        <span class="fa fa-star"></span>
                                        <span class="fa fa-star"></span>

                                    </div>
                                    <div style={{flexGrow: "1"}}>
                                        <h6 class="card-title"> 200 Birr</h6>
                                    </div>
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
            </div>

        </>
    )
}
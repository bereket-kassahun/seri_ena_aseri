
import SearchBar from './SearchBar'
// import locations from './sample_locations'
import { useState, useEffect } from 'react'
import { getLocations } from '../../api/LocationService'
const Banner = () => {
    const [locations, setLocations] = useState([])

    // useEffect(() => {
    //     // resp => {

    //     // }
    //     getLocations().then(resp => {

    //         let tmp = []

    //         resp.length > 0 && resp.map(item => {
    //             tmp.push(item.substring(0,10))
    //             // console.log(typeof(item.title))
    //         })
    //         setLocations((locations) => [...tmp])
    //         console.log("updated", tmp)
    //     })
    // },[])


    return (
        <div className="banner-area gradient-bg-1" style={{ padding: "50px 0px 30px 0px" }}>
            <div className="container container-two">
                <div className="row ">

                    <div className="col-xl-5">
                        <div id="carouselExample1" class="carousel slide z-depth-1-half" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="gallery-images single-featured d-block w-100">
                                        <div className="banner-right-contents style-02">
                                            <div className="banner-right-thumb wow " data-wow-delay=".3s">
                                                <img src="imgs/programmer.jpg" alt="" />
                                                <div className="banner-dot-shape">
                                                    <img src="imgs/dot-square1641971791.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="banner-cleaning-service">
                                                <div class="icon">
                                                    <i class="las la-laptop-code"></i>
                                                </div>
                                                <div className="icon-contents">
                                                    <span className="thumb-cleaning-title"> <a href="/"> Programming Service </a> </span>
                                                    <ul className="review-cleaning">
                                                        <li> <i className="las la-star"></i> </li>
                                                        <li> <i className="las la-star"></i> </li>
                                                        <li> <i className="las la-star"></i> </li>
                                                        <li> <i className="las la-star"></i> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="gallery-images single-featured d-block w-100">
                                        <div className="banner-right-contents style-02">
                                            <div className="banner-right-thumb wow " data-wow-delay=".3s">
                                                <img src="imgs/seller_sample.jpg" alt="" />
                                                <div className="banner-dot-shape">
                                                    <img src="imgs/dot-square1641971791.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="banner-cleaning-service">
                                                <div className="icon">
                                                    <i className="las la-broom"></i>
                                                </div>
                                                <div className="icon-contents">
                                                    <span className="thumb-cleaning-title"> <a href="/"> Clening Service </a> </span>
                                                    <ul className="review-cleaning">
                                                        <li> <i className="las la-star"></i> </li>
                                                        <li> <i className="las la-star"></i> </li>
                                                        <li> <i className="las la-star"></i> </li>
                                                        <li> <i className="las la-star"></i> </li>
                                                        <li> <i className="las la-star"></i> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExample1" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExample1" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>

                    </div>
                    <div className="col-xl-7">
                        <div className="banner-contents style-03">
                            <h1 className="banner-title">One-stop Solution for your <span className="color-three"> Services </span>
                            </h1>
                            <span className="title-top">Order any service, anytime from anywhere</span>
                            <SearchBar locations={locations} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
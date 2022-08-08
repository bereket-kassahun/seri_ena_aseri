
import SearchBar from './SearchBar'
// import locations from './sample_locations'
import {useState, useEffect} from 'react'
import {getLocations} from '../../api/LocationService'

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
        <div className="banner-area home-three-banner gradient-bg-1">
            <div className="container container-two">
                <div className="row align-items-center">
                    <div className="col-xl-5">
                        <div className="banner-right-contents style-02">
                            <div className="banner-right-thumb wow slideInLeft" data-wow-delay=".3s">
                                <img src="imgs/seller.jpg" alt="" />
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
                            <div className="banner-client">
                                <div className="smile-contents-all">
                                    <div className="thumb-smile">
                                        <img src="assets/uploads/media-uploader/banner-smile1641971297.png" alt="" />
                                    </div>
                                    <div className="smile-content">
                                        <span className="smile-title">1</span>
                                        <span className="smile-para">Happy Clients </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="banner-contents style-03">
                            <h1 className="banner-title">One-stop Solution for your <span className="color-three"> Services </span>
                            </h1>
                            <span className="title-top">Order any service, anytime from anywhere</span>
                            <SearchBar locations={locations}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
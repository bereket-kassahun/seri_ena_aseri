
import SearchBar from './SearchBar'
// import locations from './sample_locations'
import { useState, useEffect, useContext } from 'react'
import {ThemeContext} from '../../context/theme-context'
import { getLocations } from '../../api/LocationService'

const displayText =  {
    english: [
        "One-stop Solution for your  Services ",
        "Order any service, anytime from anywhere"
    ],
    amharic: [
        "ለእርስዎ አገልግሎቶች አንድ ጊዜ የሚቆም መፍትሔ",
        "ማንኛውንም አገልግሎት በማንኛውም ጊዜ ከየትኛውም ቦታ ይዘዙ"
    ],
}

const Banner = () => {
    
    const { currentTheme, updateLanguage } = useContext(ThemeContext);
    const [currentText, setCurrentText] = useState(displayText.english)
    
    const [locations, setLocations] = useState([])

    // useEffect(() => {
    //     if(currentTheme.language == "amharic"){
    //         setCurrentText(displayText.amharic)
    //     }else{
    //         setCurrentText(displayText.english)
    //     }
    // }, currentTheme)
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

    // style={{ backgroundColor: "#3399ff" }}
    return (
        <div className="banner-area home-three-banner " style={{backgroundImage: "url(imgs/home_banner_background.svg)", padding: "110px 0px 120px 0px"}} >
            <div className="container container-two">
                <div className="row ">

                    <div className="col-xl-5">
                        <div id="carouselExample1" class="carousel slide z-depth-1-half" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="imgs/intro_1.png" alt="" />
                                </div>
                                <div class="carousel-item">
                                    <img src="imgs/intro_2.png" alt="" />
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
                            <h1 className="banner-title" style={{color: "white"}}>{currentTheme.language == "amharic" ? displayText.amharic[0] : displayText.english[0]}</h1>
                            <span className="title-top" style={{color: "white"}}>{currentTheme.language == "amharic" ? displayText.amharic[1] : displayText.english[1]}</span>
                            <SearchBar locations={locations} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
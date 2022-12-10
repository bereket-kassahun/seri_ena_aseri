
import SearchBar from './SearchBar'
// import locations from './sample_locations'
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'
import { getLocations } from '../../api/LocationService'

const displayText = {
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
        <div className="banner-area home-three-banner " style={{ backgroundImage: "url(imgs/home_banner_background.svg)", padding: "110px 0px 120px 0px" }} >
            <div className="container container-two">
                <div className="row ">

                    <div className="col-xl-5">
                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="3000">
                                    <img src="imgs/new_category/investment_data_service.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item" data-bs-interval="3000">
                                    <img src="imgs/new_category/creative_thinking_service.png" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>



                    <div className="col-xl-7">
                        <div className="banner-contents style-03">
                            <h1 className="banner-title" style={{ color: "white" }}>{currentTheme.language == "amharic" ? displayText.amharic[0] : displayText.english[0]}</h1>
                            <span className="title-top" style={{ color: "white" }}>{currentTheme.language == "amharic" ? displayText.amharic[1] : displayText.english[1]}</span>
                            <SearchBar locations={locations} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
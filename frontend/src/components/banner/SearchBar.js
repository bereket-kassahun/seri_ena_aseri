
import { useState, useEffect } from 'react'
import { getLocations } from '../../api/LocationService'
import RecommendationContainer from './RecommendationContainer'
const SearchBar = () => {

    const [location, setLocation] = useState(["hey", "no"])
    const [searchResult, setSearchResult] = useState([])

    // useEffect(() => {
    //     // resp => {

    //     // }
    //     getLocations().then(resp => {

    //         let tmp = []
    //         let count = 9
    //         resp.length > 0 && resp.map(item => {
    //             if (count > 0)
    //                 tmp.push(item)
    //             count--
    //             // console.log(typeof(item.title))
    //         })
    //         setLocations((locations) => [...tmp])
    //         console.log("updated", tmp)
    //     })
    // }, [])

    const recommendation = async (evn) =>{
        let search_word = evn.target.value
        await new Promise(resolve => setTimeout(resolve, 1000))
        const result =  [
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
            {
                url: "/",
                img_url: "",
                body: "This is awesome",
                price: "40$"
            },
        ]
        setSearchResult([...result])
    }
    return (
        <div className="banner-bottom-content">
            <form action="https://elouzeir.sprintstudio.net/home-search/single-page"
                className="banner-search-form">
                <div className="single-input">
                    <input className="form--control" name="home_search" id="home_search" type="text"
                        placeholder="What are you look for" autoComplete="off" 
                        onKeyUp={recommendation}/>
                    <div className="icon-search">
                        <i className="las la-search"></i>
                    </div>
                    <button type="submit"> <i className="las la-search"></i> </button>
                </div>
            </form>

            <span id="all_search_result">
                <RecommendationContainer searchResult={searchResult}/>
            </span>

            <div className="banner-keywords">
                <span className="keyword-title"> Popular: </span>
                <ul className="keyword-tag">
                    <li><a href="service-list/category/painting.html"> Painting </a></li>
                    <li><a href="service-list/category/salon-%26-spa.html"> Salon And Spa </a></li>
                    <li><a href="service-list/category/cleaning.html"> Cleaning </a></li>
                    <li><a href="service-list/category/electronics.html"> Electronics </a></li>
                    <li><a href="service-list/category/home-move.html"> Home Move </a></li>
                    {
                        location.map((location, index) => (
                            <li><a href="service-list/category/home-move.html">{location} </a></li>
                        ))
                    }
                </ul>
            </div>
           
            <button onClick={event => {
                setLocation(location => [
                    ...location,
                    <option>Addis</option>

                ])

            }}>
                LOCATIONS
            </button>
        </div>
    )
}

export default SearchBar
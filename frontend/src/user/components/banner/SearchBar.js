
import { useState, useEffect } from 'react'
import RecommendationContainer from './RecommendationContainer'

import { search } from '../../api/search'
import { recommend } from '../../api/recommend'
import { Link } from 'react-router-dom'
const SearchBar = () => {

    const [searchResult, setSearchResult] = useState([])
    const [searchWord, setSearchWord] = useState("")
    const [inFocus, setInFocus] = useState(false)
    const [dropdownInFocus, setDropdownInFocus] = useState(false)



    const recommendation = async (evn) => {
        let search_word = evn.target.value
        setSearchWord(search_word)
        if (search_word == "") {
            setSearchResult([])
            return
        }

        console.log("recommendation")
        recommend(search_word, (data) => {
            const result = []
            data.map((value, index) => {
                result.push(value.title)
            })
            console.log(search_word)
            console.log(result)
            setSearchResult([...result])
        })
    }

    return (
        <>
            <section id="hero" class="d-flex align-items-center " style={{ overflow: "visible" }} >
                <div class="container " >
                    <div class="row" >
                        <div class="col-lg-6  order-1 order-lg-1  hero-img" data-aos="zoom-in" data-aos-delay="200">
                            <img src="imgs/new_category/investment_data_service.png" class="img-fluid animated" alt="" />
                        </div>
                        <div class="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-2" style={{ position: "relative" }} data-aos="fade-up" data-aos-delay="200">
                            <h1>One-stop Solution for your Services</h1>
                            <h2 >Order any service, anytime from anywhere</h2>
                            <div class="input-group rounded">
                                <input type="search" class="form-control" aria-label="Search" aria-describedby="search-addon" placeholder="What are you looking for" autoComplete="off"
                                    onKeyUp={recommendation}
                                    onFocus={(evnt) => { setInFocus(true); setDropdownInFocus(true) }}
                                    onBlur={(evnt) => { setInFocus(false) }}
                                />
                                <span class="input-group-text border-0" style={{ cursor: "pointer" }} id="search-addon">
                                    <Link to="/search" state={searchWord} >
                                        <i class="fas fa-search" ></i>
                                    </Link>
                                </span>

                            </div>
                            <div class="dropdown">
                                <ul onMouseEnter={(evnt) => {setDropdownInFocus(true)}} onMouseLeave={(evnt) => {setDropdownInFocus(false)}} className={"dropdown-menu " + ((searchResult.length != 0 && inFocus) ||(searchResult.length != 0 && dropdownInFocus)? 'show' : '')} aria-labelledby="dropdownMenuButton1" style={{ overflow: "scroll", overflowX: "hidden", maxHeight: "150px", zIndex: "2000", width: "100%" }}>
                                    {
                                        searchResult.map((value, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link class="dropdown-item" to="/search" state={value} style={{cursor: "pointer"}}>
                                                        {value}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="banner-bottom-content">
                <form
                    className="banner-search-form">
                    <div className="single-input">
                        <input className="form--control" name="home_search" id="home_search" type="text"
                            placeholder="What are you looking for" autoComplete="off"
                            onKeyUp={recommendation} />
                        <div className="icon-search">
                            <i className="las la-search"></i>
                        </div>

                        <Link to="/search" state={searchWord} ><button type="submit"> <i className="las la-search"></i> </button></Link>
                    </div>
                </form>

                <span id="all_search_result">
                    <RecommendationContainer searchResult={searchResult} />
                </span>


            </div> */}
        </>
    )
}

export default SearchBar
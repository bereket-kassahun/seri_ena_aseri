
import { useEffect, useState, useContext } from 'react'

import { recommend } from '../../api/recommend'
import { Link } from 'react-router-dom'

// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import { ThemeContext } from "../../context/theme-context"


const SearchBar = () => {

    const { currentTheme, updateLanguage } = useContext(ThemeContext);

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
            <div style={{ position: "relative", }} >
                <div>
                    <img src='imgs/main_backround.jpeg'></img>
                            {/* <img src="imgs/slider_1.jpg" alt="..." /> */}
                            {/* <img src="imgs/slider_2.jpg" alt="..." /> */}
                            {/* <img src="imgs/slider_3.jpg" alt="..." /> */}
                    {/* <Carousel style={{}} showArrows={true} autoPlay={true} interval={2500} showThumbs={false} showStatus={false} infiniteLoop={true} swipeable={true}>
                        <div >
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" alt="..." />
                        </div>
                        <div>
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" alt="..." />
                        </div>
                        <div >
                            <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" alt="..." />
                        </div>
                    </Carousel> */}
                </div>

                <div class="d-flex flex-column justify-content-center " style={{ alignContent: "center", textAlign: "center", position: "absolute", top: "5%", padding: "10% 0px 0px 0px", width: "100%" }}>
                    <div class="col-lg-8  col-sm-10 pt-4 pt-lg-0 order-2 order-lg-2" style={{ alignSelf: "center" }} data-aos="fade-up" data-aos-delay="200">
                        <h1 className='d-none d-lg-block' style={{ fontSize: "54px", fontWeight: "700", lineHeight: "56px", color: "#fff" }}>{currentTheme.text.home.text1}</h1>
                        <h2 className='d-none d-sm-block' style={{ color: "rgba(255, 255, 255, 0.7)", marginBottom: "50px", fontSize: "24px" }}>{currentTheme.text.home.text2}</h2>
                        <div class="input-group rounded">
                            <input type="search" class="form-control" aria-label="Search" aria-describedby="search-addon" placeholder={currentTheme.text.home.text3} autoComplete="off"
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
                            <ul onMouseEnter={(evnt) => { setDropdownInFocus(true) }} onMouseLeave={(evnt) => { setDropdownInFocus(false) }} className={"dropdown-menu " + ((searchResult.length != 0 && inFocus) || (searchResult.length != 0 && dropdownInFocus) ? 'show' : '')} aria-labelledby="dropdownMenuButton1" style={{ overflow: "scroll", overflowX: "hidden", maxHeight: "150px", zIndex: "2000", width: "100%" }}>
                                {
                                    searchResult.map((value, index) => {
                                        return (
                                            <li key={index}>
                                                <Link class="dropdown-item" to="/search" state={value} style={{ cursor: "pointer" }}>
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
        </>
    )
}

export default SearchBar
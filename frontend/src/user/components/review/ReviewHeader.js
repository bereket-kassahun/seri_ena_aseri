import React, { useState, useContext } from "react";

import "./styles.css";


import { recommend } from '../../api/recommend'
function ReviewHeader({ hint, callback }) {

    const placeholder = hint.length > 0 ? hint : ""


    const [searchResult, setSearchResult] = useState([])
    const [searchWord, setSearchWord] = useState(placeholder)
    const [inFocus, setInFocus] = useState(false)
    const [dropdownInFocus, setDropdownInFocus] = useState(false)

    const search = (word) => {
        setSearchWord(word)

        setSearchResult([])
        callback(word)
    }

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

            <div style={{ height: "13vh" , background: " #2f3831" }}>

            </div>
            <div className="exclusive">
                <section className="exclusive-section">
                    <div className="text">
                        <h1>What type of review would you like to leave?</h1>
                        <h3>
                            Leave a review of work done, report a missed appointment or make a complaint
                        </h3>
                    </div>
                    <div class="input-group rounded">
                        <input type="search" class="form-control" aria-label="Search" aria-describedby="search-addon" placeholder={'enter title of the service'} autoComplete="off"
                            onKeyUp={recommendation}
                            onFocus={(evnt) => { setInFocus(true); setDropdownInFocus(true) }}
                            onBlur={(evnt) => { setInFocus(false) }}
                        />
                        <span class="input-group-text border-0" style={{ cursor: "pointer" }} id="search-addon" onClick={() => search(searchWord)}>
                            {/* <Link to="/search" state={searchWord} > */}
                            <i class="fas fa-search" ></i>
                            {/* </Link> */}
                        </span>

                    </div>
                    <div class="dropdown">
                        <ul onMouseEnter={(evnt) => { setDropdownInFocus(true) }} onMouseLeave={(evnt) => { setDropdownInFocus(false) }} className={"dropdown-menu " + ((searchResult.length != 0 && inFocus) || (searchResult.length != 0 && dropdownInFocus) ? 'show' : '')} aria-labelledby="dropdownMenuButton1" style={{ overflow: "scroll", overflowX: "hidden", maxHeight: "150px", zIndex: "2000", width: "100%" }}>
                            {
                                searchResult.map((value, index) => {
                                    return (
                                        <li key={index}><a class="dropdown-item" style={{ cursor: "pointer" }}>{value}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ReviewHeader;

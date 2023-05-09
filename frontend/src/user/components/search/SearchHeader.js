
import { useState } from 'react'

import { recommend } from '../../api/recommend'
export const SearchHeader = ({ hint, callback }) => {

    const placeholder = hint.length > 0 ? hint : ""
    const [searchResult, setSearchResult] = useState([])
    const [searchWord, setSearchWord] = useState(placeholder)
    const [inFocus, setInFocus] = useState(false)

    const recommendation = async (evn) => {

    }

    const search = (word) => {
        setSearchWord(word)

        setSearchResult([])
        callback(word)
    }


    const handleChange = e => {
        let search_word = e.target.value
        setSearchWord(search_word)
        if (search_word == "") {
            setSearchResult([])
            return
        }
        recommend(search_word, (data) => {
            const result = []
            data.map((value, index) => {
                result.push(value.title)

            })
            setSearchResult([...result])
        })
    }

    return (


        <div class="banner-inner-area section-bg-2 padding-top-80 padding-bottom-40" style={{background: " #2f3831"}}>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                    </div>
                    <div class="col-lg-6">
                        <div class="input-group rounded">
                            <input type="search" class="form-control" aria-label="Search" aria-describedby="search-addon" placeholder="What are you looking for" autoComplete="off"
                                onChange={handleChange}
                                onFocus={(evnt) => { setInFocus(true) }}
                                onBlur={(evnt) => { setInFocus(false) }}
                                defaultValue={searchWord}
                                value={searchWord}
                            />
                            <span class="input-group-text border-0" style={{ cursor: "pointer" }} id="search-addon" onClick={() => search(searchWord)}>
                                <i class="fas fa-search" ></i>
                            </span>
                        </div>
                        <div class="dropdown">
                            <ul className={"dropdown-menu " + (searchResult.length != 0 && inFocus ? 'show' : '')} aria-labelledby="dropdownMenuButton1" style={{ overflow: "scroll", overflowX: "hidden", maxHeight: "150px", zIndex: "2000", width: "100%" }}>
                                {
                                    searchResult.map((value, index) => {
                                        return (
                                            <li key={index}><a class="dropdown-item" style={{ cursor: "pointer" }} onClick={() => search(searchWord)}>{value}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

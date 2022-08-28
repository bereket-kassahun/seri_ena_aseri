
import { useState } from 'react'

import { recommend } from '../../api/recommend'
export const SearchHeader = ({ hint, callback }) => {

    const placeholder = hint.length > 0 ? hint : ""
    const [searchResult, setSearchResult] = useState([])
    const [searchWord, setSearchWord] = useState(placeholder)

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


        <div class="banner-inner-area section-bg-2 padding-top-140 padding-bottom-40" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                    </div>
                    <div class="col-lg-6">
                        <div className="banner-bottom-content" style={{ marginTop: "0px" }}>
                            <div 
                                className="banner-search-form">
                                <div className="single-input">
                                    <input className="form--control" name="home_search" id="home_search" type="text"
                                        defaultValue={searchWord} autoComplete="off"
                                        onKeyUp={recommendation}
                                        value={searchWord}
                                        onChange={handleChange} />
                                    <div className="icon-search" >
                                        <i className="las la-search"></i>
                                    </div>
                                    <button onClick={() => search(searchWord)}> <i className="las la-search"></i> </button>
                                </div>
                            </div>

                            <span id="all_search_result"  >
                                {
                                    searchResult && searchResult.length > 0 &&
                                    <span id="all_search_result"><div class="card text-white bg-secondary mb-3 mt-2" style={{ border: 'none', position: "absolute"  }}>
                                        <div class="card-body home_servie_serach_wrapper" style={{ }}>
                                            {
                                                searchResult.map(result => (
                                                    <div style={{ padding: "10px", cursor: "pointer" }} onClick={() =>  search(result) } >
                                                        <span class="search-text-item">
                                                            {result}
                                                        </span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div></span>
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

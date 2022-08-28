
import { useState, useEffect } from 'react'
import RecommendationContainer from './RecommendationContainer'

import { search } from '../../api/search'
import { recommend} from '../../api/recommend'
import { Link } from 'react-router-dom'
const SearchBar = () => {

    const [searchResult, setSearchResult] = useState([])
    const [searchWord, setSearchWord] = useState("")
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


    const recommendation = async (evn) => {
        let search_word = evn.target.value
        setSearchWord(search_word)
        if (search_word == ""){
            setSearchResult([])
            return
        }
            
        console.log("recommendation")
        recommend(search_word, (data) => {
            const result = []
            data.map((value, index) => {
                result.push(value.title)
            })
            console.log(result)
            setSearchResult([...result])
        })
    }

    return (
        <div className="banner-bottom-content">
            <form 
                className="banner-search-form">
                <div className="single-input">
                    <input className="form--control" name="home_search" id="home_search" type="text"
                        placeholder="What are you look for" autoComplete="off"
                        onKeyUp={recommendation} />
                    <div className="icon-search">
                        <i className="las la-search"></i>
                    </div>
                    
                    <Link to="/search" state={ searchWord } ><button type="submit"> <i className="las la-search"></i> </button></Link>
                </div>
            </form>

            <span id="all_search_result">
                <RecommendationContainer searchResult={searchResult} />
            </span>

            <div className="banner-keywords">
                <span className="keyword-title"> Popular: </span>
                <ul className="keyword-tag">
                <Link to="/search" state={ 'Cleaning' } ><li><a > Cleaning </a></li></Link>
                <Link to="/search" state={ 'Electronics' } ><li><a > Electronics </a></li></Link>
                <Link to="/search" state={ 'Painting' } ><li><a > Painting </a></li></Link>
                <Link to="/search" state={ 'Salon And Spa' } ><li><a > Salon And Spa </a></li></Link>
                <Link to="/search" state={ 'Home Move' } ><li><a > Home Move </a></li></Link>
                </ul>
            </div>
        </div>
    )
}

export default SearchBar
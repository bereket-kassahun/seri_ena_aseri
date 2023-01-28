import React, { Component , useState, useContext} from "react";
import { Link } from "react-router-dom";


import "./styles.css";

import { recommend } from '../../api/recommend'
import { ThemeContext } from "../../context/theme-context"

const Presentation = () => {

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
      <div style={{ height: "13vh" }}>

      </div>


      <div id="presentation">

        <section className="presentation-container">
          <h1 className="typing-animation">Sira Alle!</h1>
          <h2>{currentTheme.text.home.text1}</h2>
          <p>{currentTheme.text.home.text2}</p>
          {/* <div className="presentation-button">
            <Link to="/course">Iniciar!</Link>
          </div> */}
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
        </section>
        <section>
          <img src='imgs/worker.png' alt="PresentationImage" />
        </section>
      </div>
    </>
  );

}

export default Presentation;

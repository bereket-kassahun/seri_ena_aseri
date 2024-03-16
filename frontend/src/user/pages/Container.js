import '../../style/rating.css'
import '../../style/glowing-button.css'
import '../../style/container.css'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { isLoggedIn } from "../api/isLoggedIn"
import { isClientLoggedIn, logoutClient } from '../api'
import { useContext } from "react"
import { ClientContext } from "../context/client-context"
import { ThemeContext, english_text, amhairc_text } from "../context/theme-context"
import itemsData from "../components/header/ItemsData"

export default function Container({ children }) {

    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);
    const { currentTheme, updateLanguage } = useContext(ThemeContext);
    const navigator = useNavigate()

    const [isSellerLoggedIn, setIsSellerLoggedIn] = useState(false)
    const [isClientLoggedInNow, setIsCleintLoggedInNow] = useState(currentClient._id != "")


    const [activePage, setActivePage] = useState(0)

    const [active, setActive] = useState(false)
    const [toggleNavigation, setToggleNavigation] = useState(false)
    const [toggleDropDown, setToggleDropDown] = useState(false)

    useEffect(() => {
        isLoggedIn((data) => {
            setIsSellerLoggedIn(data.success)
        })

        isClientLoggedIn((data) => {
            setIsCleintLoggedInNow(data.success)
        })

    }, [])


    const logout = () => {
        logoutClient((data) => {
            if (data.success) {
                updateClient()
                navigator("/")
                setIsCleintLoggedInNow(false)
            }
        })
    }


    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    useEffect(() => {
        let backtotop = select('.back-to-top')
        let selectHeader = select('#header')
        if (backtotop) {
            const toggleBacktotop = () => {
                if (window.scrollY > 20) {
                    backtotop.classList.add('active')
                    selectHeader.classList.add('header-scrolled')
                    // setActive(true)
                } else {
                    selectHeader.classList.remove('header-scrolled')
                    backtotop.classList.remove('active')
                    // setActive(false)
                }
            }
            window.addEventListener('load', toggleBacktotop)
            onscroll(document, toggleBacktotop)
        }
    })

    return (
        <>
            <header id="header" class="fixed-top ">
                <div class="d-flex align-items-center">

                    {/* <h1 class="logo me-auto"><a href="/">Sira-Alle</a></h1> */}

                    <div className="logo-new me-auto" style={{ marginLeft: "30px", height: "110px", width: "110px" }}>
                        <Link to="/" >
                            <img src='imgs/white_logo.png' alt="Logo DevLoad" />
                        </Link>
                    </div>

                    <nav id="navbar" className={"navbar " + (toggleNavigation ? 'navbar-mobile' : '')} style={{ marginRight: "30px" }}>
                        <ul className='custom-ul' style={{ backgroundColor: (toggleNavigation ? '#201e1e' : '') }}>

                            {/* {
                                currentTheme.language == "amharic" ? (
                                    itemsData.amharic.map((item, index) => (
                                        <li onClick={(evnt) => { setToggleNavigation(false); setActivePage(index) }}>
                                            <Link className={"nav-link " + (activePage == (index) ? 'active' : '')} style={{ cursor: "pointer" }} to={item.href}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                    )
                                )
                                    :
                                    (
                                        itemsData.english.map((item, index) => (
                                            <li onClick={(evnt) => { setToggleNavigation(false); setActivePage(index) }}>
                                                <Link className={"nav-link " + (activePage == (index) ? 'active' : '')} style={{ cursor: "pointer" }} to={item.href}>
                                                    {item.name}
                                                </Link>
                                            </li>

                                        )
                                        )
                                    )

                            } */}

                            {/* <Link to={'/register'} type="submit" ><button type="submit" class="glowing-button">JOIN US!</button></Link> */}
                            {/* <Link to={'/login'} type="submit" ><button type="submit" class="glowing-button">SIGN IN!</button></Link> */}
                            {/* <a href={"tel:+2519543476"}>
                                <button type="button" class="btn btn-success" style={{ marginLeft: '10px' }}>
                                    <i class="bi bi-telephone-outbound"></i>
                                    +2519543476
                                </button>
                            </a> */}





                            <li onClick={(evnt) => { setToggleNavigation(false); }}>
                                <Link className="btn-header" to="/howto">
                                    {currentTheme?.text?.navbar?.howTo}
                                </Link>
                            </li>
                            <li onClick={(evnt) => { setToggleNavigation(false); }}>
                                <Link className="btn-header" to="/review">
                                    {currentTheme?.text?.navbar?.leaveAReview}
                                </Link>
                            </li>
                            <li onClick={(evnt) => { setToggleNavigation(false); }}>
                                <a href={"tel:+2519543476"} className="btn-header">
                                    <i class="bi bi-telephone-outbound"></i>
                                    +2519543476
                                </a>
                            </li>
                            {
                                !isSellerLoggedIn && (
                                    <>
                                        <li onClick={(evnt) => { setToggleNavigation(false) }}>
                                            <Link className="btn-header" to="/login">
                                                {currentTheme?.text?.navbar?.signIn}
                                            </Link>
                                        </li>
                                        <li onClick={(evnt) => { setToggleNavigation(false); }}>
                                            {
                                                toggleNavigation ? (
                                                    <Link className="btn-header" to="/register">
                                                        {currentTheme?.text?.navbar?.joinUs}
                                                    </Link>
                                                ) : (
                                                    <Link className="btn-blog" to="/register">
                                                        {currentTheme?.text?.navbar?.joinUs}
                                                    </Link>
                                                )
                                            }

                                        </li>
                                    </>
                                )
                            }


                            {
                                isSellerLoggedIn &&
                                (
                                    <li onClick={(evnt) => { setToggleNavigation(false) }}>
                                        <Link to="/seller" class="btn-blog" >
                                            Dashboard
                                        </Link>
                                    </li>
                                )
                            }

                            {
                                isClientLoggedInNow &&
                                (
                                    <li onClick={(evnt) => { logout(); setToggleNavigation(false) }}>
                                        {/* <a class="getstarted scrollto" href="#about">
                                            Logout
                                        </a> */}
                                        <Link className="btn-blog" to="#">
                                            Logout
                                        </Link>
                                    </li>
                                )
                            }

                            <li className={"dropdown "}  >
                                <a href="" onClick={(evnt) => {
                                    evnt.preventDefault()
                                    setToggleDropDown(!toggleDropDown)
                                }}>
                                    <span style={{ color: "white" }}>{currentTheme.language == "english" ? "Eng" : "Amh"}</span>
                                    <i class="bi bi-chevron-down" style={{ color: "white" }}></i>
                                </a>
                                <ul className={((toggleDropDown && toggleNavigation) ? 'dropdown-active' : '')} style={{ width: "100px" }}>
                                    <li onClick={(evnt) => { updateLanguage("english", english_text); setToggleNavigation(false) }}><a style={{ cursor: "pointer" }}>Eng</a></li>
                                    <li onClick={(evnt) => { updateLanguage("amharic", amhairc_text); setToggleNavigation(false) }}><a style={{ cursor: "pointer" }}>Amh</a></li>
                                </ul>
                            </li>
                        </ul>
                        <i className={"bi bi-list mobile-nav-toggle " + (toggleNavigation ? 'bi-list bi-x' : '')} onClick={(evnt) => {
                            setToggleNavigation(!toggleNavigation)
                        }}></i>
                    </nav>
                </div>
            </header >
            {children}
            < a className={"back-to-top d-flex align-items-center justify-content-center " + (active ? 'active' : '')} onClick={(evnt) => {
                setActive(!active)
                window.scrollTo(0, 0)
            }
            }> <i class="bi bi-arrow-up-short"></i>
            </a >


            <footer id="footer">


                <div class="footer-top" style={{ padding: '0px' }}>
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <img style={{
                                    marginLeft: '-40px',
                                    marginTop: '-30px'
                                }} src='imgs/blue_logo.png' alt="Logo DevLoad" />
                                {/* <h3>Sirralle</h3> */}
                                <p>
                                    A108 Djibouti Street <br />
                                    Addis Ababa, AA 535022<br />
                                    Ethiopia <br /><br />
                                    <strong>Phone:</strong> +251 95698 7809<br />
                                    <strong>Email:</strong> serrale@gmail.com<br />
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <Link to="/">Home</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link to="/about">About Us</Link></li>
                                    <li><i class="bx bx-chevron-right"></i> <Link to="/category_list">Categories</Link> </li>
                                    <li><i class="bx bx-chevron-right"></i> <Link to="/contact_us">Contact Us</Link> </li>
                                    {/* <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li> */}
                                    <li><i class="bx bx-chevron-right"></i> <a href="privacy">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                {/* <h4>Our Services</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul> */}
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Please follow us on our social medias</p>
                                <div class="social-links mt-3">
                                    <a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="fab fa-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="fab fa-skype"></i></a>
                                    <a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="container footer-bottom clearfix">
                    <div class="copyright">
                        &copy; Copyright <strong><span>SERRALE {new Date().getFullYear()}</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed by <a href="/">SERRALE Team</a>  <img style={{ height: '60px', width: '60px' }} src='imgs/white_logo.png' alt="Logo DevLoad" />
                    </div>
                </div>
            </footer>
        </>


    )
}
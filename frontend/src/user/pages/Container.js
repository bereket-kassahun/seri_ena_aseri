import '../../style/rating.css'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { isLoggedIn } from "../api/isLoggedIn"
import { isClientLoggedIn, logoutClient } from '../api'
import { useContext } from "react"
import { ClientContext } from "../context/client-context"
import { ThemeContext } from "../context/theme-context"
import itemsData from "../components/header/ItemsData"

export default function Container({ children }) {

    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);
    const { currentTheme, updateLanguage } = useContext(ThemeContext);
    const navigator = useNavigate()

    const [isSellerLoggedIn, setIsSellerLoggedIn] = useState(false)
    const [isClientLoggedInNow, setIsCleintLoggedInNow] = useState(currentClient._id != "")


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

    const [active, setActive] = useState(false)
    const [toggleNavigation, setToggleNavigation] = useState(false)
    const [toggleDropDown, setToggleDropDown] = useState(false)

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
                <div class="container d-flex align-items-center">

                    <h1 class="logo me-auto"><a href="/">Sira-Alle</a></h1>

                    <nav id="navbar" className={"navbar " + (toggleNavigation ? 'navbar-mobile' : '')} >
                        <ul>

                            {
                                currentTheme.language == "amharic" ? (
                                    itemsData.amharic.map((item, index) => (
                                        <li>
                                            <Link class="nav-link " style={{ cursor: "pointer" }} to={item.href}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                                    )
                                )
                                    :
                                    (
                                        itemsData.english.map((item, index) => (
                                            <li>
                                                <Link class="nav-link " style={{ cursor: "pointer" }} to={item.href}>
                                                    {item.name}
                                                </Link>
                                            </li>

                                        )
                                        )
                                    )

                            }

                            <li className={"dropdown "}  >
                                <a href="" onClick={(evnt) => {
                                    evnt.preventDefault()
                                    setToggleDropDown(!toggleDropDown)
                                }}>
                                    <span>{currentTheme.language == "english" ? "Eng" : "Amh"}</span>
                                    <i class="bi bi-chevron-down"></i>
                                </a>
                                <ul className={((toggleDropDown && toggleNavigation) ? 'dropdown-active' : '')} style={{ width: "100px" }}>
                                    <li onClick={(evnt) => { updateLanguage("english") }}><a style={{ cursor: "pointer" }}>Eng</a></li>
                                    <li onClick={(evnt) => { updateLanguage("amharic") }}><a style={{ cursor: "pointer" }}>Amh</a></li>
                                </ul>
                            </li>

                            {
                                isSellerLoggedIn &&
                                (
                                    <li>
                                        <Link to="/seller" class="getstarted scrollto" >
                                            Dashboard
                                        </Link>
                                    </li>
                                )
                            }

                            {
                                isClientLoggedInNow &&
                                (
                                    <li onClick={(evnt) => { logout() }}>
                                        <a class="getstarted scrollto" href="#about">
                                            Logout
                                        </a>
                                    </li>
                                )
                            }

                        </ul>
                        <i className={"bi bi-list mobile-nav-toggle " + (toggleNavigation ? 'bi-list bi-x' : '')} onClick={(evnt) => {
                            setToggleNavigation(!toggleNavigation)
                        }}></i>
                    </nav>
                </div>
            </header>
            {children}
            <a className={"back-to-top d-flex align-items-center justify-content-center " + (active ? 'active' : '')} onClick={(evnt) => {
                setActive(!active)
                window.scrollTo(0, 0)
            }}><i class="bi bi-arrow-up-short"></i>
            </a>


            <footer id="footer">


                <div class="footer-top">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-3 col-md-6 footer-contact">
                                <h3>Sira-Alle</h3>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022<br />
                                    United States <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div class="social-links mt-3">
                                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="container footer-bottom clearfix">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Sira-Alle</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                        Designed by <a href="https://bootstrapmade.com/">Sira-Alle Team</a>
                    </div>
                </div>
            </footer>
        </>


    )
}
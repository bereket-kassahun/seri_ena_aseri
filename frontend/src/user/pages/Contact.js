import '../../style/rating.css'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState, useRef } from 'react'
import { isLoggedIn } from "../api/isLoggedIn"
import { isClientLoggedIn, logoutClient } from '../api'
import { useContext } from "react"
import { ClientContext } from "../context/client-context"
import { ThemeContext } from "../context/theme-context"
import itemsData from "../components/header/ItemsData"
import '../../style/contact-us.css'

import { Carousel } from '../components/carousel'
export default function Contact() {

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
    const [toggleDeepDropDown, setToggleDeepDropDown] = useState(false)

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
                if (window.scrollY > 100) {
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


    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const customerLogo = useRef(null);

    return (
        <>

            
            <div style={{ height: "13vh", background: " #2f3831" }}>

            </div>
          

            <div class="bg-info contact4 overflow-hiddedn position-relative" >
                <div class="row no-gutters">
                    <div class="container">
                        <div class="col-lg-6 contact-box mb-4 mb-md-0">
                            <div class="">
                                <h1 class="title font-weight-light text-white mt-2">Contact Us</h1>
                                <form class="mt-3">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group mt-2">
                                                <input class="form-control text-white" type="text" placeholder="name" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group mt-2">
                                                <input class="form-control text-white" type="email" placeholder="email address" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group mt-2">
                                                <textarea class="form-control text-white" rows="3" placeholder="message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 d-flex align-items-center mt-2">
                                            <button type="submit" class="btn bg-white text-inverse px-3 py-2"><span> Submit</span></button>
                                            <span class="ml-auto text-white align-self-center"><i class="icon-phone mr-2"></i>251 546 9442</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 right-image p-r-0">
                        <iframe src="https://maps.google.com/maps?q=Ghana%20St,%20Addis%20Ababa&t=k&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%" height="522" frameborder="0" style={{ border: "0" }} allowfullscreen data-aos="fade-left" data-aos-duration="3000"></iframe>
                    </div>

                </div>
            </div>

        </>


    )
}

function Item({ children }) {
    return (
        <div style={{ width: "700px", height: "200px", backgroundColor: "#faa", textAlign: "center", alignContent: "center", margin: "10px" }}>
            <h5 >{children}</h5>
        </div>
    )
}
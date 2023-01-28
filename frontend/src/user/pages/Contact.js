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


    const customerLogo = useRef(null);

    return (
        <>
            <div style={{ height: "13vh", background: " #37517e" }}>

            </div>
            {/* <div class="text-center">
                <div class="error mx-auto" data-text="404">404</div>
                <p class="lead text-gray-800 mb-5">Page Not Found</p>
                <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                <a href="">&larr; Back to Home</a>
            </div> */}

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

                    {/* <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="451" id="gmap_canvas" src="https://maps.google.com/maps?q=Ghana%20St,%20Addis%20Ababa&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:451px;width:600px;}</style><a href="https://www.embedgooglemap.net">google maps create map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:451px;width:600px;}
                    </style></div></div> */}
                </div>
            </div>


            <Carousel />


            <section id="carousel" class="d-none d-md-block">
                <div class="slider">
                    <div class="d-flex slide-track" style={{width: '1680px'}}>
                        <div class="d-flex flex-row image-carousel">
                            <span data-caid="74" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper align-self-end d-flex is-remotable use-data-attr" data-remotable="Available online">
                                        <img class="mw-100 img-fluid loaded" alt="Personal Trainers" width="400" height="260" title="Personal Trainers" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/personal-training.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/personal-training.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/personal-training.jpg!d=D7Luyd 2x" data-was-processed="true"/>
                                            <p class="text-white overflow-category-name mb-0">Personal Trainers</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="1212" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper  d-flex " data-remotable="Available online">
                                        <img class="mw-100 img-fluid loaded" alt="House Cleaning" width="400" height="260" title="House Cleaning" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=D7Luyd 2x" data-was-processed="true"/>
                                            <p class="text-white overflow-category-name mb-0">House Cleaning</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="1505" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper align-self-end d-flex " data-remotable="Available online">
                                        <img class="mw-100 img-fluid loaded" alt="Web Design" width="400" height="260" title="Web Design" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/web-design.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/web-design.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/web-design.jpg!d=D7Luyd 2x" data-was-processed="true"/>
                                            <p class="text-white overflow-category-name mb-0">Web Design</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="179" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper  d-flex " data-remotable="Available online">
                                        <img class="mw-100 img-fluid loaded" alt="Gardening" width="400" height="260" title="Gardening" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=D7Luyd 2x" data-was-processed="true"/>
                                            <p class="text-white overflow-category-name mb-0">Gardening</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="89" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper align-self-end d-flex is-remotable use-data-attr" data-remotable="Available online">
                                        <img class="mw-100 img-fluid loading" alt="Accounting" width="400" height="260" title="Accounting" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/accounting.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/accounting.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/accounting.jpg!d=D7Luyd 2x" data-was-processed="true"/>
                                            <p class="text-white overflow-category-name mb-0">Accounting</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="1539" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper  d-flex is-remotable use-data-attr" data-remotable="Available online">
                                        <img class="mw-100 img-fluid loading" alt="Counselling" width="400" height="260" title="Counselling" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/counselling.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/counselling.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/counselling.jpg!d=D7Luyd 2x" data-was-processed="true"/>
                                            <p class="text-white overflow-category-name mb-0">Counselling</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="74" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper align-self-end d-flex is-remotable use-data-attr" data-remotable="Available online">
                                        <img class="mw-100 img-fluid loading" alt="Personal Trainers" width="400" height="260" title="Personal Trainers" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/personal-training.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/personal-training.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/personal-training.jpg!d=D7Luyd 2x" data-was-processed="true"/>
                                            <p class="text-white overflow-category-name mb-0">Personal Trainers</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="1212" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper  d-flex " data-remotable="Available online">
                                        <img class="mw-100 img-fluid loading" alt="House Cleaning" width="400" height="260" title="House Cleaning" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=D7Luyd 2x" data-was-processed="true"/>
                                            <p class="text-white overflow-category-name mb-0">House Cleaning</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="1505" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper align-self-end d-flex " data-remotable="Available online">
                                        <img class="mw-100 img-fluid loading" alt="Web Design" width="400" height="260" title="Web Design" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/web-design.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/web-design.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/web-design.jpg!d=D7Luyd 2x" data-was-processed="true"/>
                                            <p class="text-white overflow-category-name mb-0">Web Design</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="179" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper  d-flex " data-remotable="Available online">
                                        <img class="mw-100 img-fluid loading" alt="Gardening" width="400" height="260" title="Gardening" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=D7Luyd 2x" data-was-processed="true"/>
                                            <p class="text-white overflow-category-name mb-0">Gardening</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="89" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper align-self-end d-flex is-remotable use-data-attr" data-remotable="Available online">
                                        <img class="mw-100 img-fluid" alt="Accounting" width="400" height="260" title="Accounting" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/accounting.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/accounting.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/accounting.jpg!d=D7Luyd 2x"/>
                                            <p class="text-white overflow-category-name mb-0">Accounting</p>
                                    </div>
                                </div>
                            </span>
                            <span data-caid="1539" class="carousel-link cursor-pointer">
                                <div class="d-flex carousel-slide-item">
                                    <div class="image-wrapper  d-flex is-remotable use-data-attr" data-remotable="Available online">
                                        <img class="mw-100 img-fluid" alt="Counselling" width="400" height="260" title="Counselling" src="https://d18jakcjgoan9.cloudfront.net/s/img/home/counselling.jpg!d=v1NTZ1" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/counselling.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/counselling.jpg!d=D7Luyd 2x"/>
                                            <p class="text-white overflow-category-name mb-0">Counselling</p>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

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
import '../../style/rating.css'
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { isLoggedIn } from "../api/isLoggedIn"
import { isClientLoggedIn, logoutClient } from '../api'
import { useContext } from "react"
import { ClientContext } from "../context/client-context"
import { ThemeContext } from "../context/theme-context"
import itemsData from "../components/header/ItemsData"

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

    return (
        <>
            <div style={{ height: "13vh", background: " #37517e" }}>

            </div>
            <div class="text-center">
                <div class="error mx-auto" data-text="404">404</div>
                <p class="lead text-gray-800 mb-5">Page Not Found</p>
                <p class="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                <a href="">&larr; Back to Home</a>
            </div>
        </>


    )
}
import { Items } from "./Items"
import itemsData from "./ItemsData"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { isLoggedIn } from "../../api/isLoggedIn"
import { isClientLoggedIn, logoutClient } from '../../api'
import { useContext } from "react"
import { ClientContext } from "../../context/client-context"
import { ThemeContext } from "../../context/theme-context"
import '../../style/header-login.css'
import { HeaderButton } from "./HeaderButton"
import { LogoutButton } from "./LogoutButton"

import { client } from "../../context/client-context"
export const Header = () => {


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
                // updateClient(client)
                navigator("/")
                setIsCleintLoggedInNow(false)
            }
        })
    }


    const [isSignInHover, setSignInIsHover] = useState(false);

    const handleMouseEnterSignIn = () => {
        setSignInIsHover(true);
    };

    const handleMouseLeaveSignIn = () => {
        setSignInIsHover(false);
    };

    const loginBtnStyle = {
        fontSize: "1rem",
        letterSpacing: "0.01rem",
        lineHeight: "1.4",
        fontFamily: "Mulish, sans-serif",
        boxSizing: "inherit",
        textDecoration: "none",
        // fontWeight: "600",
        textAlign: "center",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "nowrap",
        flexDirection: "row",
        padding: "1rem 2rem",
        borderRadius: '0.4rem',
        cursor: "pointer",
        overflow: "hidden",
        border: "0.1rem solid #0041ca",
        backgroundColor: isSignInHover ? '#538EB6' : 'inherit',
        color: isSignInHover ? '#ffffff' : '#538EB6',
        boxShadow: "none",
        transition: "background-color 0.2s ease-out, color 0.2s ease-out",
    }

    return (
        <nav className="navbar navbar-area navbar-two   navbar-expand-lg" style={{ padding: "0px" }}>
            <div className="container container-two nav-container" style={{ padding: "0px" }}>
                <div className="responsive-mobile-menu">
                    <div className="logo-wrapper">
                        <a href="/" className="logo">
                            <img src="imgs/new_logo_1.png" alt="" />
                        </a>
                    </div>
                    <div className="onlymobile-device-account-navbar navtwo">
                        <div className="login-account">
                            {
                                (!isSellerLoggedIn && !isClientLoggedInNow) && (
                                    <Link to="/login">
                                        <div class="btn-wrapper">
                                            <a class="cmn-btn btn-bg-3"
                                            >Sign In </a>
                                        </div>
                                    </Link>
                                )
                            }
                            {
                                isSellerLoggedIn &&
                                (
                                    <Link to="/seller">
                                        <div class="btn-wrapper">
                                            <a class="cmn-btn btn-bg-3"
                                            >Dashboard</a>
                                        </div>
                                    </Link>
                                )
                            }
                            {
                                isClientLoggedInNow &&
                                (
                                    <div class="dropdown">
                                        <div class="icon btn btn-transparent" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="las la-user-alt fa-2x"></i>
                                        </div>
                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ cursor: "pointer" }}>
                                            <a class="dropdown-item" onClick={(evnt) => { logout() }}>Logout</a>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                    <button className="navbar-toggler black-color" type="button" data-toggle="collapse"
                        data-target="#bizcoxx_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <Items items={currentTheme.language == "amharic" ? itemsData.amharic : itemsData.english} />
                <div className="nav-right-content">
                    <div class="btn-wrapper">

                        {
                            (!isSellerLoggedIn && !isClientLoggedInNow) && (
                                <Link to="/login">
                                    <HeaderButton title={"Sign In"} />
                                </Link>
                            )
                        }

                        {
                            isSellerLoggedIn &&
                            (
                                <Link to="/seller">
                                    <HeaderButton title={"Dashboard"} />
                                </Link>
                            )
                        }

                        {
                            isClientLoggedInNow &&
                            (
                                <LogoutButton title={"Logout"} logout={logout}/>
                                // <div class="dropdown">
                                //     <div class="icon btn btn-transparent" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                //         <i class="las la-user-alt fa-2x"></i>
                                //     </div>
                                //     <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ cursor: "pointer" }}>
                                //         <a class="dropdown-item" onClick={(evnt) => { logout() }}>Logout</a>
                                //     </div>
                                // </div>
                            )
                        }

                    </div>
                    <div class="dropdown" style={{ marginLeft: "20px" }}>
                        <div class="icon btn btn-transparent" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="las la-globe la-2x"></i>
                        </div>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ cursor: "pointer" }}>
                            <a class="dropdown-item" onClick={(evnt) => { updateLanguage("english") }}>English</a>
                            <a class="dropdown-item" onClick={(evnt) => { updateLanguage("amharic") }}>Amharic</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    )
}
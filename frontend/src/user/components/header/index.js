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
import '../../../style/header-login.css'
import { HeaderButton } from "./HeaderButton"
import { LogoutButton } from "./LogoutButton"
import { Item } from "./Item"
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
                updateClient()
                // navigator("/")
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


    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const itemStyle = {
        color: isHover ? "#0051fd" : "black",
        fontWeight: "bold"
    }

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
            <div class="container">
                {/* <a class="navbar-brand" href="#">Start Bootstrap</a> */}
                <a href="/" className="logo">
                    <img src="imgs/new_logo_4.png" alt="" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        {/* <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li> */}

                        {
                            currentTheme.language == "amharic" ? (
                                itemsData.amharic.map((item, index) => (
                                    <Link to={item.href}>
                                        <li key={index} class="nav-item">
                                            <Item name={item.name}></Item>
                                        </li>
                                    </Link>)
                                )
                            )
                                :
                                (
                                    itemsData.english.map((item, index) => (
                                        <Link to={item.href}>
                                            <li key={index} class="nav-item">
                                                <Item name={item.name}></Item>
                                            </li>
                                        </Link>
                                    )
                                    )
                                )

                        }

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {currentTheme.language == "english" ? "Eng" : "Amh"}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" style={{ cursor: "pointer" }}>
                                <li><a class="dropdown-item" onClick={(evnt) => { updateLanguage("english") }}>Eng</a></li>
                                <li><a class="dropdown-item" onClick={(evnt) => { updateLanguage("amharic") }}>Amh</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">

                            {
                                isSellerLoggedIn &&
                                (
                                    <Link to="/seller">
                                        <Item name={"DashBoard"}></Item>
                                        {/* <HeaderButton title={"Dashboard"} /> */}
                                    </Link>
                                )
                            }

                            {
                                isClientLoggedInNow &&
                                (
                                    <LogoutButton title={"Logout"} logout={logout} />
                                )
                            }

                        </li>


                    </ul>
                </div>



                {/* <div class="dropdown" style={{ marginLeft: "20px" }}>
                    <div class="icon btn btn-transparent" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="las la-globe la-2x"></i>
                    </div>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                        
                        
                    </div>
                </div> */}
            </div>
        </nav>
        // <nav className="navbar navbar-area navbar-two   navbar-expand-lg" style={{ padding: "0px" }}>
        //     <div className="container container-two nav-container" style={{ padding: "0px" }}>
        //         <div className="responsive-mobile-menu">
        //             <div className="logo-wrapper">
        //                 <a href="/" className="logo">
        //                     <img src="imgs/new_logo_1.png" alt="" />
        //                 </a>
        //             </div>
        //             <div className="onlymobile-device-account-navbar navtwo">
        //                 <div className="login-account">
        //                     {
        //                         (!isSellerLoggedIn && !isClientLoggedInNow) && (
        //                             <Link to="/login">
        //                                 <div class="btn-wrapper">
        //                                     <a class="cmn-btn btn-bg-3"
        //                                     >Sign In </a>
        //                                 </div>
        //                             </Link>
        //                         )
        //                     }
        //                     {
        //                         isSellerLoggedIn &&
        //                         (
        //                             <Link to="/seller">
        //                                 <div class="btn-wrapper">
        //                                     <a class="cmn-btn btn-bg-3"
        //                                     >Dashboard</a>
        //                                 </div>
        //                             </Link>
        //                         )
        //                     }
        //                     {
        //                         isClientLoggedInNow &&
        //                         (
        //                             <div class="dropdown">
        //                                 <div class="icon btn btn-transparent" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                                     <i class="las la-user-alt fa-2x"></i>
        //                                 </div>
        //                                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ cursor: "pointer" }}>
        //                                     <a class="dropdown-item" onClick={(evnt) => { logout() }}>Logout</a>
        //                                 </div>
        //                             </div>
        //                         )
        //                     }

        //                 </div>
        //             </div>
        //             <button className="navbar-toggler black-color" type="button" data-toggle="collapse"
        //                 data-target="#bizcoxx_main_menu" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //         </div>
        //         <Items items={currentTheme.language == "amharic" ? itemsData.amharic : itemsData.english} />
        //         <div className="nav-right-content">

        //         </div>
        //     </div>
        // </nav>


    )
}
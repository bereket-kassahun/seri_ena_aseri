import { Items } from "./Items"
import itemsData from "./ItemsData"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { isLoggedIn } from "../../api/isLoggedIn"
export const Header = () => {
    const [isSellerLoggedIn, setIsSellerLoggedIn] = useState(false)

    useEffect(() => {
        isLoggedIn((data) => {
            setIsSellerLoggedIn(data.success)
        })
    }, [])
    return (
        <nav className="navbar navbar-area navbar-two  nav-absolute navbar-expand-lg">
            <div className="container container-two nav-container">
                <div className="responsive-mobile-menu">
                    <div className="logo-wrapper">
                        <a href="/" className="logo">
                            <img src="imgs/new_logo.jpg" alt="" />
                        </a>
                    </div>
                    <div className="onlymobile-device-account-navbar navtwo">
                        <div className="login-account">

                            {
                                !isSellerLoggedIn ?
                                    (
                                        <Link to="/login">
                                            <div class="btn-wrapper">
                                                <a class="cmn-btn btn-bg-3"
                                                    >JoinUs </a>
                                            </div>

                                        </Link>
                                    ) :
                                    (
                                        <Link to="/seller">
                                            <div class="btn-wrapper">
                                                <a class="cmn-btn btn-bg-3"
                                                    >Dashboard</a>
                                            </div>
                                        </Link>
                                    )
                            }
                        </div>
                    </div>
                    <button className="navbar-toggler black-color" type="button" data-toggle="collapse"
                        data-target="#bizcoxx_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <Items items={itemsData} />

                <div className="nav-right-content">
                    <div class="btn-wrapper">
                        {
                            !isSellerLoggedIn ?
                                (
                                    <Link to="/login">
                                        <a href="" class="cmn-btn btn-bg-3"
                                            >Sell Your Services</a>
                                    </Link>
                                ) :
                                (
                                    <Link to="/seller">
                                        <a href="" class="cmn-btn btn-bg-3"
                                            >Dashboard</a>
                                    </Link>
                                )
                        }

                    </div>
                </div>
            </div>
        </nav>


    )
}
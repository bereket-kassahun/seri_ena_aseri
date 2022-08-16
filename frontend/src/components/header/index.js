import { Items } from "./Items"
import itemsData from "./ItemsData"
import { Link } from "react-router-dom"
export const Header = () => {
    return (
        <nav className="navbar navbar-area navbar-two  navbar-expand-lg">
            <div className="container container-two nav-container">
                <div className="responsive-mobile-menu">
                    <div className="logo-wrapper">
                        <a href="index.html" className="logo">
                            <img src="https://i.imgur.com/4bjlGhE.png" alt="" />
                        </a>
                    </div>
                    <div className="onlymobile-device-account-navbar navtwo">
                        <div className="login-account">
                            <div class="btn-wrapper">
                                <a href="register20b9.html?type=seller" class="cmn-btn btn-bg-3"
                                    style={{ background: `rgb(255, 107, 43)` }}>JoinUs </a>
                            </div>
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
                        <Link to="/register">
                            <a href="" class="cmn-btn btn-bg-3"
                                style={{ background: `rgb(255, 107, 43)` }}>Sell Your Services</a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>


    )
}
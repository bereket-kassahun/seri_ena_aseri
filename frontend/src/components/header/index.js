import { Items } from "./Items"
import itemsData from "./ItemsData"

export const  Header = () => {
    return (
        <nav className="navbar navbar-area navbar-two nav-absolute navbar-expand-lg">
        <div className="container container-two nav-container">
            <div className="responsive-mobile-menu">
                <div className="logo-wrapper">
                    <a href="index.html" className="logo">
                        <img src="imgs/logo.png" alt="" />
                    </a>
                </div>
                <div className="onlymobile-device-account-navbar navtwo">
                    <div className="login-account">
                        <a className="accounts" href="/"> <span className="account">Account</span> <i
                                className="las la-user"></i> </a>
                        <ul className="account-list-item mt-2">
                            <li className="list"> <a href="register.html"> Sign Up </a> </li>
                            <li className="list"> <a href="login.html">Sign In </a> </li>
                        </ul>
                    </div>
  
  
                </div>
                <button className="navbar-toggler black-color" type="button" data-toggle="collapse"
                    data-target="#bizcoxx_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <Items items={itemsData}/>
          
            <div className="nav-right-content">
                <div className="navbar-right-inner">
                    <div className="info-bar-item">
                    </div>
                    <div className="login-account">
                        <a className="accounts" href="/"> <span className="account">Account</span> <i
                                className="las la-user"></i> </a>
                        <ul className="account-list-item mt-2">
                            <li className="list"> <a href="register.html"> Sign Up </a> </li>
                            <li className="list"> <a href="login.html">Sign In </a> </li>
                        </ul>
                    </div>
  
  
                </div>
            </div>
        </div>
    </nav> 
  
      
    )
}
import { Link } from "react-router-dom"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header"
import { useState, useContext , useEffect } from "react"
import { sellerLogin } from "../api/sellerLogin"
import { useNavigate } from "react-router-dom";
import { loginClient } from "../api"
import { ClientContext } from "../context/client-context"
export const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);
    const navigate = useNavigate();

    const [isClient, setIsClient] = useState(true)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errorMsg, setErrorMsg] = useState("")


    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const validateData = () => {
        if (email == "" || password == "") {
            setErrorMsg("Please fill all fields!")
            return false
        }
        if (!validateEmail(email)) {
            setErrorMsg("Invalid Email!")
            return false
        }
        setErrorMsg("")
        return true
    }

    const login = () => {
        if (isClient) {
            loginClient({ email, password }, (res) => {

                if (!res.success) {
                    if (res.message) {
                        setErrorMsg("Incorrect email or password!!")
                    }
                    else
                        setErrorMsg("Incorrect email or password!!")
                } else {
                    setErrorMsg("")
                    navigate("/")
                    navigate(0)
                }
            })
        } else {
            sellerLogin({ email, password }, (res) => {

                if (!res.success) {
                    if (res.message)
                        setErrorMsg(res.message)
                    else
                        setErrorMsg("Incorrect email or password!!")
                } else {
                    setErrorMsg("")
                    navigate("/seller/services")
                }
            })
        }

    }
    return (
        <>
            <div style={{ height: "13vh", background: " #2f3831" }}>

            </div>
            <div class="banner-area  margin-bottom-150">
                <div class="container">
                    <div class="signup-wrapper">
                        <div class="signup-contents">

                            <h3 class="signup-title"> Sign In</h3>

                            <div class="registration-seller-btn">
                                <ul class="registration-tabs tabs" style={{gap: '10px'}}>
                                    <li data-tab="tab_one" style={{padding: '3px 10px'}} className={"is_user_seller " + (isClient ? 'active' : '')} onClick={() => { setIsClient(true) }}>
                                        <div class="single-tabs-registration">
                                            <div class="icon">
                                                <i class="las la-user-alt"></i>
                                            </div>
                                            <div class="contents">
                                                <h4 class="title" id="buyer"> Customer </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-tab="tab_two" style={{padding: '3px 10px'}} className={"is_user_seller " + (!isClient ? 'active' : '')} onClick={() => { setIsClient(false) }}>
                                        <div class="single-tabs-registration">
                                            <div class="icon">
                                                <i class="las la-briefcase"></i>
                                            </div>
                                            <div class="contents">
                                                <h4 class="title" id="seller"> Professional </h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="error-message">
                                {
                                    errorMsg.length > 0 && (
                                        <div class="alert alert-danger margin-top-20" role="alert">
                                            {errorMsg}
                                        </div>
                                    )
                                }
                            </div>

                            <form class="signup-forms" >
                                <input type="hidden" name="_token" value="HrrZZYoJgavx2tJ8qSIGw7IY3KfEotYF0mWRrgJo" />
                                <div class="single-signup margin-top-10">
                                    <label class="signup-label"> Username or Email * </label>
                                    <input class="form--control" type="text" name="username" id="username" placeholder="Username or Email" onChange={(evnt) => { setEmail(evnt.target.value) }} />
                                </div>
                                <div class="single-signup margin-top-10">
                                    <label class="signup-label"> Password* </label>
                                    <input class="form--control" type="password" name="password" id="password" placeholder="Password" onChange={(evnt) => { setPassword(evnt.target.value) }} />
                                </div>
                                {/* <div class="signup-checkbox"> */}
                                    {/* <div class="checkbox-inlines">
                                        <input class="check-input" name="remember" id="remember" type="checkbox" />
                                        <label class="checkbox-label" for="remember"> Remember me</label>
                                    </div> */}
                                    {/* <div class="forgot-btn">
                                            <a href="user/forget-password.html" class="forgot-pass"> Forgot Password</a>
                                        </div> */}
                                {/* </div> */}
                                <button id="signin_form" type="button" onClick={() => {
                                    if (validateData()) {
                                        login()
                                    }
                                }}>Login Now</button>
                                <span class="bottom-register"> Do not have Account?   <Link to="/register"><a class="resgister-link" > Register </a></Link> </span>
                                {
                                    !isClient && <span class="bottom-register"> Forgot Password?   <a href="/send_reset_password_link" > Reset Password</a> </span>
                                }
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
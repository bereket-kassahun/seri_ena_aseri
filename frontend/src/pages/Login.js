import { Link } from "react-router-dom"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header"
import { useState } from "react"
import { sellerLogin } from "../api/sellerLogin"
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate();

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
        sellerLogin({ email, password }, (res) => {
            
            if (!res.success) {
                if (res.message)
                    setErrorMsg(res.message)
                else
                    setErrorMsg("Incorrect email or password!!")
            } else {
                setErrorMsg("")
                navigate("/seller")
            }
        })
    }
    return (
        <>
            <Header />
            <div class="banner-area home-three-banner signup-area padding-top-70 padding-bottom-100">
                <div class="container">
                    <div class="signup-wrapper">
                        <div class="signup-contents">
                            <h3 class="signup-title"> Sign In</h3>

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
                                <div class="single-signup margin-top-30">
                                    <label class="signup-label"> Username or Email * </label>
                                    <input class="form--control" type="text" name="username" id="username" placeholder="Username or Email" onChange={(evnt) => { setEmail(evnt.target.value) }} />
                                </div>
                                <div class="single-signup margin-top-30">
                                    <label class="signup-label"> Password* </label>
                                    <input class="form--control" type="password" name="password" id="password" placeholder="Password" onChange={(evnt) => { setPassword(evnt.target.value) }} />
                                </div>
                                <div class="signup-checkbox">
                                    {/* <div class="checkbox-inlines">
                                        <input class="check-input" name="remember" id="remember" type="checkbox" />
                                        <label class="checkbox-label" for="remember"> Remember me</label>
                                    </div> */}
                                    {/* <div class="forgot-btn">
                                            <a href="user/forget-password.html" class="forgot-pass"> Forgot Password</a>
                                        </div> */}
                                </div>
                                <button id="signin_form" type="button" onClick={() => {
                                    if (validateData()) {
                                        login()
                                    }
                                }}>Login Now</button>
                                <span class="bottom-register"> Do not have Account?   <Link to="/register"><a class="resgister-link" > Register </a></Link> </span>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
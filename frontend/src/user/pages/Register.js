import { useState } from "react"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header"
import { sendEmail } from "../api/send_email"
import { verifyEmail } from "../api/verifyEmail"
import { useNavigate } from "react-router-dom"
import { registerClient } from '../api'
import { useLocation } from "react-router-dom"
const Register = () => {

    const navigate = useNavigate()

    const [isClient, setIsClient] = useState(false)

    const [clientUsername, setClientUsername] = useState("")
    const [clientEmail, setClientEmail] = useState("")
    const [clientPassword, setClientPassword] = useState("")
    const [clientConfirmPassword, setClientConfirmPassword] = useState("")


    const [clientErrorMsg, setClientErrorMsg] = useState("")
    const [clientSuccessMsg, setClientSuccessMsg] = useState("")

    const [activeElement, setActiveElement] = useState(1)
    const [errorMsg, setErrorMsg] = useState("")
    const [termsErrorMsg, setTermsErrorMsg] = useState("")
    const [verificationErrorMsg, setVerificationErrorMsg] = useState("")
    const [verificationSuccessMsg, setVerificationSuccessMsg] = useState("")

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [code, setCode] = useState("")

    const [terms, setTerms] = useState(false)

    const validateClientData = () => {
        if (clientUsername == "" || clientEmail == "" || clientPassword == "" || clientConfirmPassword == "") {
            setClientErrorMsg("Please fill all fields!")
            return false
        }
        if (clientPassword != clientConfirmPassword) {
            setClientErrorMsg("Password and Confirm Password doesn't mach!")
            return false
        }
        if (!validateEmail(clientEmail)) {
            setClientErrorMsg("Invalid Email!")
            return false
        }
        setClientErrorMsg("")
        return true
    }

    const validateData = () => {
        if (firstName == "" || lastName == "" || phoneNumber == "" || email == "" || password == "" || confirmPassword == "") {
            setErrorMsg("Please fill all fields!")
            return false
        }
        if (password != confirmPassword) {
            setErrorMsg("Password and Confirm Password doesn't mach!")
            return false
        }
        if (!validateEmail(email)) {
            setErrorMsg("Invalid Email!")
            return false
        }
        setErrorMsg("")
        return true
    }

    const registerCurrentClient = () => {
        registerClient({ email: clientEmail, username: clientUsername, password: clientPassword }, (data) => {
            if (data.success) {
                setClientSuccessMsg("Successfully Registered")
                setClientErrorMsg("")
                navigate("/login")
            } else {
                setClientSuccessMsg("")
                setClientErrorMsg(data.message ? data.message : "Unable to register")
            }
        })
    }

    const validateTerms = () => {
        if (!terms) {
            setTermsErrorMsg("Please accept terms and conditions")
        } else {
            setTermsErrorMsg("")
        }
        return terms
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const sendVerificationEmail = () => {
        sendEmail(email, (result) => {
            console.log(result)
            if (result.success) {
                setVerificationSuccessMsg("We Have Sent An Email Containing Your Verification Code")
                setVerificationErrorMsg("")
            } else {
                setVerificationErrorMsg("We are Unable To Send Verification Email")
                setVerificationSuccessMsg("")
            }
        })
    }

    const verifyEmailAddress = () => {
        verifyEmail({ email, code, firstName, lastName, phoneNumber, password }, (result) => {
            if (result.success) {
                setVerificationSuccessMsg("You have Been Successfully Registered")
                setVerificationErrorMsg("")
                navigate("/login")
            } else {
                setVerificationErrorMsg("Invalid code!")
                setVerificationSuccessMsg("")
            }
        })
    }

    const toggleButton = (isClient) => {
        setIsClient(isClient)
    }
    return (
        <>
            <div style={{ height: "13vh", background: " #37517e" }}>

            </div>

            <section class="banner-area home-three-banner  padding-top-100 padding-bottom-100" style={{padding: "30px 0px 120px 0px"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="registration-seller-btn">
                                <ul class="registration-tabs tabs">
                                    <li data-tab="tab_one" className={"is_user_seller " + (isClient ? 'active' : '')} onClick={() => { setIsClient(true) }}>

                                        <div class="single-tabs-registration">
                                            <div class="icon">
                                                <i class="las la-user-alt"></i>
                                            </div>
                                            <div class="contents">
                                                <h4 class="title" id="buyer"> User </h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li data-tab="tab_two" className={"is_user_seller " + (!isClient ? 'active' : '')} onClick={() => { setIsClient(false) }}>
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
                            <div class={"tabs"}>
                                <div className={"tab-content " + (isClient ? 'active' : '')} id="tab_one">
                                    <form id="msform-one" class="msform user-register-form" >
                                        <div class="registration-step-form margin-top-55 ">
                                            <div className={"fieldset-info user-information another-tab-content "}  >

                                                {
                                                    clientErrorMsg.length > 0 && (
                                                        <div class="alert alert-danger margin-top-20" role="alert">
                                                            {clientErrorMsg}
                                                        </div>
                                                    )
                                                }



                                                <div class="information-all  margin-top-55">
                                                    <div class="info-forms">

                                                        <div class="single-forms">
                                                            <div class="single-content margin-top-30">
                                                                <label class="forms-label"> Email Address* </label>
                                                                <input class="form--control" type="text" name="email" id="email"
                                                                    placeholder="Type Email" onChange={(evnt) => { setClientEmail(evnt.target.value) }} />
                                                            </div>
                                                            <div class="single-content margin-top-30">
                                                                <label class="forms-label"> Username* </label>
                                                                <input class="form--control" type="text" name="username" id="username"
                                                                    placeholder="Type Email" onChange={(evnt) => { setClientUsername(evnt.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div class="single-forms">
                                                            <div class="single-content margin-top-30">
                                                                <label class="forms-label"> Password* </label>
                                                                <input class="form--control" type="password" name="password"
                                                                    id="password" placeholder="Type Password" onChange={(evnt) => { setClientPassword(evnt.target.value) }} />
                                                            </div>
                                                            <div class="single-content margin-top-30">
                                                                <label class="forms-label"> Confirm Password* </label>
                                                                <input class="form--control" type="password"
                                                                    name="password_confirmation" id="password_confirmation"
                                                                    placeholder="Retype Password" onChange={(evnt) => { setClientConfirmPassword(evnt.target.value) }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input type="button" name="next" class=" action-button" value="Submit" data-tab="tab1" onClick={() => { if (validateClientData()) registerCurrentClient(2) }} />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className={"tab-content another-tab-content " + (!isClient ? 'active' : '')} id="tab_two">
                                    <div class="registration-step-form margin-top-55 tabs">
                                        <form id="msform-one" class="msform user-register-form" >
                                            <ul class="registration-list step-list-two">
                                                <li className={"list " + (activeElement == 1 || activeElement == 2 || activeElement == 3 ? 'active' : '')} data-tab="tab1" >
                                                    <a class="list-click" href="javascript:void(0)"> 1 </a>
                                                </li>
                                                <li className={"list " + (activeElement == 2 || activeElement == 3 ? 'active' : '')} data-tab="tab2" >
                                                    <a class="list-click" href="javascript:void(0)"> 2 </a>
                                                </li>
                                                <li className={"list " + (activeElement == 3 ? 'active' : '')} data-tab="tab3" >
                                                    <a class="list-click" href="javascript:void(0)"> 3 </a>
                                                </li>
                                            </ul>
                                            <div className={"fieldset-info user-information tab-content another-tab-content " + (activeElement == 1 ? 'active' : '')} id="tab2" >

                                                {
                                                    errorMsg.length > 0 && (
                                                        <div class="alert alert-danger margin-top-20" role="alert">
                                                            {errorMsg}
                                                        </div>
                                                    )
                                                }

                                                <div class="information-all margin-top-55">
                                                    <div class="info-forms">
                                                        <div class="single-forms">
                                                            <div class="single-content margin-top-30">
                                                                <label class="forms-label"> First Name </label>
                                                                <input class="form--control" type="text" name="name" id="name"
                                                                    placeholder="First Name" onChange={(evnt) => { setFirstName(evnt.target.value) }} />
                                                            </div>
                                                            <div class="single-content margin-top-30">
                                                                <label class="forms-label">Last Name </label>
                                                                <input class="form--control" type="text" name="username"
                                                                    id="username" placeholder="Last Name" onChange={(evnt) => { setLastName(evnt.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div class="single-forms">
                                                            <div class="single-content margin-top-30">
                                                                <label class="forms-label"> Email Address* </label>
                                                                <input class="form--control" type="text" name="email" id="email"
                                                                    placeholder="Type Email" onChange={(evnt) => { setEmail(evnt.target.value) }} />
                                                            </div>
                                                            <div class="single-content margin-top-30">
                                                                <label class="forms-label"> Phone Number* </label>
                                                                <input class="form--control" type="tel" name="phone" id="phone"
                                                                    placeholder="Type Number" onChange={(evnt) => { setPhoneNumber(evnt.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div class="single-forms">
                                                            <div class="single-content margin-top-30">
                                                                <label class="forms-label"> Password* </label>
                                                                <input class="form--control" type="password" name="password"
                                                                    id="password" placeholder="Type Password" onChange={(evnt) => { setPassword(evnt.target.value) }} />
                                                            </div>
                                                            <div class="single-content margin-top-30">
                                                                <label class="forms-label"> Confirm Password* </label>
                                                                <input class="form--control" type="password"
                                                                    name="password_confirmation" id="password_confirmation"
                                                                    placeholder="Retype Password" onChange={(evnt) => { setConfirmPassword(evnt.target.value) }} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input type="button" name="next" class=" action-button" value="Next" data-tab="tab1" onClick={() => { if (validateData()) setActiveElement(2) }} />
                                            </div>
                                            <div className={"fieldset-service terms-conditions tab-content another-tab-content " + (activeElement == 2 ? 'active' : '')} id="tab1" >

                                                {
                                                    termsErrorMsg.length > 0 && (
                                                        <div class="alert alert-danger margin-top-20" role="alert">
                                                            {termsErrorMsg}
                                                        </div>
                                                    )
                                                }
                                                <div class="information-all margin-top-55">
                                                    <h3 class="register-title margin-bottom-40" style={{ textAlign: 'center' }}> Terms and Conditions </h3>
                                                    <div class="condition-info">
                                                        <div class="single-condition margin-top-30">
                                                            <div class="condition-content">
                                                                <div class="checkbox-inlines">
                                                                    <input class="check-input" type="checkbox"
                                                                        name="terms_conditions" id="terms_conditions" onChange={(evnt) => { setTerms(evnt.target.checked) }} />
                                                                    <label class="checkbox-label" for="terms_conditions">
                                                                        I agree with the terms and conditions. </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input type="button" name="next" class=" action-button" value="Next" data-tab="tab3" onClick={() => {
                                                    if (validateTerms()) {
                                                        sendVerificationEmail()
                                                        setActiveElement(3)
                                                    }
                                                }} />
                                                <input type="button" name="previous" class=" action-button-previous"
                                                    value="Previous" data-tab="tab1" onClick={() => { setActiveElement(1) }} />
                                            </div>
                                            <div className={"fieldset-condition  service-area tab-content another-tab-content " + (activeElement == 3 ? 'active' : '')} id="tab3" >
                                                {
                                                    verificationErrorMsg.length > 0 && (
                                                        <div class="alert alert-danger margin-top-20" role="alert">
                                                            {verificationErrorMsg}
                                                        </div>
                                                    )
                                                }
                                                {
                                                    verificationSuccessMsg.length > 0 && (
                                                        <div class="alert alert-primary margin-top-20" role="alert">
                                                            {verificationSuccessMsg}
                                                        </div>
                                                    )
                                                }
                                                <div class="single-content padding-top-20">
                                                    <h3 class="register-title margin-bottom-40" style={{ textAlign: 'center' }}> Verify Your Account </h3>
                                                    <div class="single-forms">
                                                        <input class="form--control" type="text" name="name" id="verify"
                                                            placeholder="Enter your code" onChange={(evnt) => { setCode(evnt.target.value) }} />
                                                    </div>
                                                </div>
                                                <div class="resend-verify-code-wrap" style={{ cursor: "pointer" }}>
                                                    <a class="text-center" onClick={() => { sendVerificationEmail() }}>Resend Code</a>
                                                </div>
                                                <input type="hidden" name="get_user_type" id="get_user_type" value="1" />
                                                <input type="button" name="submit" class="next action-button" value="Submit" onClick={() => { verifyEmailAddress() }} />
                                                <input type="button" name="previous" class=" action-button-previous"
                                                    value="Previous" data-tab="tab2" onClick={() => { setActiveElement(2) }} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <Footer /> */}
        </>
    )
}

export default Register
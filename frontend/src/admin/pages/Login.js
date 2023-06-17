import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { is_logged_in, login } from "../api"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ADMIN_HIDDEN_URL } from "../../config";


export const Login = () => {


    const navigator = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const adminLogin = () => {
        if (email != "" && password != "") {
            login({ email, password }, (res) => {
                if (res.success) {
                    navigator('/'+ADMIN_HIDDEN_URL+'/dashboard')
                } else {
                    notifyError("Incorrect Email Or Password!")
                }
            })
        } else {
            notifyError("Empty Email Or Password!")
        }
    }

    useEffect(() => {
        is_logged_in({}, (res) => {
            if (res.success) {
                navigator('/'+ADMIN_HIDDEN_URL+'/dashboard')
            } else {

            }
        })
    }, [])

    const notifyError = (msg) =>
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });



    return (
        <>
            <ToastContainer />
            <section class="vh-100" >
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                <div class="card-body p-5 text-center" style={{ backgroundColor: "#dee2e6", borderRadius: "1rem" }}>
                                    {/* <hr class="my-4" /> */}

                                    <h3 class="mb-5">Admin Sign In</h3>

                                    <div class="form-outline mb-4">
                                        <input type="email" id="form2Example17" class="form-control form-control-lg" placeholder="Email" value={email} onChange={(evnt) => {
                                            setEmail(evnt.target.value)
                                        }} />
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" id="form2Example27" class="form-control form-control-lg" placeholder="Password" value={password} onChange={(evnt) => {
                                            setPassword(evnt.target.value)
                                        }} />
                                    </div>

                                    <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={(evnt) => {
                                        adminLogin()
                                    }}>Login</button>

                                    <hr class="my-4" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
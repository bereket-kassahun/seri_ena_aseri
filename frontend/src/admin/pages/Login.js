import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const Login = () => {


    const navigator = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = () => {
        if (email == "b@gmail.com" && password == "12345") {
            navigator("dashboard")
        }
    }

    return (
        <>
            <div style={{ height: "13vh", background: " #37517e" }}>

            </div>
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
                                        login()
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
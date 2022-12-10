import { useEffect, useState } from "react"


export const Test = () => {
    const [toggled, setToggled] = useState(false)

    return (
        <>
            <div id="wrapper">
                <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " + (toggled ? 'toggled' : '')} id="accordionSidebar">
                    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div class="sidebar-brand-icon rotate-n-15">
                            <i class="fas fa-laugh-wink"></i>
                        </div>
                        <div class="sidebar-brand-text mx-3"> Admin</div>
                    </a>
                    <hr class="sidebar-divider my-0" />
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="charts.html">
                            <i class="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tables.html">
                            <i class="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tables.html">
                            <i class="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tables.html">
                            <i class="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tables.html">
                            <i class="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </li>
                    <hr class="sidebar-divider d-none d-md-block" />
                    <div class="text-center d-none d-md-inline">
                        <button class="btn btn-secondary rounded-circle border-0" onClick={(evnt) => { setToggled(!toggled) }} id="sidebarToggle">
                        {
                            toggled ? (<i class="bi bi-chevron-right"></i>) : (<i class="bi bi-chevron-left"></i>)
                        }
                        </button>
                    </div>

                </ul>
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button id="sidebarToggleTop" onClick={(evnt) => { setToggled(!toggled) }} class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>
                        </nav>
                        <div class="container-fluid">
                            <div class="container">
                                <div class="row justify-content-center">

                                    <div class="col-xl-10 col-lg-12 col-md-9">

                                        <div class="card o-hidden border-0 shadow-lg my-5">
                                            <div class="card-body p-0">
                                                <div class="row">
                                                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                                    <div class="col-lg-6">
                                                        <div class="p-5">
                                                            <div class="text-center">
                                                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                            </div>
                                                            <form class="user">
                                                                <div class="form-group">
                                                                    <input type="email" class="form-control form-control-user"
                                                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                                                        placeholder="Enter Email Address..." />
                                                                </div>
                                                                <div class="form-group">
                                                                    <input type="password" class="form-control form-control-user"
                                                                        id="exampleInputPassword" placeholder="Password" />
                                                                </div>
                                                                <div class="form-group">
                                                                    <div class="custom-control custom-checkbox small">
                                                                        <input type="checkbox" class="custom-control-input" id="customCheck" />
                                                                        <label class="custom-control-label" for="customCheck">Remember
                                                                            Me</label>
                                                                    </div>
                                                                </div>
                                                                <a href="index.html" class="btn btn-primary btn-user btn-block">
                                                                    Login
                                                                </a>
                                                                <hr />
                                                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                                                    <i class="fab fa-google fa-fw"></i> Login with Google
                                                                </a>
                                                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                                                    <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                                </a>
                                                            </form>
                                                            <hr />
                                                            <div class="text-center">
                                                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                                                            </div>
                                                            <div class="text-center">
                                                                <a class="small" href="register.html">Create an Account!</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                    </div>
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                            <div class="copyright text-center my-auto">
                                <span>Copyright &copy; Sira-Alle Website 2020</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
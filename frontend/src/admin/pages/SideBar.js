
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function SideBar({ children }) {


    const [toggled, setToggled] = useState(false)
    const [activePage, setActivePage] = useState(1)
    const [title, setTitle] = useState("Dashboard")

    const navigate = useNavigate()

    const logout = () => {
        navigate("/")
    }


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
                        <Link to='' className={"nav-link " + (activePage == 1 ? 'active' : '')} onClick={() => { setActivePage(1); setTitle("Dashboard") }}>
                            <a > <i class="las la-th"></i><span> Dashboard</span>  </a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='service_approval' className={"nav-link " + (activePage == 2 ? 'active' : '')} onClick={() => { setActivePage(2); setTitle("Pending Services") }}>
                            <a > <i class="las la-gifts"></i><span> Approvals</span></a>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to='seller_list' className={"nav-link " + (activePage == 3 ? 'active' : '')} onClick={() => { setActivePage(3); setTitle("Sellers") }}>
                            <a > <i class="las la-gifts"></i><span>Sellers</span> </a>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to='/' className={"nav-link " + (activePage == 8 ? 'active' : '')} onClick={() => { logout() }}>
                            <a> <i class="fas fa-sign-out-alt"></i><span>Log Out</span>  </a>
                        </Link>
                    </li>

                    <hr class="sidebar-divider d-none d-md-block" />
                    <div class="text-center d-none d-md-inline">
                        <a class="btn btn-primary btn-circle " onClick={(evnt) => { setToggled(!toggled) }} >
                            {
                                toggled ? (<i class="fas fa-chevron-right"></i>) : (<i class="fas fa-chevron-left"></i>)
                            }
                        </a>
                    </div>

                </ul>
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button id="sidebarToggleTop" onClick={(evnt) => { setToggled(!toggled) }} class="btn btn-link d-md-none rounded-circle mr-3">
                                <i class="fa fa-bars"></i>
                            </button>

                            <div class="sidebar-brand-text mx-3"> {title}</div>
                        </nav>
                        <div class="container-fluid">
                            {children}
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
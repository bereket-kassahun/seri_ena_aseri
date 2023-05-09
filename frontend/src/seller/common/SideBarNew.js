import { useState, useContext, useEffect } from "react"

import { sellerLogout } from '../api/sellerLogout'
import { SellerContext } from '../context/seller-context'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useNavigate, } from 'react-router-dom'
export const SideBar = ({ children }) => {
    const [toggled, setToggled] = useState(false)
    const { seller, updateCurrentSeller } = useContext(SellerContext);


    const [title, setTitle] = useState("Dashboard")
    const [activePage, setActivePage] = useState(1)

    const navigate = useNavigate()

    const logout = () => {
        sellerLogout((data) => {
            if (data) {
                if (data.success) {
                    navigate("/")
                } else {

                }
            }
        })
    }

    useEffect(() => {
        console.log(seller)
    }, [])
    return (
        <>
            <div id="wrapper">
                <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " + (toggled ? 'toggled' : '')} id="accordionSidebar">


                    <div class="dashboard-top padding-top-40">
                        <div class="thumb">
                            <img src={seller.img != "" ? seller.img : "imgs/user_profile.png"} alt="No Image" />
                        </div>
                        <div class="author-content">
                            <a class="sidebar-brand d-flex align-items-center justify-content-center" >
                                <div class="sidebar-brand-text mx-3">  {seller.firstName}</div>
                            </a>
                            <a class="d-flex align-items-center justify-content-center" href="/">
                                visit site
                            </a>
                        </div>
                    </div>
                    <hr class="sidebar-divider my-0" />

                    <li class="nav-item">
                        <Link to='' className={"nav-link " + (activePage == 1 ? 'active' : '')} onClick={() => { setActivePage(1); setTitle("Dashboard") }}>
                            <a > <i class="las la-th"></i><span> Dashboard</span>  </a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='services' className={"nav-link " + (activePage == 2 ? 'active' : '')} onClick={() => { setActivePage(2); setTitle("Add Services") }}>
                            <a > <i class="las la-gifts"></i><span> Add Service</span></a>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to='service_list' className={"nav-link " + (activePage == 3 ? 'active' : '')} onClick={() => { setActivePage(3); setTitle("Services") }}>
                            <a > <i class="las la-gifts"></i><span>Services</span> </a>
                        </Link>
                    </li>

                    <li class="nav-item">
                        <Link to='profile' className={"nav-link " + (activePage == 4 ? 'active' : '')} onClick={() => { setActivePage(4); setTitle("Profile") }}>
                            <a > <i class="las la-user"></i> <span>Profile</span> </a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to='' className={"nav-link " + (activePage == 8 ? 'active' : '')} onClick={() => { logout() }}>
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
                                <span>Copyright &copy; Sira-Alle Website {new Date().getFullYear()}</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
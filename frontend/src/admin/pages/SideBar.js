
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { is_logged_in, logout } from '../api'
import { ADMIN_HIDDEN_URL } from '../../config'
import { useEffect } from 'react'

export default function SideBar({ children }) {


    const [toggled, setToggled] = useState(false)
    const [activePage, setActivePage] = useState(1)
    const [title, setTitle] = useState("Dashboard")
    const [isSubAdmin, setIsSubAdmin] = useState("false")
    const navigate = useNavigate()

    const adminLogout = () => {
        logout((res) => {
            if (res.success) {
                navigate('/' + ADMIN_HIDDEN_URL + '/login')
            } else {
                console.log(res)
            }
        });
    }


    useEffect(() => {
        is_logged_in({}, (res) => {
            if (res.success) {
                // navigator('dashboard')
                setIsSubAdmin(res?.user?.isSubAdmin);
            } else {
                navigate('/' + ADMIN_HIDDEN_URL + '/login')
            }
        })
    }, [activePage])

    return (
        <>

            {
                isSubAdmin == "true" ? (
                    <>
                        <div id="wrapper">
                            <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " + (toggled ? 'toggled' : '')} id="accordionSidebar">
                                <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                                    <div class="sidebar-brand-icon rotate-n-15">
                                        <i class="fas fa-laugh-wink"></i>
                                    </div>
                                    <div class="sidebar-brand-text mx-3"> Sub Admin</div>
                                </Link>


                                <hr class="sidebar-divider my-0" />

                                {/* <li class="nav-item">
                                    <Link to='dashboard' className={"nav-link " + (activePage == 1 ? 'active' : '')} onClick={() => { setActivePage(1); setTitle("Dashboard") }}>
                                        <a > <i class="las la-th"></i><span> Dashboard</span>  </a>
                                    </Link>
                                </li> */}
                                {/* <li class="nav-item">
                        <Link to='service_approval' className={"nav-link " + (activePage == 2 ? 'active' : '')} onClick={() => { setActivePage(2); setTitle("Pending Services") }}>
                            <a > <i class="las la-gifts"></i><span> Approvals</span></a>
                        </Link>register_professional
                    </li> */}

                                {/* <li class="nav-item">
                                    <Link to='professionals_list' className={"nav-link " + (activePage == 3 ? 'active' : '')} onClick={() => { setActivePage(3); setTitle("Professionals") }}>
                                        <a > <i class="las la-gifts"></i><span>Professionals</span> </a>
                                    </Link>
                                </li> */}
                                {/* <li class="nav-item">
                                    <Link to='services_list' className={"nav-link " + (activePage == 4 ? 'active' : '')} onClick={() => { setActivePage(4); setTitle("Services") }}>
                                        <a > <i class="las la-gifts"></i><span>Services</span> </a>
                                    </Link>
                                </li> */}
                                <li class="nav-item">
                                    <Link to='register_professional' className={"nav-link " + (activePage == 5 ? 'active' : '')} onClick={() => { setActivePage(5); setTitle("Register Professional") }}>
                                        <a > <i class="las la-gifts"></i><span>Register Professional</span> </a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='create_service' className={"nav-link " + (activePage == 6 ? 'active' : '')} onClick={() => { setActivePage(6); setTitle("Create Service") }}>
                                        <a > <i class="las la-gifts"></i><span>Create Service</span> </a>
                                    </Link>
                                </li>

                                {/* <li class="nav-item">
                        <Link to='add_service' className={"nav-link " + (activePage == 7 ? 'active' : '')} onClick={() => { setActivePage(7); setTitle("Add Service") }}>
                            <a > <i class="las la-gifts"></i><span>Add Service</span> </a>
                        </Link>
                    </li> */}

                                {/* <li class="nav-item">
                                    <Link to='create_sub_admin' className={"nav-link " + (activePage == 8 ? 'active' : '')} onClick={() => { setActivePage(6); setTitle("Create Service") }}>
                                        <a > <i class="las la-gifts"></i><span>Create SubAdmin</span> </a>
                                    </Link>
                                </li> */}
                                <li class="nav-item">
                                    <Link className={"nav-link " + (activePage == 9 ? 'active' : '')} onClick={() => { adminLogout() }}>
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
                                            <span>Copyright &copy; Sira-Alle Website 2022</span>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div id="wrapper">
                            <ul className={"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion " + (toggled ? 'toggled' : '')} id="accordionSidebar">
                                <Link class="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                                    <div class="sidebar-brand-icon rotate-n-15">
                                        <i class="fas fa-laugh-wink"></i>
                                    </div>
                                    <div class="sidebar-brand-text mx-3"> Admin</div>
                                </Link>


                                <hr class="sidebar-divider my-0" />

                                <li class="nav-item">
                                    <Link to='dashboard' className={"nav-link " + (activePage == 1 ? 'active' : '')} onClick={() => { setActivePage(1); setTitle("Dashboard") }}>
                                        <a > <i class="las la-th"></i><span> Dashboard</span>  </a>
                                    </Link>
                                </li>
                                {/* <li class="nav-item">
                        <Link to='service_approval' className={"nav-link " + (activePage == 2 ? 'active' : '')} onClick={() => { setActivePage(2); setTitle("Pending Services") }}>
                            <a > <i class="las la-gifts"></i><span> Approvals</span></a>
                        </Link>register_professional
                    </li> */}

                                <li class="nav-item">
                                    <Link to='professionals_list' className={"nav-link " + (activePage == 3 ? 'active' : '')} onClick={() => { setActivePage(3); setTitle("Professionals") }}>
                                        <a > <i class="las la-gifts"></i><span>Professionals</span> </a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='services_list' className={"nav-link " + (activePage == 4 ? 'active' : '')} onClick={() => { setActivePage(4); setTitle("Services") }}>
                                        <a > <i class="las la-gifts"></i><span>Services</span> </a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='register_professional' className={"nav-link " + (activePage == 5 ? 'active' : '')} onClick={() => { setActivePage(5); setTitle("Register Professional") }}>
                                        <a > <i class="las la-gifts"></i><span>Register Professional</span> </a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='create_service' className={"nav-link " + (activePage == 6 ? 'active' : '')} onClick={() => { setActivePage(6); setTitle("Create Service") }}>
                                        <a > <i class="las la-gifts"></i><span>Create Service</span> </a>
                                    </Link>
                                </li>

                                {/* <li class="nav-item">
                        <Link to='add_service' className={"nav-link " + (activePage == 7 ? 'active' : '')} onClick={() => { setActivePage(7); setTitle("Add Service") }}>
                            <a > <i class="las la-gifts"></i><span>Add Service</span> </a>
                        </Link>
                    </li> */}

                                <li class="nav-item">
                                    <Link to='create_sub_admin' className={"nav-link " + (activePage == 8 ? 'active' : '')} onClick={() => { setActivePage(6); setTitle("Create Service") }}>
                                        <a > <i class="las la-gifts"></i><span>Create SubAdmin</span> </a>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link className={"nav-link " + (activePage == 9 ? 'active' : '')} onClick={() => { adminLogout() }}>
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
                                            <span>Copyright &copy; Sira-Alle Website 2022</span>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    </>
                )
            }


        </>
    )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logout } from '../pages/Logout'
import { sellerLogout } from '../api/sellerLogout'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { SellerContext } from '../context/seller-context'
export default function Dashboard({ children }) {

    const seller = useContext(SellerContext);

    const [activePage, setActivePage] = useState(1)

    const navigate = useNavigate()

    const logout= () => {
        sellerLogout((data) => {
            if(data){
                if(data.success){
                    navigate("/")
                }else{
    
                }
            }
        })
    }
    

    return (
        <>
            {/* <div class="preloader" id="preloader">
                <div class="preloader-inner">
                    <div class="loader_bars">
                        <span></span>
                    </div>
                </div>
            </div> */}
            <div class="body-overlay"></div>
            <div class="dashboard-area dashboard-padding">
                <div class="container-fluid">
                    <div class="dashboard-contents-wrapper">
                        <div class="dashboard-icon">
                            <div class="sidebar-icon">
                                <i class="las la-bars"></i>
                            </div>
                        </div>
                        <div class="dashboard-left-content">
                            <div class="dashboard-close-main">
                                <div class="close-bars"> <i class="las la-times"></i> </div>
                                <div class="dashboard-top padding-top-40">
                                    <div class="thumb">
                                        <img src={seller.img != "" ? seller.img : "imgs/user_profile.png"} alt="No Image" />
                                    </div>
                                    <div class="author-content">
                                        <h4 class="title"> {seller.firstName} </h4>
                                        <Link to="/"> <strong><a >Visit Site</a></strong></Link>
                                    </div>
                                </div>
                                <div class="dashboard-bottom margin-top-35 margin-bottom-10">
                                    <ul class="dashboard-list ">
                                        <Link to='' onClick={() => { setActivePage(1) }}>
                                            <li className={"list " + (activePage == 1 ? 'active' : '')}>
                                                <a > <i class="las la-th"></i> Dashboard </a>
                                            </li>
                                        </Link>
                                        <Link to='services' onClick={() => { setActivePage(2) }}>
                                            <li className={"list " + (activePage == 2 ? 'active' : '')}>
                                                <a > <i class="las la-gifts"></i>Add Service</a>
                                            </li>
                                        </Link>
                                        <Link to='service_list' onClick={() => { setActivePage(3) }}>
                                            <li className={"list " + (activePage == 3 ? 'active' : '')}>
                                                <a > <i class="las la-gifts"></i>Services </a>
                                            </li>
                                        </Link>
                                        <Link to='profile' onClick={() => { setActivePage(5) }}>
                                            <li className={"list " + (activePage == 5 ? 'active' : '')}>
                                                <a > <i class="las la-user"></i> Profile </a>
                                            </li>
                                        </Link>
                                        {/* <Link to='payment' onClick={() => { setActivePage(6) }}>
                                            <li className={"list " + (activePage == 6 ? 'active' : '')}>
                                                <a > <i class="las la-wallet"></i> Payment </a>
                                            </li>
                                        </Link> */}
                                        <Link to='settings' onClick={() => { setActivePage(7) }}>
                                            <li className={"list " + (activePage == 7 ? 'active' : '')}>
                                                <a > <i class="las la-cog"></i> Settings </a>
                                            </li>
                                        </Link>
                                        <li className={"list " + (activePage == 8 ? 'active' : '')} onClick={() => {logout()}}>
                                            <a> <i class="las la-sign-out-alt"></i> Log Out </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="dashboard-logo padding-top-100">
                                    <a href="/" class="logo">
                                        <img src="imgs/new_logo_1.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="dashboard-right">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
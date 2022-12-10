
import { useContext, useEffect, useState } from "react"
import { SellerContext } from "../context/seller-context";
import { getSeller } from "../../user/api/getSeller";
import { Link } from "react-router-dom";
import { get_professional_average_rating } from "../api";
export const SellerDashboard = () => {

    // const seller = useContext(SellerContext);
    const [seller, setSeller] = useState({
        _id: "",
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        services: [],
    })

    const [averageRating, setAvarageRating] = useState(0)

    const doStuff = () => {
        getSeller((data) => {
            console.log("this is data", data)

        })
    }

    useEffect(() => {
        getSeller((data) => {
            setSeller(data)
            get_professional_average_rating({_id: data._id}, (res) => {
                if(res.success){
                    setAvarageRating(res.average_rating)
                }
            })
        })
    },[])

    useEffect(() => {
        
    }, [seller])
    return (
        <>
            {/* <div class="row">
                <div class="col-lg-12">
                    <div class="dashboard-flex-title">
                        <div class="dashboard-settings margin-top-40">
                            <h2 class="dashboards-title">Professional Dashboard</h2>
                        </div>
                        <div class="info-bar-item">

                        </div>
                    </div>
                </div>
            </div> */}
            <div class="row">
                <div class="col-xl-4 col-md-6 margin-top-30 orders-child">
                    <div class="single-orders">
                        <div class="orders-shapes">
                            <img src="https://elouzeir.sprintstudio.net/assets/frontend/img/static/orders-shapes.png" alt="" />
                        </div>
                        <div class="orders-flex-content">
                            <div class="icon">
                                <i class="las la-tasks"></i>
                            </div>
                            <div class="contents">
                                <h2 class="order-titles"> {seller.services.length} </h2>
                                <span class="order-para">Total Services </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="col-xl-4 col-md-6 margin-top-30 orders-child">
                    <div class="single-orders">
                        <div class="orders-shapes">
                            <img src="https://elouzeir.sprintstudio.net/assets/frontend/img/static/orders-shapes3.png" alt="" />
                        </div>
                        <div class="orders-flex-content">
                            <div class="icon">
                                <i class="las la-phone"></i>
                            </div>
                            <div class="contents">
                                <h2 class="order-titles"> {seller.numOfCalls} </h2>
                                <span class="order-para">Total Calls </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-md-6 margin-top-30 orders-child">
                    <div class="single-orders">
                        <div class="orders-shapes">
                            <img src="https://elouzeir.sprintstudio.net/assets/frontend/img/static/orders-shapes2.png" alt="" />
                        </div>
                        <div class="orders-flex-content">
                            <div class="icon">
                                <i class="las la-star"></i>
                            </div>
                            <div class="contents">
                                <h2 class="order-titles"> {averageRating} </h2>
                                <span class="order-para"> Avarage Rating</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="dashboard-middle-flex">

                <div class="single-flex-middle">
                    <div class="single-flex-middle-inner">
                        <div class="line-charts-wrapper margin-top-40">
                            <div class="line-top-contents">
                                <h5 class="earning-title">This Week Summary </h5>
                            </div>
                            <div class="chart-summery-inner">
                                <div class="single-chart-summery">
                                    <div class="icon">
                                        <i class="las la-eye"></i>
                                    </div>
                                    <div class="contents">
                                        <h4 class="title">? </h4>
                                        <span class="title-para">Views </span>
                                    </div>
                                </div>
                                <div class="single-chart-summery">
                                    <div class="icon">
                                        <i class="las la-phone"></i>
                                    </div>
                                    <div class="contents">
                                        <h4 class="title">  {seller.weeklyCalls}  </h4>
                                        <span class="title-para">Calls </span>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="line-charts-wrapper margin-top-40">
                            <div class="line-top-contents">
                                <h5 class="earning-title">This Month summary </h5>
                            </div>
                            <div class="chart-summery-inner">
                                <div class="single-chart-summery">
                                    <div class="icon">
                                        <i class="las la-eye"></i>
                                    </div>
                                    <div class="contents">
                                        <h4 class="title">? </h4>
                                        <span class="title-para">Views </span>
                                    </div>
                                </div>
                                <div class="single-chart-summery">
                                    <div class="icon">
                                        <i class="las la-phone"></i>
                                    </div>
                                    <div class="contents">
                                        <h4 class="title">  {seller.monthlyCalls}  </h4>
                                        <span class="title-para">Calls </span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>



      
        </>
    )
}
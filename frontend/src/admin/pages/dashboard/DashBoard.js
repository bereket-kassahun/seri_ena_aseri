import { LineGraph } from "./LineGraph"
import "./style.css"
import { useContext, useEffect, useState } from "react"
import { get_info, get_professional_count, get_service_count, get_user_count } from '../../api'
import { AreaGraph } from "./AreaGraph"
import { Line } from "victory"
export const Dashboard = () => {


    const [serviceCount, setServiceCount] = useState(0)
    const [userCount, setUserCount] = useState(0)
    const [sellerCount, setSellerCount] = useState(0)
    const [serviceData, setServiceData] = useState([])
    const [sellerData, setSellerData] = useState([{x: new Date(), y: 0}])

    useEffect(() => {
        get_service_count((res) => {

            if (res.success) {
                setServiceCount(res.count)
            }
        })

        get_user_count((res) => {
            if (res.success) {
                setUserCount(res.count)
            }
        })

        get_professional_count((res) => {
            if (res.success) {
                setSellerCount(res.count)
            }
        })

        get_info((res) => {
            if (res.success) {
                const info = res.info
                const temp1 = info?.currentMonthRegisteredServices
                let temp2 = []
                let count1 = 1
                for (var propt in temp1) {
                    // console.log(propt + ': ' + obj[propt]);
                    temp2.push({ x: new Date((new Date).getFullYear(), (new Date).getMonth(), count1), y: temp1[propt] })
                    count1++
                }
                setServiceData([...temp2])

                const temp3 = info?.currentMonthRegisteredSellers
                let temp4 = []
                let count2 = 1
                for (var propt in temp3) {
                    // console.log(propt + ': ' + obj[propt]);
                    temp4.push({ x: new Date((new Date).getFullYear(), (new Date).getMonth(), count2), y: temp3[propt] })
                    count2++
                }
                setSellerData([...temp4])
                
                console.log(temp4)
            }else{
                console.log(res)
            }
        })
    }, [])

    return (
        <>
            <div class="row">
                <div class="col-xl-4 col-md-6 margin-top-30 orders-child">
                    <div class="card border-left-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                        Total Sellers</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800">{sellerCount}</div>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-person-check-fill fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-md-6 margin-top-30 orders-child">
                    <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                        Total Services</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"> {serviceCount} </div>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-stack fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-md-6 margin-top-30 orders-child">
                    <div class="card border-left-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Total Users
                                    </div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"> {userCount} </div>
                                </div>
                                <div class="col-auto">
                                    <i class="bi bi-people-fill fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div class="row" style={{ paddingTop: "20px" }}>

                <div class="col-md-6 col-lg-6 single-chart-summery">
                    <div class="card">
                        <div class="card-header">
                            <h5>This Month Registered Professionals</h5>
                        </div>
                        <div class="card-block">
                            <div class="">

                                <AreaGraph data={sellerData}
                                    lineStroke="#200066FF"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-lg-6 single-chart-summery">
                    <div class="card">
                        <div class="card-header">
                            <h5>This Month Registered Services</h5>
                        </div>
                        <div class="card-block">
                            <div class="">
                                <AreaGraph data={serviceData}
                                    lineStroke="#2BAE66FF"
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
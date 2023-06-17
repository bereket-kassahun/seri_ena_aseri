
import { SellerContext } from "../context/seller-context";
import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
// import "./editor.css"


import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { get_payment_link, verify_payment } from '../api';
export const Payment = () => {

    const navigate = useNavigate()

    const location = useLocation()

    let service = location.state ? location.state : {}

    const {seller, updateCurrentSeller} = useContext(SellerContext);

    let temp = ""
    switch (service.serviceType) {
        case 0:
            temp = "39"
            break;
        case 1:
            temp = "59"
            break;
        case 2:
            temp = "79"
            break;
        default:
            break;
    }

    const info = {
        amount: temp,
        _id: seller._id,
        email: seller.email,
        firstName: seller.firstName,
        lastName: seller.lastName,
        title: "Sira Alle",
        description: "This is a payment originated from Sira Alle",
        callBackUrl: "http://serrale.com/seller/verify_payment"
    }



    const notifySuccess = (msg) =>
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

    const notifyError = (msg) =>
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });


    const goToPayment = () => {
        get_payment_link({ ...info }, (res) => {
            if (res.success) {
                window.open(res.checkout_url, '_blank');
                setVerifyVisible(true)
            } else {
                notifyError("Error Occured")
            }
        })
    }

    const verifyPayment = () => {
        verify_payment({_id: seller._id}, (res) => {
            if(res.success){
                notifySuccess("Your Payment was Successfull!")
                navigate('/seller/service_list')
            }else{
                notifyError("Error: The payment is not done yet!")
            }
        })
    }


    const [verifyVisible, setVerifyVisible] = useState(false)

    return (
        <>
            <ToastContainer />
            <div class="row" >
                <div class="row">
                    <div class="col-md-12" >
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Payment</h3>
                            </div>
                            <div class="card-body" style={{ textAlign: "center" }}>
                                <div class="col-lg-12" >

                                    {
                                        verifyVisible ? (
                                            <button type="button" class="btn btn-success btn-circle btn-xl"
                                             style={{
                                                width: "100px",
                                                height: "100px",
                                                padding: "13px 18px",
                                                borderRadius: "60px",
                                                fontSize: "15px",
                                                textAlign: "center"
                                            }}
                                            onClick={(evnt) => {verifyPayment()}}
                                            >
                                                Verify Payment
                                            </button>
                                        ) : (

                                            <div class="card mb-4">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="mb-0">Service Type</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <p class="text-muted mb-0">
                                                                {
                                                                    service.serviceType == 0 && "Basic"
                                                                }
                                                                {
                                                                    service.serviceType == 1 && "Standard"
                                                                }
                                                                {
                                                                    service.serviceType == 2 && "Premium"
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="mb-0">Reciver Account</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <p class="text-muted mb-0">07866654523</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="mb-0">Amount</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <p class="text-muted mb-0">
                                                                {
                                                                    service.serviceType == 0 && "39 Birr"
                                                                }
                                                                {
                                                                    service.serviceType == 1 && "59 Birr"
                                                                }
                                                                {
                                                                    service.serviceType == 2 && "79 Birr"
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="mb-0">Bank</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <p class="text-muted mb-0">Comercial Bank Of Ethiopia</p>
                                                        </div>
                                                    </div>
                                                    <hr />

                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="single-dashboard-input" >
                <div class="single-info-input">
                    <div class="form-group ">
                        <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "right" }} >
                            {
                                !verifyVisible && (
                                    <button type="button" class="btn btn-info " onClick={() => { goToPayment() }}>
                                        Proceed to Payment
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
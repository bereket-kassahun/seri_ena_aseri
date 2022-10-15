import { EditorState } from 'draft-js';
import { uploadImage } from '../api/uploadImage';
import { serviceRegister } from '../api/serviceRegister';
import { SellerContext } from "../context/seller-context";
import { useContext, useState } from "react"
import { useLocation } from "react-router-dom"
import { transaction_register } from '../api';
// import "./editor.css"

export const Payment = () => {

    const location = useLocation()

    let row = location.state ? location.state : ""
    let service = row.row

    const seller = useContext(SellerContext);

    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")


    const [date, setDate] = useState("")
    const [transactionId, setTransactionId] = useState("")


    const validateData = () => {
        if (date == "" || transactionId == "" ) {
            setErrorMsg("Please fill all fields!")
            setSuccessMsg("")
            return false
        }
        if (seller == null || seller._id == null) {
            setErrorMsg("Please Login first!")
            setSuccessMsg("")
            return false
        }
        setErrorMsg("")
        return true
    }

    const register = () => {
        transaction_register({serviceId : service._id, date: date, transactionId: transactionId}, (data) => {
            if(data.success){
                setErrorMsg("")
                setSuccessMsg("Verification Requested Successfully!")
            }else{
                setErrorMsg("Unable to Request for Verification!")
                setSuccessMsg("")
            }
        })
    }




    return (
        <>
            {/* <div class="row">
                <div class="col-lg-12">
                    <div class="dashboard-settings margin-top-40">
                        <h2 class="dashboards-title"> Entry Service </h2>
                    </div>
                </div>
            </div> */}
            {
                errorMsg.length > 0 && (
                    <div class="alert alert-danger margin-top-20" role="alert">
                        {errorMsg}
                    </div>
                )
            }

            {
                successMsg.length > 0 && (
                    <div class="alert alert-primary margin-top-20" role="alert">
                        {successMsg}
                    </div>
                )
            }

            <div class="row" >
                <section class="content margin-top-10" style={{ width: "100%" }} >
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Payment</h3>
                                </div>
                                <div class="card-body">
                                    <div class="col-lg-8">
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
                                                        <p class="text-muted mb-0">Comersial Bank Of Ethiopia</p>
                                                    </div>
                                                </div>
                                                <hr />

                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        {/* <label for="inputName">Project Name</label>
                                        <input type="text" id="inputName" class="form-control"/> */}
                                        <label for="title" > Date* </label>
                                        <input class="form-control" name="title" id="title" type="text" placeholder="Add Date" onChange={(evnt) => { setDate(evnt.target.value) }} />

                                    </div>
                                    <div class="form-group">
                                        {/* <label for="inputName">Project Name</label>
                                        <input type="text" id="inputName" class="form-control"/> */}
                                        <label for="title" > Transaction ID* </label>
                                        <input class="form-control" name="id" id="id" type="text" placeholder="Add transaction id" onChange={(evnt) => { setTransactionId(evnt.target.value) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="single-dashboard-input" >
                <div class="single-info-input margin-top-30">
                    <div class="form-group ">
                        <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "right" }} >
                            <button type="button" class="btn btn-info " onClick={() => {
                                if (validateData()) {
                                    register()
                                }
                            }}>
                                Request Verification
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
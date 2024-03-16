


import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { SellerContext } from "../context/seller-context";
import { uploadImage } from "../api/uploadImage";
import { update_professional } from "../api";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { UpgradeServiceModal } from "../common/UpgradeServiceModal";

export const Profile = () => {

    const { seller, updateCurrentSeller } = useContext(SellerContext);

    const [uploadingInProgress, setUploadingInProgress] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    const [_id, set_Id] = useState(seller._id)
    const [firstName, setFirstName] = useState(seller.firstName)
    const [lastName, setLastName] = useState(seller.lastName)
    const [email, setEmail] = useState(seller.email)
    const [img, setImg] = useState(seller?.img ? seller?.img : "https://elouzeir.sprintstudio.net/assets/frontend/img/static/user_profile.png")
    const [phoneNumber, setPhoneNumber] = useState(seller.phoneNumber)
    const [companyName, setCompanyName] = useState(seller.companyName)
    const [address1, setAddress1] = useState(seller.address1)
    const [address2, setAddress2] = useState(seller.address2)
    const [city, setCity] = useState(seller.city)
    const [country, setCountry] = useState(seller.country)
    const [telephone, setTelephone] = useState(seller.telephone)
    const [howDidYouHear, setHowDidYouHear] = useState(seller.howDidYouHear)
    const [whereDidYouHear, setWhereDidYouHear] = useState(seller.whereDidYouHear)
    const [workingLocation, setWorkingLocation] = useState(seller.workingLocation)
    const [areasCovered, setAreasCovered] = useState(seller.areasCovered)
    const [paymentLevel, setPaymentLevel] = useState(seller.paymentLevel)
    const [availability, setAvailability] = useState(seller?.availability)




    let [tierView, setTierView] = useState();

    const onFileChange = (evnt) => {

        let files = Array.from(evnt.target.files)

        if (files.length == 0) {
            return;
        }

        setUploadingInProgress(true)

        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })

        uploadImage(formData, (res) => {
            if (res.success) {
                res.payload.forEach((data, i) => {
                    setImg(data.secure_url)
                    setUploadingInProgress(false)
                })
            } else {
                if (res.error.message)
                    notifyError(res.error.message)
            }
        })
    }

    const update = () => {
        if (uploadingInProgress) {
            notifyError("uploading image in progress")
            return
        }
        const data = {
            _id, firstName, lastName, email, phoneNumber, img,
            companyName, address1, address2, city, country, telephone, howDidYouHear,
            whereDidYouHear, workingLocation, areasCovered, availability
        }
        update_professional(data, (res) => {
            if (res.success) {
                notifySuccess("Successfully Updated")
                updateCurrentSeller({...seller,...data})
            } else {
                notifyError("unable to update")
            }
        })
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


    return (
        <>
            <div class="row">
                {/* <div class="profile-info-dashboard margin-top-40">
                    <div class="profile-btn-flex">
                        <h2 class="dashboards-title"> Profile Information </h2>
                    </div>
                </div> */}


                <ToastContainer />

                <div class="container-xl px-4 mt-4" >
                    <hr class="mt-0 mb-4" />
                    <div class="row">

                        <div class="col-xl-4">
                            <div class="card mb-4 ">
                                <div class="card-header">{seller?.text?.profile?.profilePicture}</div>
                                <div class="card-body text-center">
                                    <img class="img-account-profile rounded-circle mb-2" src={img} alt="" />
                                    <div class="small font-italic text-muted mb-4">{seller?.text?.profile?.profilePictureDescription}</div>
                                    <input type='file' id='single' accept="image/png,  image/jpeg" name="Upload new image" onChange={(evnt) => { onFileChange(evnt) }} />
                                </div>
                            </div>


                            {/* <div class="card mb-4 " >
                                <div class="card-header">Current Tier Level</div>
                                {
                                    tierView
                                }
                                <div style={{ marginTop: "10px", with: "100%", textAlign: "center" }}>
                                    <button type="button" class="btn btn-primary btn-lg btn-open-modal" data-bs-toggle="modal" data-bs-target="#modal-preview-upgrade-service" onClick={() => { }}>
                                        Upgrade Tier Level
                                    </button>
                                </div>
                            </div> */}

                            <div class="card mb-4 " >
                                <div class="card-header">{seller?.text?.profile?.availability}</div>
                                <div class="form-group input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"> <b> {seller?.text?.profile?.availability} </b> </span>
                                    </div>
                                    {/*  */}
                                    <select class="custom-select" defaultValue={availability} style={{ maxwidth: "60px" }} onChange={(evnt) => { setAvailability(evnt.target.value) }}>
                                        <option value={"Available"}>Available</option>
                                        <option value={"Short Term Contract"} >Short Term Contract</option>
                                        <option value={"On Training"} >On Training</option>
                                        <option value={"On Permanent Employement"} >On Permanent Employement</option>

                                    </select>
                                </div>
                            </div>



                            <div class="card mb-4 " >
                                <div class="card-header">{seller?.text?.profile?.yourWorkingLocation}</div>
                                <div class="card-body ">
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputOrgName">{seller?.text?.profile?.areasCovered}</label>
                                        <textarea class="form-control" rows={5} id="inputOrgName" type="text" placeholder="Enter the regional areas you cover" value={workingLocation} onChange={(evnt) => {
                                            setWorkingLocation(evnt.target.value)
                                        }} />
                                    </div>
                                </div>
                            </div>

                            <div class="card mb-4 " >
                                <div class="card-header">{seller?.text?.profile?.yourWorkingTrade}</div>
                                <div class="card-body ">
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputOrgName">{seller?.text?.profile?.areasCovered}</label>
                                        <textarea class="form-control" rows={5} id="inputOrgName" type="text" placeholder="Enter any trades or other services offered by your company" value={areasCovered} onChange={(evnt) => {
                                            setAreasCovered(evnt.target.value)
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8" >
                            <div class="card mb-4">
                                <div class="card-header">{seller?.text?.profile?.yourDetails}</div>
                                <div class="card-body">
                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputFirstName">{seller?.text?.profile?.firstName}</label>
                                            <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={firstName} onChange={(evnt) => {
                                                setFirstName(evnt.target.value)
                                            }} />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputLastName">{seller?.text?.profile?.lastName}</label>
                                            <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value={lastName} onChange={(evnt) => {
                                                setLastName(evnt.target.value)
                                            }} />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputOrgName">{seller?.text?.profile?.companyName}</label>
                                        <input class="form-control" id="inputOrgName" type="tel" placeholder="Enter your company name" value={companyName} onChange={(evnt) => {
                                            setCompanyName(evnt.target.value)
                                        }} />
                                    </div>

                                </div>
                            </div>

                            <div class=" card mb-4" >
                                <div class="card-header">{seller?.text?.profile?.yourContactDetails}</div>
                                <div class="card-body">

                                    {/* <div class="mb-3">
                                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
                                        </div> */}
                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputFirstName">{seller?.text?.profile?.address1}</label>
                                            <input class="form-control" id="inputFirstName" type="text" placeholder={seller?.text?.profile?.address1} value={address1} onChange={(evnt) => {
                                                setAddress1(evnt.target.value)
                                            }} />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputLastName">{seller?.text?.profile?.address2}</label>
                                            <input class="form-control" id="inputLastName" type="text" placeholder={seller?.text?.profile?.address2} value={address2} onChange={(evnt) => {
                                                setAddress2(evnt.target.value)
                                            }} />
                                        </div>
                                    </div>
                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputFirstName">{seller?.text?.profile?.city}</label>
                                            <input class="form-control" id="inputFirstName" type="text" placeholder={seller?.text?.profile?.city} value={city} onChange={(evnt) => {
                                                setCity(evnt.target.value)
                                            }} />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputLastName">{seller?.text?.profile?.country}</label>
                                            <input class="form-control" id="inputLastName" type="text" placeholder={seller?.text?.profile?.country} value={country} onChange={(evnt) => {
                                                setCountry(evnt.target.value)
                                            }} />
                                        </div>
                                    </div>

                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputFirstName">{seller?.text?.profile?.telephoneLandline}</label>
                                            <input class="form-control" id="inputFirstName" type="text" placeholder={seller?.text?.profile?.telephoneLandline} value={telephone} onChange={(evnt) => {
                                                setTelephone(evnt.target.value)
                                            }} />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputLastName">{seller?.text?.profile?.mobile}</label>
                                            <input class="form-control" id="inputLastName" type="tel" placeholder={seller?.text?.profile?.mobile} value={phoneNumber} onChange={(evnt) => {
                                                setPhoneNumber(evnt.target.value)
                                            }} />
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputOrgName">{seller?.text?.profile?.email}</label>
                                        <input class="form-control" id="inputOrgName" type="text" placeholder={seller?.text?.profile?.email} value={email} onChange={(evnt) => {
                                            setEmail(evnt.target.value)
                                        }} />
                                    </div>
                                </div>
                            </div>

                            <div class=" card mb-4" style={{ width: "100%" }}>
                                <div class="card-header">{seller?.text?.profile?.howDidYouHearAboutUs}</div>
                                <div class="card-body">

                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputFirstName">{seller?.text?.profile?.howDidYouHearAboutUs}</label>
                                            <textarea rows={3} class="form-control" id="inputFirstName" type="text" placeholder="TV Radio OtherS..." value={howDidYouHear} onChange={(evnt) => {
                                                setHowDidYouHear(evnt.target.value)
                                            }} />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="small mb-1" for="inputLastName">{seller?.text?.profile?.whereDidYouHearAboutUs}</label>
                                            <textarea rows={3} class="form-control" id="inputLastName" type="text" placeholder="Fana TV Facebook Shegar Radio... " value={whereDidYouHear} onChange={(evnt) => {
                                                setWhereDidYouHear(evnt.target.value)
                                            }} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <button type="button" class="btn btn-info " onClick={(evnt) => { evnt.preventDefault(); update() }}>
                        {seller?.text?.profile?.saveChanges}
                    </button>

                </div>

            </div>

            <UpgradeServiceModal currentLevel={paymentLevel} />
        </>
    )
}





import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import { SellerContext } from "../context/seller-context";
import { uploadImage } from "../api/uploadImage";
import { update_professional } from "../api";
export const Profile = () => {

    const seller = useContext(SellerContext);

    const [uploadingInProgress, setUploadingInProgress] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    const [_id, set_Id] = useState(seller._id)
    const [firstName, setFirstName] = useState(seller.firstName)
    const [lastName, setLastName] = useState(seller.lastName)
    const [email, setEmail] = useState(seller.email)
    const [img, setImg] = useState(seller.img ? seller.img : "https://elouzeir.sprintstudio.net/assets/frontend/img/static/user_profile.png")
    const [phoneNumber, setPhoneNumber] = useState(seller.phoneNumber)


    const onFileChange = (evnt) => {
        setUploadingInProgress(true)
        const files = Array.from(evnt.target.files)
        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })

        uploadImage(formData, (res) => {
            res.forEach((data, i) => {
                // setImg(data.secure_url)
                setImg(data.secure_url)
            })
            setUploadingInProgress(false)
        })
    }

    const update = () => {
        if (uploadingInProgress) {
            alert("uploading image in progress")
            return
        }
        update_professional({ _id, firstName, lastName, email, phoneNumber, img }, (res) => {
            if (res.success) {
                setSuccessMsg("Successfully Updated")
                setErrorMsg("")
            } else {
                setErrorMsg("unable to update")
                setSuccessMsg("")
            }
        })
    }
    return (
        <>
            <div class="row">
                {/* <div class="profile-info-dashboard margin-top-40">
                    <div class="profile-btn-flex">
                        <h2 class="dashboards-title"> Profile Information </h2>
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

                <div class="container-xl px-4 mt-4" >
                    <hr class="mt-0 mb-4" />
                    <div class="row">

                        <div class="col-xl-4">
                            <div class="card mb-4 ">
                                <div class="card-header">Profile Picture</div>
                                <div class="card-body text-center">
                                    <img class="img-account-profile rounded-circle mb-2" src={img} alt="" />
                                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                    <input type='file' id='single' accept="image/png, image/gif, image/jpeg" name="Upload new image" onChange={(evnt) => { onFileChange(evnt) }} />
                                </div>
                            </div>

                            <div class="card mb-4 " >
                                <div class="card-header">Your working Location</div>
                                <div class="card-body ">
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputOrgName">Areas Covered</label>
                                        <textarea class="form-control" rows={5} id="inputOrgName" type="text" placeholder="Enter the regional areas you cover" />
                                    </div>
                                </div>
                            </div>

                            <div class="card mb-4 " >
                                <div class="card-header">Your working Trade</div>
                                <div class="card-body ">
                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputOrgName">Areas Covered</label>
                                        <textarea class="form-control" rows={5} id="inputOrgName" type="text" placeholder="Enter any trades or other services offered by your company" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-8" >
                            <div class="card mb-4">
                                <div class="card-header">Your details</div>
                                <div class="card-body">
                                    <form>
                                        <div class="row gx-3 mb-3">
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputFirstName">First name</label>
                                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value={firstName} onChange={(evnt) => {
                                                    setFirstName(evnt.target.value)
                                                }} />
                                            </div>
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputLastName">Last name</label>
                                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value={lastName} onChange={(evnt) => {
                                                    setLastName(evnt.target.value)
                                                }} />
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label class="small mb-1" for="inputOrgName">Company Name</label>
                                            <input class="form-control" id="inputOrgName" type="tel" placeholder="Enter your company name"  />
                                        </div>

                                    </form>
                                </div>
                            </div>

                            <div class=" card mb-4" >
                                <div class="card-header">Your contact details</div>
                                <div class="card-body">
                                    <form>
                                        {/* <div class="mb-3">
                                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username" />
                                        </div> */}
                                        <div class="row gx-3 mb-3">
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputFirstName">Address 1</label>
                                                <input class="form-control" id="inputFirstName" type="text" placeholder="Address 1" />
                                            </div>
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputLastName">Address 2</label>
                                                <input class="form-control" id="inputLastName" type="text" placeholder="Address 2"  />
                                            </div>
                                        </div>
                                        <div class="row gx-3 mb-3">
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputFirstName">City</label>
                                                <input class="form-control" id="inputFirstName" type="text" placeholder="City"  />
                                            </div>
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputLastName">Country</label>
                                                <input class="form-control" id="inputLastName" type="text" placeholder="Country" />
                                            </div>
                                        </div>

                                        <div class="row gx-3 mb-3">
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputFirstName">Telephone(Landline)</label>
                                                <input class="form-control" id="inputFirstName" type="text" placeholder="telephone number" />
                                            </div>
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputLastName">Mobile</label>
                                                <input class="form-control" id="inputLastName" type="tel" placeholder="mobile number" value={phoneNumber} onChange={(evnt) => {
                                                    setPhoneNumber(evnt.target.value)
                                                }} />
                                            </div>
                                        </div>

                                        <div class="mb-3">
                                            <label class="small mb-1" for="inputOrgName">Email</label>
                                            <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your email" value={email} onChange={(evnt) => {
                                                setEmail(evnt.target.value)
                                            }} />
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class=" card mb-4" style={{ width: "100%" }}>
                                <div class="card-header">How did you hear about us</div>
                                <div class="card-body">
                                    <form>
                                        <div class="row gx-3 mb-3">
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputFirstName">How did you hear about us?</label>
                                                <textarea rows={3} class="form-control" id="inputFirstName" type="text" placeholder="TV Radio OtherS..." />
                                            </div>
                                            <div class="col-md-6">
                                                <label class="small mb-1" for="inputLastName">Where did you hear abut us</label>
                                                <textarea rows={3} class="form-control" id="inputLastName" type="text" placeholder="Fana TV Facebook Shegar Radio... "  />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="single-dashboard-input" >
                        <div class="single-info-input margin-top-30">
                            <div class="form-group ">
                                <div class="media-upload-btn-wrapper" style={{ position: 'relative', float: "right" }} >
                                    <button type="button" class="btn btn-info " onClick={() => { update() }}>
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}


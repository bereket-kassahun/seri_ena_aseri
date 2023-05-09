





import { useContext, useState } from "react"
import { SellerContext } from "../context/seller-context";
export const EditProfile = () => {

    const {seller, updateCurrentSeller} = useContext(SellerContext);

    const [firstName, setFirstName] = useState(seller.firstName)
    const [lastName, setLastName] = useState(seller.lastName)
    const [email, setEmail] = useState(seller.email)
    const [phoneNumber, setPhoneNumber] = useState(seller.phoneNumber)

    return (
        <>
            <div class="row">
                <div class="dashboard-address-details">

                    <div class="mt-5">  </div>

                    <form action="https://elouzeir.sprintstudio.net/seller/profile-edit" method="post">
                        <input type="hidden" name="_token" value="LVBP0YrHdLffpBmSEeUAeHrLvA3CyeZ7woB6hU2W" />                                                    <div class="single-dashboard-input">
                            <div class="single-info-input margin-top-30">
                                <label class="info-title"> First Name* </label>
                                <input class="form--control" type="text" name="name" value={firstName} onChange={(evnt) => {
                                    setFirstName(evnt.target.value)
                                }} />
                            </div>
                            <div class="single-info-input margin-top-30">
                                <label class="info-title"> Last Name* </label>
                                <input class="form--control" type="email" name="email"  value={lastName} onChange={(evnt) => {
                                    setLastName(evnt.target.value)
                                }} />
                            </div>
                        </div>
                        <div class="single-dashboard-input">
                            <div class="single-info-input margin-top-30">
                                <label class="info-title"> Phone Number* </label>
                                <input class="form--control" type="text" name="phone"   value={phoneNumber} onChange={(evnt) => {
                                    setPhoneNumber(evnt.target.value)
                                }}/>
                            </div>
                            <div class="single-info-input margin-top-30">
                                <label class="info-title"> Email* </label>
                                <input class="form--control" type="email" name="email"  value={email} onChange={(evnt) => {
                                    setEmail(evnt.target.value)
                                }} />
                            </div>
                        </div>

                        

                        <div class="single-dashboard-input">
                            <div class="single-info-input margin-top-30">
                                <div class="form-group">
                                    <div class="media-upload-btn-wrapper">
                                        <div class="img-wrap">

                                        </div>
                                        <input type="hidden" id="image" name="image" value="" />
                                        <button type="button" class="btn btn-info media_upload_form_btn" data-btntitle="Select Image" data-modaltitle="Upload Image" data-toggle="modal" data-target="#media_upload_modal">
                                            Upload Profile Image
                                        </button>
                                    </div>
                                    <small class="form-text text-muted">allowed image format: jpg,jpeg,png</small>
                                </div>
                            </div>
                        </div>
                        <small class="text-danger">recomended size 500x443</small>
                        <div class="btn-wrapper margin-top-35">
                            <button type="submit" class="btn cmn-btn btn-bg-1">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}




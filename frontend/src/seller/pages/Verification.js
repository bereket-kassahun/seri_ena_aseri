


import { useContext } from "react"
import { SellerContext } from "../context/seller-context";
export const Verification = () => {

    const seller = useContext(SellerContext);

    return (
        <>
            <div class="row">
                <div class="col-lg-12 margin-top-40">
                    <div class="edit-profile">
                        <div class="profile-info-dashboard">
                            <h2 class="dashboards-title"> Profile Verify </h2>
                            <small class="text-danger">Submit your original documents so that the admin can verify you. Once verified a badge will show in your profile that increase your order posibility</small>
                            <div class="dashboard-profile-flex">
                                <div class="dashboard-address-details">

                                    <div class="mt-5">  </div>

                                    <form action="https://elouzeir.sprintstudio.net/seller/seller-profile-verify" method="post">
                                        <input type="hidden" name="_token" value="LVBP0YrHdLffpBmSEeUAeHrLvA3CyeZ7woB6hU2W" />                                                    <div class="single-dashboard-input">
                                            <div class="single-info-input margin-top-30">
                                                <div class="form-group">
                                                    <div class="media-upload-btn-wrapper">
                                                        <div class="img-wrap">

                                                        </div>
                                                        <input type="hidden" id="national_id" name="national_id" value="" />
                                                        <button type="button" class="btn btn-info media_upload_form_btn" data-btntitle="Select Image" data-modaltitle="Upload Image" data-toggle="modal" data-target="#media_upload_modal">
                                                            Upload Your National ID
                                                        </button>
                                                    </div>
                                                    <small class="form-text text-muted">allowed image format: jpg,jpeg,png</small>
                                                    <br />
                                                    <small class="text-danger">recomended size 740x504</small>
                                                </div>
                                            </div>
                                            <div class="single-info-input margin-top-30">
                                                <div class="form-group">
                                                    <div class="media-upload-btn-wrapper">
                                                        <div class="img-wrap">

                                                        </div>
                                                        <input type="hidden" id="address" name="address" value="" />
                                                        <button type="button" class="btn btn-info media_upload_form_btn" data-btntitle="Select Image" data-modaltitle="Upload Image" data-toggle="modal" data-target="#media_upload_modal">
                                                            Upload Your Address Document
                                                        </button>
                                                    </div>
                                                    <small class="form-text text-muted">allowed image format: jpg,jpeg,png</small>
                                                    <br />
                                                    <small class="text-danger">recomended size 740x504</small>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="btn-wrapper margin-top-35">
                                            <button type="submit" class="btn cmn-btn btn-bg-1">Save Changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




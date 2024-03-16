import { useState } from "react"
import { Link } from "react-router-dom";


export const UpgradeServiceModal = ({ currentLevel }) => {

    const [tier, setTier] = useState(0);

    return (
        <>
            <div class="modal " id="modal-preview-upgrade-service" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h5 class="modal-title">{title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div class="modal-body" style={{ display: "flex", justifyContent: "center" }}>
                            <div class="form-group input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"> <b> Tier Levels </b> </span>
                                </div>
                                {/*  */}
                                <select class="custom-select" style={{ maxwidth: "60px" }} onChange={(evnt) => { setTier(evnt.target.value) }}>
                                    <option value={0} selected="">Basic Tier</option>
                                    <option value={1} >Standard Tier</option>
                                    <option value={2} >Premium Tier</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <Link to="/seller/payment" state={{ serviceType: tier }} style={{ margin: "auto" }}>
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Proceed</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
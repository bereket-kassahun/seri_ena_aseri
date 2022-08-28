
import { useContext } from "react"
import { SellerContext } from "../context/seller-context";
import { getSeller } from "../../api/getSeller";
export const SellerDashboard = () => {

    const seller = useContext(SellerContext);

    
    const doStuff  = () => {
        getSeller((data) => {
            console.log("this is data", data)
            
        })
    }
    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="dashboard-settings margin-top-40">
                        <h2 class="dashboards-title"> Hello {seller.firstName} </h2>
                    </div>
                </div>
            </div>
        </>
    )
}
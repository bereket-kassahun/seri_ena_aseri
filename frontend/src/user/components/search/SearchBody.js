
import Rating from 'react-rating'
import { useEffect, useState, useContext } from "react"
import { ClientContext } from "../../context/client-context"
import { saveRating } from "../../api"
import { PremiumServiceCard } from "../cards/PremiumServiceCard"
import { StandardServiceCard } from "../cards/StandardServiceCard"
import { BasicServiceCard } from "../cards/BasicServiceCard"
export const SearchBody = ({ data, cardCount = 6, ratingEnabled = true }) => {

    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);

    const [currentServiceId, setCurrentServiceId] = useState("")
    const [clientRatedService, setClientRatedService] = useState(false)
    // const [ratingValue, setRatingValue] = useState(0)
    let ratingValue = undefined

    const setRatingId = (_id, clientAlreadyRated) => {
        setClientRatedService(clientAlreadyRated)
        setCurrentServiceId(_id)
    }

    const saveCurrentRating = () => {
        console.log(currentClient._id, currentServiceId)
        if (currentClient._id != "" && currentServiceId != "") {
            saveRating({ clientId: currentClient._id, serviceId: currentServiceId, value: ratingValue }, (data) => {
                if (data.success) {
                    console.log("success")
                }
            })
        }
    }

    return (
        <>
            {/* {
                premiumTitle
                &&
                (
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="banner-inner-contents">
                                    <h2 class="banner-inner-title"> Premium Services
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )

            } */}
            <div class="row" style={{ padding: "20px" }}>
                {
                    data.map((value, index) => {
                        if (value.serviceType == 2)
                            return <PremiumServiceCard data={value} setRatingId={setRatingId} cardCount={cardCount} ratingEnabled={ratingEnabled} />
                        else if (value.serviceType == 1)
                            return <StandardServiceCard data={value} setRatingId={setRatingId} cardCount={cardCount} ratingEnabled={ratingEnabled} />
                    })
                }
            </div>
            <hr style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                border: "0",
                borderTop: "1px solid rgba(0, 0, 0, 0.1)"
            }}
            />
            <div class="row" style={{ padding: "10px" }}>
                {
                    data.map((value, index) => (
                        value.serviceType == 0 && <BasicServiceCard data={value} setRatingId={setRatingId} cardCount={cardCount / 2} />
                    ))
                }
            </div>



            <div class="modal fade" id="exampleModalCenter" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalToggleLabel2">Rate</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style={{textAlign: "center"}}>
                            {
                                clientRatedService ? (<h3>You have already rated this service</h3>)
                                    :
                                    (<Rating
                                        emptySymbol={<span class="fa fa-2x  fa-star"></span>}
                                        fullSymbol={<span class="fa fa-2x  fa-star checked"> </span>}
                                        onClick={(rate) => { ratingValue = rate}}
                                    />)
                            }
                        </div>
                        <div class="modal-footer">

                            <button class="btn btn-primary" data-bs-dismiss="modal" onClick={(evnt) => {
                                if (!clientRatedService) {
                                    addServiceIdToRatings(currentServiceId)
                                    saveCurrentRating()
                                }
                            }}>
                                {
                                    <p style={{ color: "white" }}>{clientRatedService ? "Close" : "Rate"} </p>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" style={{ textAlign: "center" }}>
                            {
                                clientRatedService ? (<h3>You have already rated this service</h3>)
                                    :
                                    (<Rating
                                        emptySymbol={<span class="fa fa-star"></span>}
                                        fullSymbol={<span class="fa fa-star checked"></span>}
                                        onChange={(rate) => { setRatingValue(rate) }}
                                    />)
                            }

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={(evnt) => {
                                if (!clientRatedService) {
                                    addServiceIdToRatings(currentServiceId)
                                    saveCurrentRating()
                                }
                            }}>
                                {
                                    clientRatedService ? (
                                        <p>Close</p>
                                    ) : (
                                        <p>Save</p>
                                    )
                                }
                            </button>

                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
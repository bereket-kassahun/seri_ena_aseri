
import { useState, useEffect, useContext, } from 'react'

import { useNavigate } from 'react-router-dom'
import { ClientContext } from "../../context/client-context"
export const LeaveReviewCard = ({ data, setRatingId }) => {

    const navigate = useNavigate()
    let body = ""
    if (data.overview.length < 60) {
        body = data.overview
    } else {
        body = data.overview.substring(0, 59) + '...'
    }


    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);

    const checkIfClientRated = () => {
        let ret = false
        console.log(currentClient.ratings)
        currentClient.ratings.forEach(element => {
            if (element == data._id) {
                ret = true
                return
            }
        });
        return ret
    }

    return (
        <div class='col-xl-6 col-lg-6 col-sm-12 col-12 fadeInUp' style={{ padding: '5px' }}>

            <div class="card" style={{ marginBottom: '2px' }} >
                <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{data.professionalFirstName} {data.professionalLastName}</h6>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <div style={{ height: "30px" }}>
                        {/* <p class="card-text" style={{ color: "black" }}>{body}</p> */}
                        <p class="card-text" >{body}</p>
                    </div>

                    <div style={{ display: "flex", justifyContent: 'end' }}>
                        {
                            currentClient._id ? (
                                <>
                                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo"
                                        onClick={(evnt) => {
                                            setRatingId(data._id, checkIfClientRated())
                                        }} >
                                        Leave a Review
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button type="button" class="btn btn-success" 
                                        onClick={(evnt) => {
                                            navigate('/login')
                                        }} >
                                        Leave a Review
                                    </button>
                                </>
                            )
                        }


                        {/* <button type="button" class="btn btn-success" style={{ display: 'block' }}>Leave a Review</button> */}
                    </div>
                    {/* <a href="#" class="card-link">Card link</a> */}
                    {/* <a href="#" class="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    )
}
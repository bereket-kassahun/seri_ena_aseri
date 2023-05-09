
import { useState, useEffect, useContext, } from 'react'
import '../../../style/rating.css'
import { useNavigate } from 'react-router-dom'
import { ClientContext } from "../../context/client-context"
import { getProfessionalInfo, updateCallNumber } from '../../api'
export const BasicCard = ({ data, cardCount = 3 }) => {
    const [ratingView, setRatingView] = useState([])

    const [serviceProfessional, setServiceProfessional] = useState({});

    const navigate = useNavigate()
    let body = ""
    if (data.overview.length < 60) {
        body = data.overview
    } else {
        body = data.overview.substring(0, 59) + '...'
    }

    let cardClass = ""
    switch (cardCount) {
        case 3:
            cardClass = "col-xl-4 col-lg-6 col-sm-6 col-12 fadeInUp wow"
            break;
        case 2:
            cardClass = "col-xl-6 col-lg-6 col-sm-8 col-10 fadeInUp wow"
            break;
        case 1:
            cardClass = "col-xl-8 col-lg-9 col-sm-10 col-10 fadeInUp wow"
            break;
        default:
            cardClass = "col-xl-4 col-lg-3 col-sm-4 col-12 fadeInUp wow"
    }


    useEffect(() => {
        console.log("this is my data", data)
        let rating = data.rating ? data.rating : 0
        let tmp = []


        for (var i = 0; i < rating; i++) {
            tmp.push(
                <span class="fa fa-star checked"></span>
            )
        }

        for (var j = 5 - rating; j > 0; j--) {
            tmp.push(
                <span class="fa fa-star "></span>
            )
        }

        setRatingView([...tmp])



        getProfessionalInfo({ _id: data.professionalId }, (res) => {
            setServiceProfessional(res)
        })
    }, [])

    return (
        <div className={cardClass} style={{ padding: '5px' }}>

            <div class="card" style={{ marginBottom: '2px' }} >
                <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{data.professionalFirstName} {data.professionalLastName}</h6>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <div style={{ height: "30px", marginBottom: '8px' }}>
                        {/* <p class="card-text" style={{ color: "black" }}>{body}</p> */}
                        <p class="card-text" >{body}</p>
                    </div>


                    <div style={{ display: "flex", flexGrow: "2", flexDirection: "row", justifyContent: "space-between" }}>
                        <div>
                            <div class="rating" style={{ flexGrow: "5" }}>
                                {ratingView}
                                <p style={{ display: "inline" }} >{'(' + data.numberOfRating ? data.numberOfRating : '' + ')'}</p>
                            </div>
                        </div>
                        {
                            data.paymentType == 3 ?
                                (
                                    <p >
                                        Negotiable
                                    </p>
                                ) :
                                (
                                    <p>
                                        {data.paymentType == 2 && <i class="bi bi-caret-up-fill"></i>} {data.price} ETB{data.paymentType == 1 && "/Hr"}
                                    </p>
                                )
                        }
                    </div>

                    <div class="card-footer text-muted" style={{ padding: '0px' }}>
                        <button class='btn-success' style={{ backgroundColor: '#538EB6', borderColor: '#3CB043', width: '100%', height: '100%', }}
                            onClick={(evnt) => {
                                updateCallNumber({ id: data.professionalId }, (res) => {
                                    if (res.success) {
                                    }
                                })
                                window.location.href = 'tel:' + serviceProfessional.phoneNumber
                            }}>
                            Call Now
                        </button>
                    </div>

                    {/* <a href="#" class="card-link">Card link</a> */}
                    {/* <a href="#" class="card-link">Another link</a> */}
                </div>
            </div>
        </div>
    )
}
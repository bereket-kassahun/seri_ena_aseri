

import '../../../style/rating.css'
import { useEffect, useState, useContext } from "react"
import { ClientContext } from "../../context/client-context"
import { getProfessionalInfo, updateCallNumber } from "../../api/index"
import { Link } from 'react-router-dom'
import './card_style.css'
export const PremiumAndStandardCard = ({ data, setRatingId, cardCount = 6, ratingEnabled = true, premium = false }) => {
    const [ratingView, setRatingView] = useState([])
    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);
    const [serviceProfessional, setServiceProfessional] = useState({});
    let body = ""
    if (data.overview.length < 60) {
        body = data.overview
    } else {
        body = data.overview.substring(0, 59) + '...'
    }




    let title = ""

    if (data.title.length < 10) {
        title = data.title
    } else {
        title = data.title.substring(0, 9) + '...'
    }

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


    const [isHover, setIsHover] = useState(false)


    const handleMouseEnter = () => {
        setIsHover(true);
        console.log('enter')
    };

    const handleMouseLeave = () => {
        setIsHover(false);
        console.log('leave')
    };
    const cardStyle = {
        container: {
            boxShadow: isHover ? '0px 0px 20px 3px' : '0px 0px 0px 0px',
            // transform: isHover ? "scale(1.05)" : "scale(1.00)",

            paddingRight: "4px",
            paddingLeft: "4px",
            paddingBottom: "5px",
            paddingTop: "5px"
        }
    }

    let cardClass = ""
    switch (cardCount) {
        case 4:
            cardClass = "col-xl-4 col-lg-6 col-sm-6 col-12 fadeInUp wow"
            break;
        case 2:
            cardClass = "col-xl-6 col-lg-7 col-sm-8 col-10 fadeInUp wow"
            break;
        default:
            cardClass = "col-xl-2-5 col-lg-3 col-sm-4 col-12 fadeInUp wow"
    }
    return (
        <div style={cardStyle.container} className={cardClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div class='card text-center'  >
                {/* <img src="..." class="" alt="..."> */}
                {
                    premium ? (
                        <Link to="/service" state={{ professionalId: data.professionalId, currentServiceId: data._id }} >
                            <div class="card-header" style={{ backgroundImage: 'url(' + data.img + ')', height: '140px', backgroundSize: 'cover' }}>
                                {/* <img class="card-img" alt="User image" src={data.professionalImage != "" ? data.professionalImage : "imgs/user_profile.png"} /> */}
                            </div>
                        </Link>
                    ) : (
                        <div class="card-header" style={{ backgroundImage: 'url(' + data.img + ')', height: '140px' }}>
                            {/* <img class="card-img" alt="User image" src={data.professionalImage != "" ? data.professionalImage : "imgs/user_profile.png"} /> */}
                        </div>
                    )
                }

                <div class="card-body" style={{ padding: '0em', paddingTop: '1em' }}>
                    <h5 class="card-title" style={{ fontSize: '1.2em' }}>{data.professionalFirstName} {data.professionalLastName}</h5>
                    <h6 class="card-subtitle mb-2" style={{ fontWeight: 'bold' }}>{title}</h6>
                    <div style={{ height: "70px" }}>
                        <p class="card-text">{body}</p>
                    </div>
                </div>
                <div style={{ display: "flex", flexGrow: "2", flexDirection: "row", justifyContent: "space-between" }}>
                    <div >
                        {
                            (currentClient._id && ratingEnabled) != "" ? (
                                <div class="rating" style={{ display: "inline", cursor: "pointer" }} data-bs-target="#exampleModalCenter" data-bs-toggle="modal" onClick={(evnt) => { setRatingId(data._id, checkIfClientRated()) }}>
                                    {ratingView}
                                </div>
                            ) : (
                                <div class="rating" style={{ flexGrow: "5" }}>
                                    {ratingView}
                                    <p style={{ display: "inline" }} >{'(' + data.numberOfRating ? data.numberOfRating : '' + ')'}</p>
                                </div>
                            )
                        }
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
            </div>
        </div >

    )
}
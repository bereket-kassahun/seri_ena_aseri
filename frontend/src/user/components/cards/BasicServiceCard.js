
import '../../../style/rating.css'
import '../../../style/three-dot.css'

import { useEffect, useState, useContext } from "react"
import { ClientContext } from "../../context/client-context"
import { updateCallNumber } from "../../api/index"
export const BasicServiceCard = ({ data, setRatingId , cardCount = 6 }) => {

    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);

    const [ratingView, setRatingView] = useState([])

    // let body = ""

    // if (data.overview.length < 30) {
    //     body = data.overview
    // } else {
    //     body = data.overview.substring(0, 29) + '...'
    // }


    let title = ""

    if (data.title.length < 25) {
        title = data.title
    } else {
        title = data.title.substring(0, 24) + '...'
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
    }, [])

    const [isHover, setIsHover] = useState(false)


    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const cardStyle = {
        container: {
            webkitTapHighlightColor: "transparent",
            backgroundColor: "transparent",
            boxSizing: "inherit",
            color: "inherit",
            cursor: "pointer",
            borderRadius: "0.5rem",
            webkitBoxShadow: "0.4rem 0.7rem 2.8rem 0 rgba(68,77,91,0.14)",
            textDecoration: "none",
            transform: isHover ? "scale(1.05)" : "scale(1.00)",
        }
    }

    let cardClass = ""
    switch(cardCount){
        case 2:
            cardClass = "col-xl-6 col-lg-6 col-sm-12 col-12 fadeInUp wow"
            break;
        default:
            cardClass = "col-xl-4 col-lg-6 col-sm-12 col-12  fadeInUp wow"
    }
    
    return (
        <>
         <div style={{paddingRight: "2px", paddingLeft: "2px", padding: "3px" }}  className={cardClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div style={cardStyle.container} class=" card " >
                    <div class="card-body" style={{ padding: "10px" }}>
                        <div class="d-flex align-items-center">
                            <img
                                src={data.professionalImage != "" ? data.professionalImage :  "imgs/user_profile.png"}
                                alt=""
                                style={{ width: "45px", height: "45px", }}
                                class="rounded-circle"
                            />
                            <div class="" style={{ flexGrow: "4", paddingLeft: "10px" }}>
                                <p class="font-weight-bold" style={{ color: "black" }}>{data.professionalFirstName} {data.professionalLastName}</p>
                                <p class="font-weight-normal" style={{ color: "black" }}>{title}</p>
                            </div>
                            <div class="" style={{ flexGrow: "1",  textAlign: "center"  }}>
                                {
                                    currentClient._id != "" ? (
                                        <div class="rating" style={{ display: "inline", cursor: "pointer" }}  data-bs-target="#exampleModalCenter" data-bs-toggle="modal" onClick={(evnt) => { setRatingId(data._id, checkIfClientRated()) }}>
                                            {ratingView}
                                        </div>
                                    ) : (
                                        <div class="rating" style={{ display: "inline" }}>
                                            {ratingView}
                                        </div>
                                    )
                                }

                                <div>
                                    <p>{data.numberOfRating}</p>
                                </div>

                            </div>
                            <div class="btn-wrapper" style={{ flexGrow: "1" }}>
                                <a href={"tel:+"+ data.professionalPhoneNumber} class="cmn-btn btn-bg-3" style={{ background: ``, padding: "5px 10px 5px 10px" }}
                                    onClick={(evnt) => {
                                        updateCallNumber({ id: data.professionalId }, (res) => {
                                            if (res.success) {
                                            }
                                        })
                                    }}
                                >
                                    Call <i class="fas fa-phone ms-2"></i>
                                </a>
                                {/* <div class='three-dot' style={{marginLeft: "10px", display: "inline", cursor: "pointer"}}>
                                
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

import '../../../style/rating.css'
import '../../../style/three-dot.css'

import { useEffect, useState, useContext } from "react"
import { ClientContext } from "../../../user/context/client-context"
export const BasicServiceCard = ({ data }) => {

    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);

    const [ratingView, setRatingView] = useState([])


    let title = ""

    if (data.title.length < 30) {
        title = data.title
    } else {
        title = data.title.substring(0, 29) + '...'
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

    return (
        <>


            <div class="modal " id="modal-preview-service" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h5 class="modal-title">{title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div class="modal-body" style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ paddingRight: "2px", paddingLeft: "2px", padding: "3px" }} className=" col-12 " onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <div style={cardStyle.container} class=" card " >
                                    <div class="card-body" style={{ padding: "10px" }}>
                                        <div class="d-flex align-items-center">
                                            <img
                                                src={data.professionalImage != "" ? data.professionalImage :  "imgs/seller-s21644057790.jpg"}
                                                alt=""
                                                style={{ width: "45px", height: "45px", }}
                                                class="rounded-circle"
                                            />
                                            <div class="" style={{ flexGrow: "4", paddingLeft: "10px" }}>
                                                <p class="font-weight-bold" style={{ color: "black" }}> {data.professionalFirstName} {data.professionalLastName}</p>
                                                <p class="font-weight-normal" style={{ color: "black" }}>{title}</p>
                                            </div>
                                            <div class="" style={{ flexGrow: "1", textAlign: "center" }}>
                                                {

                                                    <div class="rating" style={{ display: "inline" }}>
                                                        {ratingView}
                                                    </div>

                                                }

                                                <div>
                                                    <p>{data.numberOfRating}</p>
                                                </div>

                                            </div>
                                            <div class="btn-wrapper" style={{ flexGrow: "1" }}>
                                                <a class="cmn-btn btn-bg-3" style={{ background: ``, padding: "5px 10px 5px 10px" }}>
                                                    Call <i class="fas fa-phone ms-2"></i>
                                                </a>
                                                {/* <div class='three-dot' style={{marginLeft: "10px", display: "inline", cursor: "pointer"}}>
                                    
                                </div> */}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
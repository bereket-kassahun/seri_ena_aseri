
import '../../../style/rating.css'
import '../../../style/three-dot.css'

import { useEffect, useState, useContext } from "react"
import { ClientContext } from "../../../user/context/client-context"
import { BasicCard } from '../../../user/components/cards/BasicCard'
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
                            <BasicCard data={data} cardCount={1}/>
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
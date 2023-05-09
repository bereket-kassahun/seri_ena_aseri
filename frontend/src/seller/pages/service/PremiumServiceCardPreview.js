
import '../../../style/detail-preview-modal.css'

import '../../../style/rating.css'
import { useEffect, useState } from "react"
import { PremiumAndStandardCard } from '../../../user/components/cards/PremiumAndStandardCard'

export const PremiumServiceCardPreview = ({ data }) => {


    const [ratingView, setRatingView] = useState([])

    let body = ""
    if (data.overview.length < 60) {
        body = data.overview
    } else {
        body = data.overview.substring(0, 59) + '...'
    }




    let title = ""

    if (data.title.length < 16) {
        title = data.title
    } else {
        title = data.title.substring(0, 15) + '...'
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
            borderRadius: "0.5rem",
            webkitBoxShadow: "0.4rem 0.7rem 2.8rem 0 rgba(68,77,91,0.14)",
            textDecoration: "none",
            transform: isHover ? "scale(1.05)" : "scale(1.00)",
            paddingRight: "0",
            paddingLeft: "0"
        }
    }

    return (
        <>
            <div class="modal " id="modal-preview-service" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            {/* <h5 class="modal-title">{title}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div class="modal-body" style={{ display: "flex", justifyContent: "center" }} >
                            <PremiumAndStandardCard data={data} setRatingId={()=>{}} cardCount={2} style={{width: '50%'}}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


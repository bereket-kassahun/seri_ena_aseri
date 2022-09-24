
import '../../style/rating.css'
import { useEffect, useState, useContext } from "react"
import { ClientContext } from "../../context/client-context"
import { updateCallNumber } from "../../api/index"
export const StandardServiceCard = ({ data, setRatingId }) => {

    const [ratingView, setRatingView] = useState([])
    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);

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
            <div style={{ paddingRight: "2px", paddingLeft: "2px" }} className="col-xl-2 col-lg-3 col-sm-4 col-12 fadeInUp wow" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div style={cardStyle.container} class=" card single-service service-two style-03 " >
                    <a
                        class="service-thumb service-bg-thumb-format"
                        style={{ backgroundImage: 'url(' + data.img + ')', height: "150px" }}>
                        <div class="award-icons style-02">
                            <i class="las  la-check"></i>
                        </div>
                        <div class="country_city_location color-three">
                            <span class="single_location"> <i class="las la-map-marker-alt"></i>{data.city} {data.specificAdress}</span>
                        </div>
                    </a>
                    <div class="card-body" style={{ padding: "3px" }}>
                        <ul class="author-tag" style={{ margin: "3px" }}>
                            <li class="tag-list">
                                <a >
                                    <div class="authors">
                                        <div class="thumb">
                                            <img src={data.professionalImage != "" ? data.professionalImage : "imgs/user_profile.png"} alt="" />
                                        </div>
                                        <p class="font-weight-bold" style={{ color: "black" }}>{data.professionalFirstName} {data.professionalLastName}</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <h5 class="font-weight-bold" style={{ color: "black" }}>{title}</h5>
                        <div style={{ height: "70px" }}>
                            <p class="font-weight-normal" style={{ color: "black" }}>{body}</p>
                        </div>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <div class="service-price-wrapper" style={{ textAlign: "center" }}>
                            <div >
                                <div style={{ display: "flex", flexGrow: "2", flexDirection: "row", justifyContent: "center" }}>
                                    {
                                        currentClient._id != "" ? (
                                            <div class="rating" style={{ display: "inline", cursor: "pointer" }} data-toggle="modal" data-target="#exampleModalCenter" onClick={(evnt) => { setRatingId(data._id, checkIfClientRated()) }}>
                                                {ratingView}
                                            </div>
                                        ) : (
                                            <div class="rating" style={{ display: "inline" }}>
                                                {ratingView}
                                            </div>
                                        )
                                    }
                                    <div style={{ marginLeft: "20px" }}>
                                        <p>{data.numberOfRating}</p>
                                    </div>
                                </div>
                                <div >
                                    <h6 class="card-title"> {data.price} Birr</h6>
                                </div>
                            </div>

                            <div class="btn-wrapper">
                                <a href={"tel:+"+ data.professionalPhoneNumber} class="cmn-btn btn-bg-3" style={{ background: ``, padding: "5px 10px 5px 10px" }}
                                    onClick={(evnt) => {
                                        updateCallNumber({ id: data.professionalId }, (res) => {
                                            if (res.success) {
                                            }
                                        })
                                    }}
                                >
                                    Call Now <i class="fas fa-phone ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
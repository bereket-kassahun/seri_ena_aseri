

import '../../../style/rating.css'
import { useEffect, useState, useContext } from "react"
import { ClientContext } from "../../context/client-context"
import { updateCallNumber } from "../../api/index"
import { Link } from 'react-router-dom'
import './card_style.css'
export const PaidCard = ({ data, setRatingId, cardCount = 6, ratingEnabled = true, premium = false }) => {
    const [ratingView, setRatingView] = useState([])
    const { currentClient, addServiceIdToRatings, updateClient } = useContext(ClientContext);

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
        default:
            cardClass = "col-xl-2-5 col-lg-3 col-sm-4 col-12 fadeInUp wow"
    }
    return (
        <div  style={cardStyle.container} className={cardClass} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <div class='card text-center'  >
                {/* <img src="..." class="" alt="..."> */}
                {
                    premium ? (
                        <Link to="/service" state={{ professionalId: data.professionalId, currentServiceId: data._id }} >
                            <div class="card-header" style={{ backgroundImage: 'url(' + data.img + ')' , height: '140px', backgroundSize: 'cover'}}>
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
                                    <p style={{ display: "inline" }} >{'(' + data.numberOfRating + ')'}</p>
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
                    <button class='btn-success' style={{ backgroundColor: '#538EB6', borderColor: '#3CB043', width: '100%', height: '100%', }}>
                        Call Now
                    </button>
                </div>
            </div>
        </div>
        // <div class=" card single-service service-two style-03  section-bg-2 wow fadeInUp" data-wow-delay=".2s" style={{marginTop: "10px"}}>
        //     <Link to="/service" state={{ professionalId: data.professionalId, currentServiceId: data._id }} >
        //         <a
        //             class="service-thumb service-bg-thumb-format"
        //             style={{ backgroundImage: 'url('+ data.img +')' }}>
        //             <div class="award-icons style-02">
        //                 <i class="las  la-check"></i>
        //             </div>
        //             <div class="country_city_location color-three">
        //                 <span class="single_location"> <i class="las la-map-marker-alt"></i>{data.city} {data.specificAdress}
        //                 </span>
        //             </div>
        //         </a>
        //     </Link>
        //     <div class="card-body">
        //         <ul class="author-tag">
        //             <li class="tag-list">
        //                 <a >
        //                     <div class="authors">
        //                         <div class="thumb">
        //                             <img src="imgs/seller-s21644057790.jpg" alt="" />
        //                         </div>
        //                         <span class="author-title">{data.professionalFirstName} {data.professionalLastName} </span>
        //                     </div>
        //                 </a>
        //             </li>
        //         </ul>
        //         <h5 class="card-title">{data.title}</h5>
        //         <p class="card-text"> {body} Birr</p>
        //         {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        //         <div class="service-price-wrapper">
        //             <div class="service-price style-02" style={{ textAlign: "right" }}>
        //                 <h6 class="card-title"> {data.price} Birr</h6>
        //             </div>
        //             <div class="btn-wrapper">
        //                 <a class="cmn-btn btn-bg-3" style={{ background: `` }}> Call Now </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
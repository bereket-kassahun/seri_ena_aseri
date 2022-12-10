import { Link } from "react-router-dom"
import { SingleServiceCategory } from "./SingleServiceCategory"
export const TradersServices = () => {

    const categories = [
        {
            title: "Aerial and satellite installers",
            img: "building_safety_service.png"
        },
        {
            title: "Bathroom fitters and designers",
            img: "catering_service.png"
        },
        {
            title: "Boiler installation",
            img: "charity_service.png"
        },
        {
            title: "Builders",
            img: "country_side_service.png"
        },
        {
            title: "Burglar alarms",
            img: "driver_service.png"
        },
        {
            title: "Carpenters",
            img: "charity_service.png"
        },
    ]
    return (
        <>
            <div class="container container-two" data-padding-bottom="70" >
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-two">
                            <h3 class="title"> Traders Service </h3>
                            <Link to="traders_category_list"> <a class="section-btn"> Explore All </a></Link>
                        </div>
                    </div>
                </div>

                <div class="row margin-top-20">
                    {
                        categories.map((value, index) => (
                            <SingleServiceCategory title={value.title} img={value.img} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
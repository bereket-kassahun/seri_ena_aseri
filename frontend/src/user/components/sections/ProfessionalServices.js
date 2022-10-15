import { Link } from "react-router-dom"
import { SingleServiceCategory } from "./SingleServiceCategory"
export const ProfessionalServices = () => {

    const categories = [
        {
            title: "Book keeping",
            img: "creative_thinking_service.png"
        },
        {
            title: "Auditing ",
            img: "investment_data_service.png"
        },
        {
            title: "Tax consultancy",
            img: "creative_thinking_service.png"
        },
        {
            title: "Administration",
            img: "country_side_service.png"
        },
        {
            title: "Human resource",
            img: "manufacturing_process_service.png"
        },
        {
            title: "Clark",
            img: "energy_service.png"
        },
    ]
    return (
        <>
            <div class="container container-two" data-padding-bottom="70" >
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-two">
                            <h3 class="title"> Professional Service </h3>
                            <Link to="professional_category_list"> <a class="section-btn"> Explore All </a></Link>
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
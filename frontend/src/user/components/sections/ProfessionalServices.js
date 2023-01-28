import { Link } from "react-router-dom"
import { SingleServiceCategory } from "./SingleServiceCategory"
import { ThemeContext } from "../../context/theme-context"
import { useContext } from "react"

export const ProfessionalServices = () => {

    const { currentTheme, updateLanguage } = useContext(ThemeContext);

    const categories = [
        {
            title: currentTheme.text.home.text9,
            img: "creative_thinking_service.png"
        },
        {
            title: currentTheme.text.home.text10,
            img: "investment_data_service.png"
        },
        {
            title: currentTheme.text.home.text11,
            img: "creative_thinking_service.png"
        },
        {
            title: currentTheme.text.home.text12,
            img: "country_side_service.png"
        },
        {
            title: currentTheme.text.home.text13,
            img: "manufacturing_process_service.png"
        },
        {
            title: currentTheme.text.home.text14,
            img: "energy_service.png"
        },
        {
            title: currentTheme.text.home.text15,
            img: "building_safety_service.png"
        },
        {
            title: currentTheme.text.home.text16,
            img: "catering_service.png"
        },
        {
            title: currentTheme.text.home.text17,
            img: "charity_service.png"
        },
        {
            title: currentTheme.text.home.text18,
            img: "country_side_service.png"
        },
        {
            title: currentTheme.text.home.text19,
            img: "driver_service.png"
        },
        {
            title: currentTheme.text.home.text20,
            img: "charity_service.png"
        },
    ]
    return (
        <>
            <div class="container container-two" data-padding-bottom="70" >


                <div class="row">
                    <div class="col-12">
                        <h2 class="text-center">
                            Discover
                        </h2>
                    </div>
                </div>

                <div class="row py-3 py-md-3 px-0 px-md-2 px-lg-3 px-xl-6" style={{ marginLeft: "1.5em", marginRight: "1.5em" }}>

                    <div class="col-4 col-md-2 mb-2 discover-category-column discover-button-clickable home">
                        <a href="#" class="text-dark-blue">
                            <div class="text-center rounded" style={{ fontSize: "3em" }}>
                                <i class="bi bi-houses-fill"  ></i>
                            </div>
                            <p class="text-center pt-2 pt-md-4">
                                House
                                <br />
                                Cleaning
                            </p>
                        </a>
                    </div>
                    <div class="col-4 col-md-2 mb-2 discover-category-column discover-button-clickable health">
                        <a href="#" class="text-dark-blue">

                            <div class="text-center rounded" style={{ fontSize: "3em" }}>
                                <i class="bi bi-bank"></i>
                            </div>
                            <p class="text-center pt-2 pt-md-4">
                                Accountance
                                <br />
                                &amp; Finance
                            </p>
                        </a>
                    </div>
                    <div class="col-4 col-md-2 mb-2 discover-category-column discover-button-clickable events">
                        <a href="#" class="text-dark-blue">
                            <div class="text-center rounded" style={{ fontSize: "3em" }}>
                                <i class="bi bi-currency-exchange"></i>
                            </div>

                            <p class="text-center pt-2 pt-md-4">
                                Business
                            </p>
                        </a>
                    </div>
                    <div class="col-4 col-md-2 mb-2 discover-category-column discover-button-clickable business pt-3 pt-md-0">
                        <a href="#" class="text-dark-blue">
                            <div class="text-center rounded" style={{ fontSize: "3em" }}>
                                <i class="bi bi-person-workspace"></i>
                            </div>
                            <p class="text-center pt-2 pt-md-4">
                                Charity
                                <br />
                                &amp; Voluntary Work
                            </p>
                        </a>
                    </div>
                    <div class="col-4 col-md-2 mb-2 discover-category-column discover-button-clickable lessons pt-3 pt-md-0">
                        <a href="#" class="text-dark-blue">
                            <div class="text-center rounded" style={{ fontSize: "3em" }}>
                                <i class="bi bi-brush"></i>
                            </div>
                            <p class="text-center pt-2 pt-md-4">
                                Creative arts
                                <br />
                                &amp; design
                            </p>
                        </a>
                    </div>
                    <div class="col-4 col-md-2 mb-2 discover-category-column discover-button-clickable other pt-3 pt-md-0">
                        <a href="#" class="text-dark-blue">
                            <div class="text-center rounded" style={{ fontSize: "3em" }}>
                                <i class="bi bi-three-dots"></i>
                            </div>
                            <p class="text-center pt-2 pt-md-4">
                                Explore
                                <br />
                                All
                            </p>
                        </a>
                    </div>
                </div>

                <div class="row margin-top-60">
                    <div class="col-lg-12">
                        <div class="section-title-two">
                            <h3 class="title">{currentTheme.text.home.text5}</h3>
                            <Link to="professional_category_list"> <a class="section-btn"> {currentTheme.text.home.text21} </a></Link>
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
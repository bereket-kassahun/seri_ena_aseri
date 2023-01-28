import { useEffect, useState, useContext } from "react"
import { get_featured_services } from "../../api"
import { SearchBody } from "../search/SearchBody"


import { ThemeContext } from "../../context/theme-context"


export const FeaturedServices = () => {

    const { currentTheme, updateLanguage } = useContext(ThemeContext);
    const [featuredServices, setFeaturedServices] = useState([])

    useEffect(() => {
        get_featured_services((res) => {
            if (res.success) {
                setFeaturedServices(res.services)
            } else {

            }
        })
    }, [])
    return (
        <>
            <section id="contact" class="contact" style={{ overflow: "visible" }}>
                <div  data-aos="fade-up">

                    <div class="section-title">
                        <h2>{currentTheme.text.home.text4}</h2>
                    </div>

                    <div style={{paddingLeft: "20px", paddingRight: "20px"}} class="row">
                        <SearchBody data={featuredServices} ratingEnabled={false}/>
                    </div>

                </div>
            </section>
        </>
    )
}
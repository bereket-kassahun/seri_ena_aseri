import { useEffect, useState } from "react"
import { get_featured_services } from "../../api"
import { SearchBody } from "../search/SearchBody"



export const FeaturedServices = () => {

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
                        <h2>Featured Services</h2>
                    </div>

                    <div style={{paddingLeft: "20px", paddingRight: "20px"}} class="row">
                        <SearchBody data={featuredServices} ratingEnabled={false}/>
                    </div>

                </div>
            </section>
        </>
    )
}
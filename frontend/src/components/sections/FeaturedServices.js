import { useEffect, useState } from "react"
import { get_featured_services } from "../../api"
import { SearchBody } from "../search/SearchBody"



export const FeaturedServices = () => {

    const [featuredServices, setFeaturedServices] = useState([])

    useEffect(() => {
        get_featured_services((res) => {
            if(res.success){
                setFeaturedServices(res.services)
            }else{

            }
        })
    },[])
    return (
        <>
            <div class="container container-two"  data-padding-bottom="70">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title-two">
                            <h3 class="title"> Featured Services </h3>
                        </div>
                    </div>
                </div>

                <SearchBody data={featuredServices}/>
            </div>
        </>
    )
}
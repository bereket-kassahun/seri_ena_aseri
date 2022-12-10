
import { Link } from "react-router-dom"
export const SingleServiceCategory = ({title, img = ""}) => {
    return (
        <>
            <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
                <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                    <div class="icon category-bg-thumb-format" style={{ backgroundImage:  (img == "") ? (`url(imgs/new_category/building_safety_service.png)`) : `url(imgs/new_category/`+img+`)` }}>
                    </div>
                    <div class="category-contents">
                        <Link to="/category" state={title} >
                            <h4 class="category-title">
                                <a href="" style={{ color: "black", fontSize: "17px", }}>
                                    {title}
                                </a>
                            </h4>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
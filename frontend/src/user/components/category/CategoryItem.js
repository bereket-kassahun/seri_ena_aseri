
import { Link } from "react-router-dom"

export const CategoryItem = ({ title, img = "" }) => {
    return (
        <>
            <div class="col-xl-2 col-lg-3 col-sm-6  category-child">
                <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                    <div class="icon">
                        <img src={ img == "" ? `imgs/new_category/building_safety_service.png` : (`imgs/new_category/`+img)}  alt="AAAAA" />
                    </div>
                    <div class="category-contents">
                        <Link to="/category" state={title} > <h4 class="category-title"> <a style={{ color: "black", fontSize: "17px", }}> {title}  </a> </h4></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
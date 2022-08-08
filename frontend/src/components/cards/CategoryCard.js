
const CategoryCard = ({ title, quantity }) => {
    const imageStyle = {
        backgroundImage: 'url(imgs/sample_category.jpg)'
    }

    return (
        <div class="col-xl-2 col-lg-3 col-sm-6 margin-top-30 category-child">
            <div class="single-category style-02 wow fadeInUp" data-wow-delay=".2s">
                <div class="icon category-bg-thumb-format"
                    style={imageStyle}>
                </div>
                <div class="category-contents">
                    <h4 class="category-title"> <a href="service-list/category/electronics.html"> {title}
                    </a> </h4>
                    <span class="category-para"> {quantity}+ Service </span>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
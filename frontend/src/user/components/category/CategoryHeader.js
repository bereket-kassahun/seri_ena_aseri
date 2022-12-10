
export const CategoryHeader = ({title}) => {
    return (
            <div class="banner-inner-area section-bg-2 padding-top-40 padding-bottom-40
        ">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="banner-inner-contents">
                        <ul class="inner-menu">
                            <li class="list">
                                <a >Category: </a>
                                
                            </li>
                            <h2 style={{display: "inline"}} class="banner-inner-title"> {title} </h2>
                            {/* <li class="list">Popular Service
                            </li> */}
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
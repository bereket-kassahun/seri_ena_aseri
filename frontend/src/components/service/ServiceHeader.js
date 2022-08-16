
export const ServiceHeader = ({ title }) => {
    return (
        <div class="banner-inner-area section-bg-2 padding-top-40 padding-bottom-40
        ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="banner-inner-contents">
                            {/* <ul class="inner-menu">
                                <li class="list"><a href="../../index.html">Home </a></li>
                                <li class="list">Popular Service
                                </li>
                            </ul> */}
                            <h2 class="banner-inner-title"> {title}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
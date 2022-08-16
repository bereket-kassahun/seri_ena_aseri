
import { Link } from "react-router-dom"
export const JoinUs = () => {
    return (
        <section class="join-area gradient-bg-2" data-padding-top="100" data-padding-bottom="100" style={{ backgroundColor: "" }}>
            <div class="join-shapes">
                <img src="imgs/circle11643799195.png" alt="" />
                <img src="imgs/circle21643799195.png" alt="" />
                <img src="imgs/dot-square1643799195.png" alt="" />
                <img src="imgs/line-cross1643799195.png" alt="" />
            </div>
            <div class="container container-two">
                <div class="join-content-wrapper">
                    <div class="join-contents">
                        <h2 class="title">Join Us and Start Selling Your Services On Our Website</h2>
                        <span class="join-para">Its free to join</span>
                        <div class="btn-wrapper margin-top-50">

                            <Link to="/register">
                                <a href="register20b9.html?type=seller" class="cmn-btn btn-bg-3"
                                    style={{ background: `rgb(255, 107, 43)` }}>
                                    Sell Your Services
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
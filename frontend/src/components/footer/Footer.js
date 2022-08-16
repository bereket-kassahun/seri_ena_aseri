import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer class="footer-area gradient-footer color-two">
            <div class="footer-top padding-top-100 padding-bottom-70">
                <div class="container container-two">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer-widget widget ">
                                <div class="about_us_widget">
                                    <a href="index.html" class="footer-logo"><img
                                        src="https://i.imgur.com/4bjlGhE.png" alt="" /></a>
                                </div>
                                <div class="footer-inner">
                                    <p class="footer-para">We believe enabling you to work to your full potential is the key to your success in life</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer-widget widget">
                                <h6 class="widget-title">Community</h6>
                                <div class="footer-inner">
                                    <ul class="footer-link-list">
                                        <li class="lists">
                                            <Link to="/register"><li class="list"><a style={{cursor: "pointer"}}>Become A Service Seller</a></li></Link>
                                        </li>
                                        {/* <li class="lists">
                                            <li class="list"><a href="registerb8ba.html?type=buyer">Become A Buyer</a></li>
                                        </li> */}

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer-widget widget">
                                <h6 class="widget-title">Category</h6>
                                <div class="footer-inner">
                                    <ul class="footer-link-list">
                                        <li class="list"><a style={{cursor: "pointer"}}>Electronics</a></li>
                                        <li class="list"><a style={{cursor: "pointer"}}>Cleaning</a></li>
                                        <li class="list"><a style={{cursor: "pointer"}}>Home Move</a></li>
                                        <li class="list"><a style={{cursor: "pointer"}}>Painting</a></li>
                                        <li class="list"><a style={{cursor: "pointer"}}>Salon & Spa</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6">
                            <div class="footer-widget widget">
                                <h6 class="widget-title">Contact Info</h6>
                                <div class="footer-inner">
                                    <ul class="footer-link-address">
                                        <li class="list"><span class="address"> <i class="las la-map-marker-alt"></i> 41/1,
                                            Hilton Mall, NY City</span></li>
                                        <li class="list"> <span class="address"> <i class="las la-mobile"></i>
                                            +012-78901234</span></li>
                                        <li class="list"> <span class="address"> <i class="las la-envelope"></i>
                                            seri.ean.aseri@mail.com</span></li>
                                    </ul>
                                    <div class="footer-socials">
                                        <ul class="footer-social-list">
                                            <li class="lists">
                                                <a class="facebook" href="#"> <i class="lab la-facebook-f"></i> </a>
                                            </li>
                                            <li class="lists">
                                                <a class="facebook" href="#"> <i class="lab la-twitter"></i> </a>
                                            </li>
                                            <li class="lists">
                                                <a class="facebook" href="#"> <i class="lab la-instagram"></i> </a>
                                            </li>
                                            <li class="lists">
                                                <a class="facebook" href="#"> <i class="lab la-youtube"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area style-02 copyright-border">
                <div class="container container-two">
                    <div class="row align-items-center">
                        <div class="col-lg-4 col-md-6">
                            <ul class="copyright-list">
                                <li class="list">
                                    <a href="privacy-policy.html">Privacy Policy</a>
                                </li>
                                <li class="list">
                                    <a href="terms-and-conditions.html">Terms &amp; Conditions</a>
                                </li>

                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="copyright-contents">
                                <span>All copyright (C) 2022 Reserved</span>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="copyright-payment">
                                <ul class="payment-list">
                                    <li class="list">
                                        <a href="#"><img src="assets/uploads/media-uploader/c11642306753.png" alt="" /></a>
                                    </li>
                                    <li class="list">
                                        <a href="#"><img src="assets/uploads/media-uploader/c21642306753.png" alt="" /></a>
                                    </li>
                                    <li class="list">
                                        <a href="#"><img src="assets/uploads/media-uploader/c31642306753.png" alt="" /></a>
                                    </li>
                                    <li class="list">
                                        <a href="#"><img src="assets/uploads/media-uploader/c41642306753.png" alt="" /></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
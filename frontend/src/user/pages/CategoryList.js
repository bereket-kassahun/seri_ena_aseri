
import { Link } from "react-router-dom"
import { Footer } from "../components/footer/Footer"
import { Header } from "../components/header"
import ProfessionalCategories from "./ProfessionalCategories"
import TradersCategories from "./TradersCategories"

import '../../style/hover-zoom.css'
export default function CategoryList() {
    return (
        <>
            <div style={{ height: "13vh", background: " #37517e" }}>

            </div>
            {/* <ProfessionalCategories/> */}
            {/* <TradersCategories/> */}

            <div class="container">

                <div class="row">
                    <div class="d-flex col-12 justify-content-between pt-5 pb-2">
                        <h4 class="discover-section-title">House &amp; Home</h4>
                        {/* <a href="https://www.bark.com/en/in/home/" class="align-self-center text-light-grey">
            View All
        </a> */}
                    </div>
                </div>


                <div class="row flex-nowrap scroll-touch pb-5">
                    <div class="col-8 col-md-4 card">
                        <div class="disc-item d-flex flex-column" data-category-id="179">
                            <div class="img-fluid discover-image-wrapper " data-remotable="Available online">
                                <img class="br-top img-fluid object-fit-cover lazy loaded" alt="Gardening" width="400" height="260" title="Gardening" data-src="https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1" data-srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=D7Luyd 2x" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=D7Luyd 2x" src="./Bark.com_ A Revolutionary Way to Hire Local Services &amp; Professionals_files/gardening.jpg!d=v1NTZ1" data-was-processed="true" />
                            </div>
                            <p class="disc-title p-3 br-bottom mb-0">Gardening</p>
                        </div>
                    </div>
                    <div class="col-8 col-md-4 card">
                        <div class="disc-item d-flex flex-column" data-category-id="1212">
                            <div class="img-fluid discover-image-wrapper " data-remotable="Available online">
                                <img class="br-top img-fluid object-fit-cover lazy loaded" alt="House Cleaning" width="400" height="260" title="House Cleaning" data-src="https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1" data-srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=D7Luyd 2x" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=D7Luyd 2x" src="./Bark.com_ A Revolutionary Way to Hire Local Services &amp; Professionals_files/house-cleaning.jpg!d=v1NTZ1" data-was-processed="true" />
                            </div>
                            <p class="disc-title p-3 br-bottom mb-0">House Cleaning</p>
                        </div>
                    </div>
                    <div class="col-8 col-md-4 card">
                        <div class="disc-item d-flex flex-column" data-category-id="42">
                            <div class="img-fluid discover-image-wrapper " data-remotable="Available online">
                                <img class="w-100 hover-shadow br-top img-fluid object-fit-cover lazy loaded" alt="Painting &amp; Decoration - Interior" width="400" height="260" title="Painting &amp; Decoration - Interior" data-src="https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=v1NTZ1" data-srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=D7Luyd 2x" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=D7Luyd 2x" src="./Bark.com_ A Revolutionary Way to Hire Local Services &amp; Professionals_files/painting-decorating.jpg!d=v1NTZ1" data-was-processed="true" />
                            </div>
                            <p class="disc-title p-3 br-bottom mb-0">Painting &amp; Decoration - Interior</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="d-flex col-12 justify-content-between ">
                        <h4 class="discover-section-title">Accounting, Banking &amp; Finance</h4>
                        {/* <a href="https://www.bark.com/en/in/home/" class="align-self-center text-light-grey">
            View All
        </a> */}
                    </div>
                </div>

                <div class="row flex-nowrap scroll-touch pb-5">
                    <div class="col-8 col-md-4 card">
                        <div class="disc-item d-flex flex-column" data-category-id="179">
                            <div class="img-fluid discover-image-wrapper " data-remotable="Available online">
                                <img class="br-top img-fluid object-fit-cover lazy loaded" alt="Gardening" width="400" height="260" title="Gardening" data-src="https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1" data-srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=D7Luyd 2x" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=D7Luyd 2x" src="./Bark.com_ A Revolutionary Way to Hire Local Services &amp; Professionals_files/gardening.jpg!d=v1NTZ1" data-was-processed="true" />
                            </div>
                            <p class="disc-title p-3 br-bottom mb-0">Gardening</p>
                        </div>
                    </div>
                    <div class="col-8 col-md-4 card">
                        <div class="disc-item d-flex flex-column" data-category-id="1212">
                            <div class="img-fluid discover-image-wrapper " data-remotable="Available online">
                                <img class="br-top img-fluid object-fit-cover lazy loaded" alt="House Cleaning" width="400" height="260" title="House Cleaning" data-src="https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1" data-srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=D7Luyd 2x" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=D7Luyd 2x" src="./Bark.com_ A Revolutionary Way to Hire Local Services &amp; Professionals_files/house-cleaning.jpg!d=v1NTZ1" data-was-processed="true" />
                            </div>
                            <p class="disc-title p-3 br-bottom mb-0">House Cleaning</p>
                        </div>
                    </div>
                    <div class="col-8 col-md-4 card">
                        <div class="disc-item d-flex flex-column" data-category-id="42">
                            <div class="img-fluid discover-image-wrapper " data-remotable="Available online">
                                <img class="w-100 hover-shadow br-top img-fluid object-fit-cover lazy loaded" alt="Painting &amp; Decoration - Interior" width="400" height="260" title="Painting &amp; Decoration - Interior" data-src="https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=v1NTZ1" data-srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=D7Luyd 2x" srcset="https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=v1NTZ1 1x, https://d18jakcjgoan9.cloudfront.net/s/img/home/painting-decorating.jpg!d=D7Luyd 2x" src="./Bark.com_ A Revolutionary Way to Hire Local Services &amp; Professionals_files/painting-decorating.jpg!d=v1NTZ1" data-was-processed="true" />
                            </div>
                            <p class="disc-title p-3 br-bottom mb-0">Painting &amp; Decoration - Interior</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
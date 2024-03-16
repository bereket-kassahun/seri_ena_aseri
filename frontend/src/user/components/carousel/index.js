import './styles.css'
import '../../../style/hover-zoom.css'
import { Link } from 'react-router-dom'

import { ThemeContext } from "../../context/theme-context"
import { categories } from '../../../utils/categories'
import { useContext } from 'react'
export const Carousel = () => {

    const { currentTheme, updateLanguage } = useContext(ThemeContext);

    const subCategories = [
        {
            imgUrl: 'imgs/categories/1.png',
            title: 'Accounting'
        },
        {
            imgUrl: 'imgs/categories/2.png',
            title: 'Business'
        },
        {
            imgUrl: 'imgs/categories/3.png',
            title: 'Charity'
        },
        {
            imgUrl: 'imgs/categories/4.png',
            title: 'Art'
        },
        {
            imgUrl: 'imgs/categories/5.png',
            title: 'Manufacturing and Construction'
        },
        {
            imgUrl: 'imgs/categories/6.png',
            title: 'Environment and agriculture'
        },
        {
            imgUrl: 'imgs/categories/7.png',
            title: 'Healthcare'
        },
        {
            imgUrl: 'imgs/categories/8.png',
            title: 'Hospitality'
        },
        {
            imgUrl: 'imgs/categories/9.png',
            title: 'Information technology'
        },
        {
            imgUrl: 'imgs/categories/10.png',
            title: 'Law'
        },
        {
            imgUrl: 'imgs/categories/11.png',
            title: 'Marketing'
        },
        {
            imgUrl: 'imgs/categories/12.png',
            title: 'Property Management'
        },
        {
            imgUrl: 'imgs/categories/13.png',
            title: 'Social care'
        },
        {
            imgUrl: 'imgs/categories/14.png',
            title: 'Education'
        },
        {
            imgUrl: 'imgs/categories/15.png',
            title: 'Transport'
        },
        {
            imgUrl: 'imgs/categories/16.png',
            title: 'Car and Driving'
        },
        {
            imgUrl: 'imgs/categories/17.png',
            title: 'Law enforcement'
        },
        {
            imgUrl: 'imgs/categories/18.png',
            title: 'House Cleaning'
        },
        {
            imgUrl: 'imgs/categories/3.png',
            title: 'Tourism'
        },
    ]
    return (
        <>
            <div class='root-container' style={{ textAlign: 'center', marginBottom: '70px' }}>
                {/* <div class="row">
                    <div class="d-flex col-12 justify-content-between ">
                        <h4 class="discover-section-title">Available Services</h4>
                        <Link to='/category_list' class="align-self-center text-light-grey">
                            View All
                        </Link>
                    </div>
                </div> */}
                <div class="slider">
                    <div class="slide-track"  >
                        {
                            categories.map((value, index) => {
                                return (
                                    <div class="slide" >
                                        <Link to="/paginated_category_services" state={{ useSubcategory: false, category: value.category }} >
                                            <div className={'hover-zoom disc-item d-flex flex-column ' + ((index % 2 == 0) ? "upperImage" : "lowerImage")} data-category-id="179" style={{ textAlign: 'left' }}>
                                                <div class="img-fluid discover-image-wrapper " data-remotable="Available online">
                                                    <img class="br-top img-fluid object-fit-cover lazy loaded" alt={value.category} width="400" height="260" title="Gardening" data-src={value.img} src={value.img} />
                                                    {/* <p class="disc-title p-3 br-bottom mb-0" style={{ marginTop: '-80px', color: "white", fontSize: "1.5em" }}>{value.title}</p> */}
                                                    <button style={{ textAlign: 'left', marginTop: '-60px', color: "white", padding: '0px', paddingRight: '2px', paddingLeft: '2px', borderRadius: '0px', backgroundColor: '#2f3831', width: '100%' }} type="button" class="br-top img-fluid object-fit-cover lazy loaded btn btn-dark ">{value.category}</button>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Link to='/category_list' >
                    <button type="button" class="btn btn-primary" style={{ borderRadius: '20px', fontSize: '1.3em', }}>
                        {currentTheme.text.home.text25} &nbsp;<i class="bi bi-arrow-right"></i>
                    </button>
                </Link>
            </div>
        </>
    )
}
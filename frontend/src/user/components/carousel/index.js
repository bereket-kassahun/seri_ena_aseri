import './styles.css'
import '../../../style/hover-zoom.css'
import { Link } from 'react-router-dom'
export const Carousel = () => {

    const subCategories = [
        {
            imgUrl: 'imgs/categories/1.jpg',
            title: 'Administration'
        },
        {
            imgUrl: 'imgs/categories/2.jpg',
            title: 'Management'
        },
        {
            imgUrl: 'imgs/categories/3.jpg',
            title: 'Writers'
        },
        {
            imgUrl: 'imgs/categories/4.jpg',
            title: 'Actors'
        },
        {
            imgUrl: 'imgs/categories/5.jpg',
            title: 'Machine operators'
        },
        {
            imgUrl: 'imgs/categories/6.jpg',
            title: 'Engineering'
        },
        {
            imgUrl: 'imgs/categories/7.jpg',
            title: 'Carpenters'
        },
        {
            imgUrl: 'imgs/categories/8.jpg',
            title: 'Kitchen installation'
        },
        {
            imgUrl: 'imgs/categories/9.jpg',
            title: 'Painters and decorators'
        },
        {
            imgUrl: 'imgs/categories/10.jpg',
            title: 'Farmers'
        },
        {
            imgUrl: 'imgs/categories/11.jpg',
            title: 'Nurse'
        },
        {
            imgUrl: 'imgs/categories/12.jpg',
            title: 'Event organiser'
        },
        {
            imgUrl: 'imgs/categories/13.jpg',
            title: 'Administration'
        },
        {
            imgUrl: 'imgs/categories/14.jpg',
            title: 'Management'
        },
        {
            imgUrl: 'imgs/categories/15.jpg',
            title: 'Writers'
        },
        {
            imgUrl: 'imgs/categories/16.jpg',
            title: 'Actors'
        },
        {
            imgUrl: 'imgs/categories/17.jpg',
            title: 'Machine operators'
        },
        {
            imgUrl: 'imgs/categories/18.jpg',
            title: 'Engineering'
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
                            subCategories.map((value, index) => {
                                return (
                                    <div class="slide" >
                                        <Link to="/category" state={value.title} >
                                            <div className={'hover-zoom disc-item d-flex flex-column ' + ((index % 2 == 0) ? "upperImage" : "lowerImage")} data-category-id="179" style={{ textAlign: 'left' }}>
                                                <div class="img-fluid discover-image-wrapper " data-remotable="Available online">
                                                    <img class="br-top img-fluid object-fit-cover lazy loaded" alt={value.title} width="400" height="260" title="Gardening" data-src={value.imgUrl} src={value.imgUrl} />
                                                    {/* <p class="disc-title p-3 br-bottom mb-0" style={{ marginTop: '-80px', color: "white", fontSize: "1.5em" }}>{value.title}</p> */}
                                                    <button  style={{ textAlign: 'left',  marginTop: '-60px', color: "white", padding: '0px', paddingRight: '2px', paddingLeft: '2px', borderRadius:'0px', backgroundColor: '#2f3831', width: '100%' }} type="button" class="br-top img-fluid object-fit-cover lazy loaded btn btn-dark ">{value.title}</button>
                                                    
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
                        View All Categories &nbsp;<i class="bi bi-arrow-right"></i>
                    </button>
                </Link>
            </div>
        </>
    )
}
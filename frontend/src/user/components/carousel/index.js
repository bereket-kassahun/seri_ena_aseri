import './styles.css'
import '../../../style/hover-zoom.css'
import { Link } from 'react-router-dom'
export const Carousel = () => {

    const subCategories = [
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/personal-training.jpg!d=v1NTZ1',
            title: 'Administration'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1',
            title: 'Management'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/web-design.jpg!d=v1NTZ1',
            title: 'Writers'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1',
            title: 'Actors'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/accounting.jpg!d=v1NTZ1',
            title: 'Machine operators'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/counselling.jpg!d=v1NTZ1',
            title: 'Engineering'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/personal-training.jpg!d=v1NTZ1',
            title: 'Carpenters'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1',
            title: 'Kitchen installation'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/web-design.jpg!d=v1NTZ1',
            title: 'Painters and decorators'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1',
            title: 'Farmers'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/accounting.jpg!d=v1NTZ1',
            title: 'Nurse'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/counselling.jpg!d=v1NTZ1',
            title: 'Event organiser'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/personal-training.jpg!d=v1NTZ1',
            title: 'Administration'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/house-cleaning.jpg!d=v1NTZ1',
            title: 'Management'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/web-design.jpg!d=v1NTZ1',
            title: 'Writers'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/gardening.jpg!d=v1NTZ1',
            title: 'Actors'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/accounting.jpg!d=v1NTZ1',
            title: 'Machine operators'
        },
        {
            imgUrl: 'https://d18jakcjgoan9.cloudfront.net/s/img/home/counselling.jpg!d=v1NTZ1',
            title: 'Engineering'
        },
    ]
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="d-flex col-12 justify-content-between ">
                        <h4 class="discover-section-title">Available Services</h4>
                        <Link  to='' class="align-self-center text-light-grey">
                            View All
                        </Link>
                    </div>
                </div>
                <div class="slider">
                    <div class="slide-track"  >
                        {
                            subCategories.map((value, index) => {
                                return (
                                    <div class="slide" >
                                        <div className={'hover-zoom upperImage disc-item d-flex flex-column ' + (index % 2 == 0 ? 'upperImage' : 'lowerImage')} data-category-id="179">
                                            <div class="img-fluid discover-image-wrapper " data-remotable="Available online">
                                                <img class="br-top img-fluid object-fit-cover lazy loaded" alt={value.title} width="400" height="260" title="Gardening" data-src={value.imgUrl} src={value.imgUrl} />
                                            </div>
                                            <p class="disc-title p-3 br-bottom mb-0">{value.title}</p>
                                        </div>
                                    </div>
                                )

                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
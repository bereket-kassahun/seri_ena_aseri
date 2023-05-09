

import { useNavigate } from 'react-router-dom'
import '../../style/hover-zoom.css'
import { categories } from '../../utils/categories'
import { useEffect } from 'react'
export default function CategoryList() {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>

            <div style={{ height: "13vh", background: " #2f3831" }}>

            </div>

            <div class="container" style={{ marginTop: "30px" }}>

                {
                    categories.map((value, index) => {
                        const ret = (
                            <>
                                <div class="row">
                                    <div class="d-flex col-12 justify-content-between ">
                                        <h4 class="discover-section-title">{value.category}</h4>
                                    </div>
                                </div>
                                <div class="row flex-nowrap scroll-touch ">
                                    <div class="col-8 col-md-3 card">
                                        <div class="disc-item d-flex flex-column" data-category-id="179">
                                            <div class="img-fluid discover-image-wrapper hover-zoom" data-remotable="Available online">
                                                <img class="br-top img-fluid object-fit-cover lazy loaded" alt={value.category} width="400" height="260" title={value.category} data-src={value.img} data-srcset={value.img} srcset={value.img} src={value.img} data-was-processed="true" 
                                                onClick={() => {navigate( '/paginated_category_services', {state: {useSubcategory: false, category: value.category}})}}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-8 col-md-8 flex">
                                        {
                                            // console.log(value.subcategories.length);
                                            value.subcategories.map((value, index) => {
                                                return (
                                                    <button type="button" class="btn btn-outline-dark" style={{ margin: "5px" }}
                                                    onClick={() => {navigate('/paginated_category_services', {state: {useSubcategory: true, subcategory: value}})}}>
                                                        {value}
                                                    </button>
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                            </>
                        )
                        return ret
                    })
                }

            </div>
        </>
    )
}
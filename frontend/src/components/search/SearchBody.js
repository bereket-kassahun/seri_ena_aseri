import { VerifiedServiceCard } from "../cards/VerifiedServiceCard"
import { UnverifiedServiceCard } from "../cards/UnverifiedServiceCard"
export const SearchBody = ({data}) => {
    return (
        <section class="category-services-area padding-top-10 padding-bottom-100">
            <div class="container">
                <div class="row">
                    {
                        data.map((value, index) => (
                            value.professionalPaid ? <VerifiedServiceCard data={value}/> : <UnverifiedServiceCard data={value}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
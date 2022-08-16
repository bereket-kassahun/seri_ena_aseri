import { VerifiedServiceCard } from "../cards/VerifiedServiceCard"
import { UnverifiedServiceCard } from "../cards/UnverifiedServiceCard"
export const CategoryBody = ({results}) => {
    return (
        <section class="category-services-area padding-top-5 padding-bottom-100">
            <div class="container">
                <div class="row">
                    {
                        results.map((value, index) => (
                            value.verified ? <VerifiedServiceCard data={value}/> : <UnverifiedServiceCard data={value}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
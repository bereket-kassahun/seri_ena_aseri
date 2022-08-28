import { VerifiedServiceCard } from "../cards/VerifiedServiceCard"
import { UnverifiedServiceCard } from "../cards/UnverifiedServiceCard"
import { UnpaidCard } from "../cards/UnpaidCard"
import { PaidCard } from "../cards/PaidCard"
export const SearchBody = ({ data }) => {
    return (
        <div class="card-columns custom-columns" style={{padding: "10px"}}>
            {
                data.map((value, index) => (
                    value.professionalPaid ? <PaidCard data={value} /> : <UnpaidCard data={value} />
                ))
            }
        </div>
    )
}
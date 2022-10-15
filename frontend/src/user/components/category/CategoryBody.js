import { UnpaidCard } from "../cards/UnpaidCard"
import { PaidCard } from "../cards/PaidCard"
import "../../../style/custom-column.css"
export const CategoryBody = ({results}) => {
    return (
        <div class="card-columns custom-columns" style={{padding: "10px"}}>
            {
                results.map((value, index) => (
                    value.professionalPaid ? <PaidCard data={value} /> : <UnpaidCard data={value} />
                ))
            }
        </div>
    )
}
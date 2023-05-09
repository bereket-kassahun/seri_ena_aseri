
import "../../../style/custom-column.css"
import { PremiumAndStandardCard } from "../cards/PremiumAndStandardCard"
import { BasicCard } from "../cards/BasicCard"
export const CategoryBody = ({results}) => {
    return (
        <div class="card-columns custom-columns" style={{padding: "10px"}}>
            {
                results.map((value, index) => (
                    value.professionalPaid ? <PremiumAndStandardCard data={value} /> : <BasicCard data={value} />
                ))
            }
        </div>
    )
}
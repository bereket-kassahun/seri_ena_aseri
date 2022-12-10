import { UnpaidCard } from "../cards/UnpaidCard"
import { PaidCard } from "../cards/PaidCard"
import "./custom-column-service.css"
export const ServiceBody = ({data}) => {
    return (
        <div class="card-columns custom-columns-service" style={{padding: "10px"}}>
            {
                data.map((value, index) => (
                    value.professionalPaid ? <PaidCard data={value} /> : <UnpaidCard data={value} />
                ))
            }
        </div>
    )
}
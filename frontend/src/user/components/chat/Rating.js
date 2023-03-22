
import './rating.css'
export const Rating = ({ value }) => {
    const colored = value;
    const uncolored = 5 - value;
    let stars  = []
    console.log(value)
    for (let i = 0; i < colored; i++) {
        stars.push(<i class="fa fa-star rating-color"></i>);
    }
    for (let j = 0; j < uncolored; j++) {
        stars.push(<i class="fa fa-star"></i>);
    }

    return (
        <>
            <div class="small-ratings" style={{ display: "inline" }}>
                {stars}
            </div>
        </>
    )
}
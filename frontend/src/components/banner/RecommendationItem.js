

import { Link } from 'react-router-dom'

const RecommendationItem = ({ body }) => {

    return (
        <div style={{ padding: "10px" }}>
            <Link to="/search" state={ body } >
                <span class="search-text-item">
                    {body}
                </span>
            </Link>
        </div>
    )
}

export default RecommendationItem
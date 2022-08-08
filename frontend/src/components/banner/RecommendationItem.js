

const RecommendationItem = ({ url, img_url, body, price }) => {

    const imageStyle = {
        backgroundImage: 'url(' + img_url + ')'
    }
    return (
        <a href={url} class="search_servie_image_content text-left text-white">
            <div class="search_thumb bg-image" style={imageStyle}></div>
            <span class="search-text-item">
                {body}
                <br />
                {price}
            </span>
        </a>
    )
}

export default RecommendationItem
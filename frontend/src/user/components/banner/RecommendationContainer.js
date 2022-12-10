import RecommendationItem from './RecommendationItem'
const RecommendationContainer = ({ searchResult }) => {


    // console.log(typeof ("type", searchResult))
    const img_url = "https://elouzeir.sprintstudio.net/assets/uploads/media-uploader/frame-221651124049.jpg"
    return (
        <>
            {
                searchResult && searchResult.length > 0 &&
                <span id="all_search_result"><div class="card text-white bg-secondary mb-3 mt-2" style={{ border: 'none' }}>
                    <div class="card-body home_servie_serach_wrapper">
                        {
                            searchResult.map(result => (
                                <RecommendationItem body={result} />
                            ))
                        }
                    </div>
                </div></span>
            }
        </>

    )
}

export default RecommendationContainer
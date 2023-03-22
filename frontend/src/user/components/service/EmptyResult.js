export const EmptyResult = () => {
    return (
        <div style={{textAlign: 'center', alignContent: 'center', justifyContent: 'center', margin: '40px'}}>
            <i class="bi bi-search" style={{fontSize: '4em', color: '#fd0'}}></i>
            <p><strong>Sorry, we didn't understand that!</strong></p>
            <p style={{margin: 'auto', maxWidth: '40%'}}><em>m afraid the search query that you have requested is not recognised and so we have been unable to return any results. Please try another search or visit our traders directory.</em></p>
        </div>
    )
}
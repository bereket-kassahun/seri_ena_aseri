import { Link } from "react-router-dom"
export const WorkWithUs = () => {
    return (
        <>
            <div className="row" style={{
                backgroundImage: 'url(imgs/join_us_new.jpg)',
                height: '300px',
                color: 'white',
            }}>
                <div className="col-8" style={{ paddingLeft: '50px', display: 'flex', alignItems: 'start', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1 style={{ color: 'white', fontWeight: 'bold' }}>Join Us and Start Selling Your<br /> Services On Our Website</h1>

                    <p style={{ paddingLeft: '20px' }}> it is free to join</p>
                </div>
                <div className="col-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link to="/howto">
                        <button type="button" class="btn btn-danger" style={{ borderRadius: '20px', fontSize: '1.3em', }}>
                            Know How To Sell!
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
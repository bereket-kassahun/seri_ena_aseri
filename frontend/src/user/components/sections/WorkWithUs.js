import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/theme-context"
import { useContext } from "react"
export const WorkWithUs = () => {
    const { currentTheme, updateLanguage } = useContext(ThemeContext);
    return (
        <>
            <div className="row" style={{
                backgroundImage: 'url(imgs/banner.jpg)',
                height: '300px',
                color: 'white',
                marginBottom: '50px'
            }}>
                <div className="col-8" style={{ display: 'flex', alignItems: 'start', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1 style={{ color: 'white', fontWeight: 'bold' }}>{currentTheme?.text?.home?.text26}<br /> {currentTheme?.text?.home?.text27}</h1>

                    <p style={{ paddingLeft: '20px' }}> {currentTheme?.text?.home?.text28}</p>
                </div>
                <div className="col-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link to="/howto">
                        <button type="button" class="btn btn-danger" style={{ borderRadius: '20px', fontSize: '1.3em', }}>
                            {currentTheme?.text?.home?.text29}
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
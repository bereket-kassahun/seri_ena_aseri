
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/theme-context"
import { useContext } from "react"
export const JoinUs = () => {
    const { currentTheme, updateLanguage } = useContext(ThemeContext);
    return (
        <section class="join-area gradient-bg-2 margin-bottom-30  margin-top-30" style={{ backgroundColor: "" }}>
            <div class="join-shapes">
                <img src="imgs/circle11643799195.png" alt="" />
                <img src="imgs/circle21643799195.png" alt="" />
                <img src="imgs/dot-square1643799195.png" alt="" />
                <img src="imgs/line-cross1643799195.png" alt="" />
            </div>
            <div class="container container-two">
                <div class="join-content-wrapper">
                    <div class="join-contents">
                        {/* <h2 class="title">{currentTheme.text.home.text6}</h2> */}
                        {/* <h2 class="title">Do You Want to be a Seller?</h2> */}
                        {/* <span class="join-para">{currentTheme.text.home.text7}</span> */}
                        <span class="join-para" style={{display: 'inline', marginRight: '40px'}}>Become A Member</span>
                        <div class="btn-wrapper margin-top-50" style={{display: 'inline'}}>
                            <Link to="/register">
                                <a href="" class="cmn-btn btn-bg-3" style={{fontSize: '2em',textTransform: 'lowercase' }}
                                    >
                                    {/* {currentTheme.text.home.text8} */}
                                    apply online!
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
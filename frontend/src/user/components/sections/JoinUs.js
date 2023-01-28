
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/theme-context"
import { useContext } from "react"
export const JoinUs = () => {
    const { currentTheme, updateLanguage } = useContext(ThemeContext);
    return (
        <section class="join-area gradient-bg-2" data-padding-top="100" data-padding-bottom="100" style={{ backgroundColor: "" }}>
            <div class="join-shapes">
                <img src="imgs/circle11643799195.png" alt="" />
                <img src="imgs/circle21643799195.png" alt="" />
                <img src="imgs/dot-square1643799195.png" alt="" />
                <img src="imgs/line-cross1643799195.png" alt="" />
            </div>
            <div class="container container-two">
                <div class="join-content-wrapper">
                    <div class="join-contents">
                        <h2 class="title">{currentTheme.text.home.text6}</h2>
                        <span class="join-para">{currentTheme.text.home.text7}</span>
                        <div class="btn-wrapper margin-top-50">

                            <Link to="/login">
                                <a href="register20b9.html?type=seller" class="cmn-btn btn-bg-3"
                                    >
                                    {currentTheme.text.home.text8}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
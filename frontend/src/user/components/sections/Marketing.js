
import { Link } from "react-router-dom"
import { ThemeContext } from "../../context/theme-context"
import { useContext } from "react"
export const Marketing = () => {
    const { currentTheme, updateLanguage } = useContext(ThemeContext);
    return (
        <section class="join-area gradient-bg-2"  style={{ backgroundColor: "" , 
        marginBottom: '50px'}}>
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
                        <h2 class="title">Television and radio advertising on a national scale</h2>
                        <span class="join-para">We are pleased to announce SERRALE.com will advertise on national television and radio stations</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
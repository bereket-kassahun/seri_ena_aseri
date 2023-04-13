import '../../style/how-to.css'
import { useEffect, useContext } from 'react'
import { ThemeContext } from "../context/theme-context"
import { Link } from 'react-router-dom'
export const HowTo = () => {
    
    const { currentTheme, updateLanguage } = useContext(ThemeContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>

            <div style={{ height: "13vh", background: " #2f3831" }}>

            </div>
            <section id="features">
                <div class="container">
                    <div class="row text-center">

                        <div class="col-lg-9 col-lg-offset-3 col-md-10 col-md-offset-3 col-sm-12 col-sm-offset-3 col-xs-12  head-line">
                            <h2>{currentTheme.text.how_to.text1} </h2>
                            <hr />
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="feature-wrapper">
                                <div class="media">
                                    <span class="pull-left">
                                        <i class="fa fa-registered icon-wrapper" aria-hidden="true"></i>

                                    </span>
                                    <div class="media-body">
                                        <h4><strong>{currentTheme.text.how_to.text2}</strong></h4>
                                        {currentTheme.text.how_to.text3}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="feature-wrapper">
                                <div class="media">
                                    <span class="pull-left">
                                        <i class="fa fa-desktop icon-wrapper" aria-hidden="true"></i>

                                    </span>
                                    <div class="media-body">
                                        <h4><strong>{currentTheme.text.how_to.text4}</strong></h4>
                                        {currentTheme.text.how_to.text5}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="feature-wrapper">
                                <div class="media">
                                    <span class="pull-left">
                                        <i class="fa fa-credit-card icon-wrapper" aria-hidden="true"></i>

                                    </span>
                                    <div class="media-body">
                                        <h4><strong>{currentTheme.text.how_to.text6}</strong></h4>
                                        {currentTheme.text.how_to.text7}
                                        <ol style={{ listStyleType: "square", color: "black", }}>
                                            <li style={{ margin: "0px" }}>{currentTheme.text.how_to.text8}</li>
                                            <li style={{ margin: "0px" }}>{currentTheme.text.how_to.text9}</li>
                                            <li style={{ margin: "0px" }}>{currentTheme.text.how_to.text10}</li>
                                        </ol>

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="feature-wrapper">
                                <div class="media">
                                    <span class="pull-left">
                                        {/* <i class="fa fa-laptop icon-wrapper"></i> */}
                                        <i class="fa fa-plus icon-wrapper" aria-hidden="true"></i>
                                    </span>
                                    <div class="media-body">
                                        <h4><strong>{currentTheme.text.how_to.text11}</strong></h4>
                                        {currentTheme.text.how_to.text12}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="feature-wrapper">
                                <div class="media">
                                    <span class="pull-left">
                                        {/* <i class="fa fa-compass icon-wrapper"></i> */}
                                        <i class="fa fa-check icon-wrapper" aria-hidden="true"></i>
                                    </span>
                                    <div class="media-body">
                                        <h4><strong>{currentTheme.text.how_to.text13}</strong></h4>
                                        {currentTheme.text.how_to.text14}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                {/* <div class="container">
                    <div class="row">
                        <div class="primary col-md-12 col-sm-12 col-xs-12">
                            <section class="about section">
                                <div class="section-inner">
                                    <h2 class="heading">About Me</h2>
                                    <div class="content">
                                        <p>We hope this guide has been helpful in getting you started on the SIRA ALLE platform. If you have any further questions or need assistance, please do not hesitate to contact our customer service team. We wish you the best of luck in finding your next project and connecting with new clients on the SIRA ALLE platform. Remember to keep your profile updated and respond to any inquiries in a timely manner to increase your chances of getting hired.</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div> */}


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
                                <h2 class="title">{currentTheme.text.how_to.text15}</h2>
                                <span class="join-para">{currentTheme.text.how_to.text16}
                                </span>
                                <div class="btn-wrapper margin-top-50">

                                    <Link to="/login">
                                        <a href="register20b9.html?type=seller" class="cmn-btn btn-bg-3"
                                        >
                                            {currentTheme.text.how_to.text17}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
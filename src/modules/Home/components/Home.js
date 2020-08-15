import React, {Fragment } from 'react';

import HeaderComponent from './../../Shared/components/HeaderComponent';
import FooterComponent from './../../Shared/components/FooterComponent';
import front_page_img from './../../../assets/images/bg_hero_frontpage.jpg';
import info_img from './../../../assets/images/bg_wmg_brawlstars.jpg';
import career_img from './../../../assets/images/bg_fp_nextstep.jpg';
import trending_img_1 from './../../../assets/images/news_thumbnail_brawleveryone.jpg';
import trending_img_2 from './../../../assets/images/supercell_10y_keyart_supercell_newsarticle_hero_1500x1130px.jpg';
import trending_img_3 from './../../../assets/images/news_thumbnail_haydaypopbbeta.jpg';
import trending_img_4 from './../../../assets/images/news_thumbnail_supercellid.jpg';
import info_right_img  from './../../../assets/images/fp_wmg_brawlstars.png';
import '../styles/home-style.css';

const home = () => {
    return (
        <Fragment>
            <div className="app-home">
                <HeaderComponent />
                <section className="cover-section">
                    <img src={front_page_img} className="front-img" alt="main-img" />
                </section>
                <section className="trending-games-section">
                    <div className="grid-container">
                        <div className="grid-item">
                            <img src={trending_img_1} className="trending-img " alt="main-img" />
                            <article>
                                <h3 className="text-red">NEWS</h3>
                                <h3>Introducing Brawl Stars for Everyone</h3>
                            </article>
                        </div>
                        <div className="grid-item">
                            <img src={trending_img_3} className="trending-img " alt="main-img" />
                            <article>
                                <h3 className="text-red">NEWS</h3>
                                <h3>10 Learnings from 10 Years</h3>
                            </article>
                        </div>
                        <div className="grid-item">
                            <img src={trending_img_2} className="trending-img " alt="main-img" />
                            <article>
                                <h3 className="text-red">NEWS</h3>
                                <h3>Welcome to the Neighbourhood!</h3>
                            </article>
                        </div>
                        <div className="grid-item">
                            <img src={trending_img_4} className="trending-img " alt="main-img" />
                            <article>
                                <h3 className="text-red">NEWS</h3>
                                <h3>Never Lose Your Game</h3>
                            </article>
                        </div>
                    </div>
                    <div  style={{marginTop: '20px', textAlign:'center'}}>
                        <button className="btn-primary">
                            NEWS
                        </button>
                    </div>
                </section>
                <section>
                    <div  className="info-section">
                        <img src={info_img} className="front-img" alt="main-img" />
                        <div className="left-content">
                           <div className="header-content">WE MAKE GAMES</div>
                           <div className="main-info-content">Check out Brawl Stars, our newest fast-paced <br />multiplayer game that comes packed with mayhem.</div>
                           <button className="bottom-content btn-secondary">SEE GAMES</button>
                        </div>
                        <div className="right-content">
                            <img src={info_right_img} className="front-img" alt="main-img" />
                        </div>
                    </div>
                </section>
                <section >
                    <div className="career-section">
                        <img src={career_img} className="front-img" alt="main-img" />
                        <div className="left-content">
                           <div className="header-content">CAREERS</div>
                           <div className="main-info-content">Join us and create games that are played for years  <br /> and remembered forever.</div>
                           <button className="bottom-content btn-secondary">SEE CAREERS</button>
                        </div>
                    </div>
                </section>
                <FooterComponent />
            </div>
        </Fragment>
    )
}

export default home;
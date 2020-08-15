import React from 'react';
import info_right_img_1  from './../../../../assets/images/bg_gamewebsite_hayday.png';
import career_img from './../../../../assets/images/games_hayday_community_bg.jpg';

const SocialMedia = () => {
    return (
        <section >
            <div className="news-section">
                <img src={career_img} className="front-img" alt="main-img" />
                <div className="left-content">
                    <div className="header-content">STAY UP-TO-DATE</div>
                    <div className="main-info-content-1">To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.</div>
                    <div className="main-info-content">FOLLOW HAY DAY ON</div>
                    <button className="bottom-content btn-secondary">SOCIAL MEDIA LINKS</button>
                </div>
                <div className="right-content">
                    <img src={info_right_img_1} className="front-img" alt="main-img" />
                </div>
            </div>
        </section>
    )
}

export default SocialMedia;
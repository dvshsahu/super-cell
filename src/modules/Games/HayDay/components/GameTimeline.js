import React from 'react';
import info_right_img_2  from './../../../../assets/images/bg_intro_hayday.jpg';

const GameTimeline = ({GameTimeline}) => {
    return (
        <section>
            <div className="para-2-section">
                <div className="left-content">
                    <div className="header-content">STAY UP-TO-DATE</div>
                    <div className="main-info-content-1">
                        {GameTimeline}
                    </div>
                    <div className="main-info-content">FOLLOW HAY DAY ON</div>
                    <button className="bottom-content btn-secondary">SOCIAL MEDIA LINKS</button>
                </div>
                <div className="right-content">
                    <img src={info_right_img_2} className="front-img" alt="main-img" />
                </div>
            </div>
        </section>
    )
}

export default GameTimeline;
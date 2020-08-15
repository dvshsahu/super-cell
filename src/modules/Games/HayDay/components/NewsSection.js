import React from 'react';
import info_img from './../../../../assets/images/bg_timeline_hayday.png';

const NewsSection = ({ NewsSection }) => {
    return (
        <section>
            <div className="hayday-info-section">
                <div className="left-content">
                    <div className="header-content">WE MAKE GAMES</div>
                    <div className="main-info-content">
                        {NewsSection}
                    </div>
                    <button className="bottom-content btn-secondary">SEE GAMES</button>
                </div>
                <div className="right-content">
                    <img src={info_img} className="front-img" alt="main-img" />
                </div>
            </div>
        </section>
    )
}

export default NewsSection;
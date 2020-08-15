import React, {Fragment } from 'react';
import { connect } from 'react-redux';

import { getGameTimeLine, getNewsSection} from '../actions/HaydayAction';

import HeaderComponent from './../../../Shared/components/HeaderComponent';
import FooterComponent from './../../../Shared/components/FooterComponent';
import front_page_img from './../../../../assets/images/bg_hero_hayday.jpg';
import './../styles/hayday-styles.css';

import GameTimeline from './GameTimeline';
import NewsSection from './NewsSection';
import SocialMedia from './SocialMedia';

class HayDay extends React.Component { 

    componentDidMount() {
        this.getTimelineData();
        this.getNewsData();
    }

    getTimelineData = () => {
        this.props.getDataForTimeLine();
    }

    getNewsData = () => {
        this.props.getDataForNewsSection();
    }

    render() {
        return (
            <Fragment>
                <div className="app-home">

                    <HeaderComponent />
                    <section className="cover-section">
                        <img src={front_page_img} className="front-img" alt="main-img" />
                    </section>

                    {/* GameTimeline component to show timeline Data */}
                    <GameTimeline GameTimeline={this.props.GameTimeline}/>
                    
                    {/* News Section component to show latest News */}
                    <NewsSection NewsSection={this.props.NewsSection} />
                   
                    {/* Social Media links in the Social Media Component */}
                    <SocialMedia />
                    
                    <FooterComponent />
                </div>
            </Fragment>
        )
    }

}

const mapDispatchToProps = {
    getDataForTimeLine: getGameTimeLine,
    getDataForNewsSection : getNewsSection
};

const mapStateToProps = (state) => ({
    GameTimeline: state.hayday.GameTimeline,
    NewsSection : state.hayday.NewsSection
})

// Connecting to store using connect fucntion,
// it takes mapStateToProps & MapDispatchToProps 
export default connect(mapStateToProps, mapDispatchToProps)(HayDay);

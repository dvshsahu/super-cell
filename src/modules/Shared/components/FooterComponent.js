
import React, {useState} from 'react';
import youtube_img from './../../../assets/images/some_youtube.png';
import facebook_img from './../../../assets/images/some_facebook.png';
import instagram_img from './../../../assets/images/some_instagram.png';
import twitter_img from './../../../assets/images/some_twitter.png';
import linkedin_img from './../../../assets/images/some_linkedin.png';
import glassdoor_img from './../../../assets/images/some_glassdoor.png';
import google_play_img from './../../../assets/images/footer_googleplay.png';
import app_store_img from './../../../assets/images/footer_appstore.png';
import footer_logo from './../../../assets/images/logo_supercell@2x.png';
import '../styles/footer-style.css';
const cookieDispClassName = 'display-none';
const FooterComponent = () => {
    const [cookieConsentClass, setCookieConsentClass] = useState('cookie-consent');
    var setConsentClass = () => {
        const exdays = 5;
        const cname = 'cookie-consent';
        const cvalue = 'cookie-consent';
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        if(cookieConsentClass == cookieDispClassName ) setCookieConsentClass('cookie-consent');
        else setCookieConsentClass(cookieDispClassName);
    }
    return (
        <footer>
            <div className="footer">
                <nav className="social-media-connect">
                    <div className="main-content"> Follow us on</div>
                    <ul className="social-media-nav">
                        <li>
                            <img src={youtube_img} className="ft-youtube" alt="youtube img" />
                        </li>
                        <li>
                            <img src={facebook_img} className="ft-facebook" alt="facebook img" />
                        </li>
                        <li>
                            <img src={instagram_img} className="ft-instagram" alt="instagram img" />
                        </li>
                        <li>
                            <img src={twitter_img} className="ft-twitter" alt="twitter img" />
                        </li>
                        <li>
                            <img src={linkedin_img} className="ft-linkedin" alt="linkedin img" />
                        </li>
                        <li>
                            <img src={glassdoor_img} className="ft-glassdoor" alt="glassdoor img" />
                        </li>
                        <li className="store-connect">
                            <img src={google_play_img} className="ft-glassdoor" alt="glassdoor img" />
                        </li>
                        <li className="store-connect">
                            <img src={app_store_img} className="ft-glassdoor" alt="glassdoor img" />
                        </li>
                    </ul>
                    {/* <div className="store-connect">
                        <img src={google_play_img} alt="Google play Connect" />
                        <img src={app_store_img} alt="app Store Connect" />
                    </div> */}
                </nav>
                <nav className="media-links-connect">
                    <ul className="media-link-nav">
                        <li>
                            <span>News</span>
                        </li>
                        <li>
                            <span>For Media</span>
                        </li>
                        <li>
                            <span>Terms of Service</span>
                        </li>
                        <li>
                            <span>Privacy Policy</span>
                        </li>
                        <li>
                            <span>Parent's Guide</span>
                        </li>
                        <li>
                            <span>Safe and Fair Play</span>
                        </li>
                        <li>
                            <span>Investments</span>
                        </li>
                    </ul>
                </nav>
                <div className="playsimple-connect">
                    <address>
                        <div>Supercell Oy</div>
                        <div>Itämerenkatu 11-13</div>
                        <div>00180 Helsinki</div>
                        <div>Finland</div>
                    </address> 
                    <div className="supercell-logo">
                        <img src={footer_logo} alt="footer-logo" />
                    </div> 
                </div>
            
            </div>
            <div className={cookieConsentClass}>
                <div className="cookie-msg">
                    <div>Our site uses cookies to enhance your user experience and measure site traffic.</div>
                    <div>Learn More</div>
                </div>
                <div>
                    <button onClick={()=> setConsentClass()} className="btn-primary">GOT IT</button>
                </div>
                
            </div>
        </footer>
    )
}

export default FooterComponent;

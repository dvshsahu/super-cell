import React, {useState} from 'react';
import logo from './../../../assets/images/logo_supercell@2x.png';
import logo_id from './../../../assets/images/logo_supercell_id.png';
import search_img from './../../../assets/images/search-icon@2x.png';
import { Link } from 'react-router-dom';
import './../styles/header-style.css';
const HeaderComponent = () => {
    const [dispNone, setDispNone] = useState('display-none');
    function setDisplay() {
        if(dispNone == 'display-none') setDispNone('hidden-header');
        else setDispNone('display-none');
    }
    return (
        <header>
            <div className="header">
                <div className="header-logo">
                    <Link to="/" > 
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>
                <div className="">
                    <nav className="header-nav">
                        <ul className="">
                            <li>
                                <span>Our Story</span>
                            </li>
                            <li onClick={() => setDisplay()}>
                                <span>Games</span>
                            </li>
                            <li>
                                <span>Careers</span>
                            </li>
                            <li>
                                <span>Support</span>
                            </li>
                            <li>
                                <span>Safe & Fair play</span>
                            </li>
                        </ul>
                       
                    </nav>
                    
                </div>
                <div className="header-search">
                    <div>
                    <img src={search_img} alt="logo" />
                    </div>
                </div>
                <div className="header-logo-id">
                   <img src={logo_id} alt="logo" />
                </div>
            </div>
            <div className={dispNone}>
                <div>
                    <nav className="header-nav">
                        <ul className="">
                            <li>
                               <Link to="/games/hayday" > <span>Hay Day</span> </Link> 
                            </li>
                            <li>
                               <a href="https://supercell.com/en/games/clashofclans/" ><span>Clash of Clans</span></a> 
                            </li>
                            <li>
                                <span>Boom Beach</span>
                            </li>
                            <li>
                                <span>Clash Royale</span>
                            </li>
                            <li>
                                <span>Brawl Stars</span>
                            </li>
                        </ul>
                       
                    </nav>
                    
                </div>
            </div>
       
        </header>
    )
}

export default HeaderComponent;
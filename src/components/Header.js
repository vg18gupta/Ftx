import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from'../Static/rewardo.png';
import './Header.css';


export default function Header({}) {
    const history = useNavigate();
    const [isLogedIn, setIsLogedIn] = useState(false);
    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        }
        else
        {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end == -1) {
            end = dc.length;
            }
        }
        return decodeURI(dc.substring(begin + prefix.length, end));
    } 

    useEffect(()=>{
        var myCookie = JSON.parse(getCookie("user"));
        if (myCookie !== null) {
            setIsLogedIn(myCookie.isLogedIn);
        }
    },[])
        return ( 
        <header id="masthead" className="parent-header">
                <div id="header-sticky">
                    <div className="container">

                        <div className="site-branding">
                            <a className="custom-logo-link" rel="home" title="Rewardo" onClick={()=>{history('/')}}>
                                <img width="220" height="70" src={mainLogo} className="custom-logo" alt="Logo" loading="lazy" /></a>                </div>


                        <nav id="site-navigation" className="main-navigation">

                        </nav>
                        <nav className="main-navigation--right">
                            <div className="menu-primary-right-buttons-container">
                                <ul id="primary-menu-right-button" className="menu">
                                    {/* <li id="menu-item-2887" className="login-menu button"  onClick={()=>{history('/aboutus')}}>
                                        <p>About us</p>
                                    </li> */}
                                    {
                                        isLogedIn === false 
                                        ? (
                                            <li id="menu-item-2889" className="signup-menu button"  onClick={()=>{history('/signup')}}>
                                                <p>Sign Up</p>
                                            </li>
                                        ) : (
                                            <div className="avatar">
                                                <img height="30px" width="30px" src="https://www.uidownload.com/files/790/68/996/free-set-of-material-design-avatars.png"></img>
                                            </div>
                                        )
                                    }
                                </ul>
                            </div>                
                        </nav>
                    </div>
                </div>
            </header>)
}
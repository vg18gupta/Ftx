import { useNavigate } from 'react-router-dom';
import mainLogo from'../Static/logo.png';
import './Header.css';


export default function Header() {
    const history = useNavigate();
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
                                    <li id="menu-item-2887" className="login-menu button"  onClick={()=>{history('/aboutus')}}>
                                        <p>About us</p>
                                    </li>
                                    <li id="menu-item-2889" className="signup-menu button"  onClick={()=>{history('/signup')}}>
                                        <p>Sign Up</p>
                                    </li>
                                </ul>
                            </div>                
                        </nav>
                    </div>
                </div>
            </header>)
}
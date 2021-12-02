import { useNavigate } from 'react-router-dom';
import './Header.css';


export default function Header() {
    const history = useNavigate();
        return ( 
        <header id="masthead" className="parent-header">
                <div id="header-sticky">
                    <div className="container">

                        <div className="site-branding">
                            <a href="https://www.hackerrank.com/developer-skills-platform" className="custom-logo-link" rel="home" title="Hackerrank">
                                <img width="220" height="70" src="https://cdn5.vectorstock.com/i/1000x1000/92/59/simple-lettering-bold-random-logo-vector-33589259.jpg" className="custom-logo" alt="Logo" loading="lazy" /></a>                </div>


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
import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Header from './Header'
import './Home.css';


export default function Home() {
    const [isLogedIn, setIsLogedIn] = useState(true);
    return (
        <div>
            <Header />
            <div className="about-parent-container">
                <div className="parent-container">
                    <div className="left-container">
                        <div className="about-container">
                            Matching customers <br/>with great business.
                        </div>
                        <div className="login-signup-container">
                            <div className="login-container">
                                <h3 class="login-heading">
                                    <span class="login-heading-text">For Business</span>
                                </h3>
                                <p class="about-business">
                                    <span>We are the market-leading technical</span> <span>interview platform to identify and hire developers wherever they are.
                                    </span>
                                </p>
                                <div className="login-button"><Link to="/business/login">Login</Link></div>
                            </div>
                            <div className="signup-container">
                                <h3 class="login-heading">
                                    <span class="login-heading-text">For Customers</span>
                                </h3>
                                <p class="about-customer">
                                    <span>We are the market-leading technical</span> <span>interview platform to identify and hire developers wherever they are.
                                    </span>
                                </p>
                                <div className="login-button"><Link to="/customer/login">Login</Link></div>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <img width="520" src="https://thevault.exchange/resources/wp-content/uploads/2021/03/74-743103_listening-to-customers-png-happy-customer-png-transparent.png" className="custom-logo" alt="Logo" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    );
}
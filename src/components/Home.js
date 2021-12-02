import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import './Home.css';


export default function Home() {
    const history = useNavigate();
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
                                    <span>Login to create rewards, earn trust and grow your business with us.
                                    </span>
                                </p>
                                <div className="login-button"  onClick={()=>{history('/business/login')}}>Login</div>
                            </div>
                            <div className="signup-container">
                                <h3 class="login-heading">
                                    <span class="login-heading-text">For Customers</span>
                                </h3>
                                <p class="about-customer">
                                    <span>Login to get discounts on your favourite products from your favourite shops.
                                    </span>
                                </p>
                                <div className="login-button" onClick={()=>{history('/customer/login')}}>Login</div>
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
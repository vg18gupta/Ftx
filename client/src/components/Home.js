import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Cover from '../Static/cover.png';
import './Home.css';
import LayoutWrapper from './Layout';
import { AuthContext } from '../context/authContext';

export default function Home() {
  const history = useNavigate();
  const authContext = useContext(AuthContext);
  return (
    <LayoutWrapper>
      <div className="about-parent-container">
        <div className="parent-container">
          <div className="left-container">
            {!authContext.isAuthenticated() ? (
              <>
                <div className="about-container">
                  Matching customers <br />
                  with great business.
                </div>
                <div className="login-signup-container">
                  <div className="login-container">
                    <h3 class="login-heading">
                      <span class="login-heading-text">For Business</span>
                    </h3>
                    <p class="about-business">
                      <span>
                        Login to create rewards, earn trust and grow your business with us.
                      </span>
                    </p>
                    <div
                      className="login-button"
                      onClick={() => {
                        history('/business/login');
                      }}
                    >
                      Login
                    </div>
                  </div>
                  <div className="signup-container">
                    <h3 class="login-heading">
                      <span class="login-heading-text">For Customers</span>
                    </h3>
                    <p class="about-customer">
                      <span>
                        Login to get discounts on your favourite products from your favourite shops.
                      </span>
                    </p>
                    <div
                      className="login-button"
                      onClick={() => {
                        history('/customer/login');
                      }}
                    >
                      Login
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="about-container secondary">
                  Rewardo rewards you with vouchers, cashbacks, reward points and a lot more just by
                  shopping with our enabled partners! We let businesses offer rewards based on the
                  amount purchased by you from them.
                  <br />
                  You shop more, you earn more!
                  <br />
                  Businesses can offer from a mere 1% to upto 50% per order. Yes you heard it right!
                  Our AI model will offer you a more personalised reward, so you can have a treat on
                  us on your favourite snack and sweets.
                  <br />
                  You shop more, you get more!
                  <br />
                  And we saved the best for the last. Our services are absolutely free! We won't
                  charge you anything in the future if you promise us never to leave our Rewardo
                  family.
                </div>
              </>
            )}
          </div>
          <div className="right-container">
            {!authContext.isAuthenticated() ? (
              <img
                width="520"
                src="https://thevault.exchange/resources/wp-content/uploads/2021/03/74-743103_listening-to-customers-png-happy-customer-png-transparent.png"
                className="custom-logo"
                alt="Logo"
                loading="lazy"
              />
            ) : (
              <img
                width="520"
                height="600px"
                src={Cover}
                className="custom-logo"
                alt="Logo"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}

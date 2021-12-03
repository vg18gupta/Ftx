import firebase from 'firebase/compat';
import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/authContext';
import './Login.css';

export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const url = window.location.href;
  const type = url.split('/')[3];
  const history = useNavigate();
  const authContext = useContext(AuthContext);

  function handleEmailChange(e) {
    setLoginData({ ...loginData, email: e.target.value });
  }
  function handlePasswordChange(e) {
    setLoginData({ ...loginData, password: e.target.value });
  }
      function getId() {
        return fetch(`/api/id?email=${loginData.email}`,
            {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: "GET",
            })
            .then(res => {
              return res.json();
            })
            .then(id => {
              return id;
            })
            .catch(err => {
                console.log(err)
            })
    }
  async function handleSubmitClick() {
    try {
      await firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.password);
      const id = await getId();
      authContext.setAuthInfo(loginData.email, { isLoggedIn: true, type: type, id: id }, 1);
      if (type === 'customer') {
        history('/customer/dashboard');
      } else {
        history('/business/dashboard');
      }
    } catch (error) {
      return setErrorMessage(error.message);
    }
  }
  function handleBackClick() {
    history(-1);
  }
  return (
    <div className="login-parent-container">
      <div className="login-parent">
        <div className="backIcon" onClick={handleBackClick}>
          <img
            height="40px"
            width="40px"
            src="https://static.thenounproject.com/png/344330-200.png"
          />
        </div>
        <div id="card">
          <div id="card-content">
            <div id="card-title">
              <h2>LOGIN</h2>
              <div class="underline-title"></div>
            </div>
            <form method="post" class="form">
              <label className="user-mail" for="user-email">
                &nbsp;Email
              </label>
              <input
                id="user-email"
                className="form-content"
                type="email"
                name="email"
                autocomplete="on"
                required
                onChange={handleEmailChange}
              />
              <div class="form-border"></div>
              <label className="user-password" for="user-password">
                &nbsp;Password
              </label>
              <input
                id="user-password"
                class="form-content"
                type="password"
                name="password"
                required
                onChange={handlePasswordChange}
              />
              <div class="form-border"></div>
              {/* <a id="forgot-pass-parent" href="#">
                        <legend id="forgot-pass">Forgot password?</legend>
                    </a> */}
              <div id="submit-btn" onClick={handleSubmitClick}>
                Submit
              </div>
              <p
                id="signup"
                onClick={() => {
                  history('/signup');
                }}
              >
                Don't have account yet?
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

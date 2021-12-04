import { useState, useContext } from 'react';
import firebase from 'firebase/compat';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import { openNotification } from './Notification';
import './Signup.css';

export default function SignUp() {
  const history = useNavigate();
  const [signUp, signUpSet] = useState({
    name: '',
    password: '',
    email: '',
    type: 'Business',
    phonenumber: '',
  });
  const [name, setName] = useState('Name');
  const authContext = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState('');
  function handleEmailChange(e) {
    signUpSet({ ...signUp, email: e.target.value });
  }
  function handlePasswordChange(e) {
    signUpSet({ ...signUp, password: e.target.value });
  }
  function getId() {
    return fetch(`/api/id?email=${signUp.email}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((id) => {
        return id;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function registerUser() {
    const data = {
      name: signUp.name,
      email: signUp.email,
      type: signUp.type,
      phone: signUp.phonenumber,
    };
    return fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function handleSubmitClick() {
    try {
      const credentials = await firebase
        .auth()
        .createUserWithEmailAndPassword(signUp.email, signUp.password);
      await credentials.user?.updateProfile({ displayName: `${signUp.name}` });
      let userData = {
        name: signUp.fname,
        email: signUp.email,
        password: signUp.password,
        userType: signUp.type,
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      };
      await fetch('/api/add_user', requestOptions);
      await registerUser();
      const id = await getId();
      authContext.setAuthInfo(signUp.email, { isLoggedIn: true, type: signUp.type, id: id }, 1);

      if (signUp.type === 'Customer') {
        history('/customer/dashboard');
      } else {
        history('/business/dashboard');
      }
    } catch (error) {
      openNotification(error.message);
    }
  }
  function handleNameChange(e) {
    signUpSet({ ...signUp, name: e.target.value });
  }
  function handleTypeChange(e) {
    console.log(e.target.value);
    if (e.target.value === 'Customer') {
      setName('Name');
    } else {
      setName('Shop Name');
    }
    signUpSet({ ...signUp, type: e.target.value });
  }
  function handleBackClick() {
    history(-1);
  }
  function handlePhonenumberChange(e) {
    signUpSet({ ...signUp, phonenumber: e.target.value });
  }
  return (
    <div className="signup-parent-container">
      <div className="signup-parent">
        <div className="backIcon" onClick={handleBackClick}>
          <img
            height="40px"
            width="40px"
            src="https://static.thenounproject.com/png/344330-200.png"
          />
        </div>
        <div id="signup-card">
          <div id="card-content">
            <div id="card-title">
              <h2>SIGN UP</h2>
              <div class="underline-title"></div>
            </div>
            <form method="post" class="form">
              <label className="user-mail" for="user-email">
                {`${name}`}
              </label>
              <input
                id="user-email"
                className="form-content"
                type="name"
                name="name"
                autocomplete="on"
                required
                onChange={handleNameChange}
              />
              <div class="form-border"></div>
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
              <label className="user-phonenumber" for="user-phonenumber">
                &nbsp;Phone Number
              </label>
              <input
                id="user-phonenumber"
                class="form-content"
                type="mumber"
                name="phonenumber"
                required
                onChange={handlePhonenumberChange}
              />
              <div class="form-border"></div>
              {/* <a id="forgot-pass-parent" href="#">
                        <legend id="forgot-pass">Forgot password?</legend>
                    </a> */}
              <div className="type-container">
                <input
                  className="radio-first"
                  type="radio"
                  value="Business"
                  name="gender"
                  checked="checked"
                  onChange={handleTypeChange}
                />{' '}
                Business
                <input
                  className="radio-second"
                  type="radio"
                  value="Customer"
                  name="gender"
                  onChange={handleTypeChange}
                />{' '}
                Customer
              </div>
              <div id="signup-submit-btn" onClick={handleSubmitClick}>
                Submit
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

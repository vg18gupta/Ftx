import firebase from "firebase/compat";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './Login.css';

export default function Login() {
    const [loginData, setLoginData] = useState({email: "", password: ""});
    const [errorMessage, setErrorMessage] = useState('');
    const url = window.location.href;
    const type = url.split('/')[3];
    const history = useNavigate();
    function handleEmailChange(e) {
        setLoginData({...loginData, email: e.target.value})
    }
    function handlePasswordChange(e) {
        setLoginData({...loginData, password: e.target.value})
    }
    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    async function handleSubmitClick() {
        try{
            await firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.password);
            //reset();
            setCookie(loginData.email, {isLogedin: true, type: type}, 1)
            history('/');
        }
        catch (error){
            return setErrorMessage(error.message);
        }
    }
    return (
        <div classname="parent-container">
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
                    <input id="user-email" className="form-content" type="email" name="email" autocomplete="on" required onChange={handleEmailChange} />
                    <div class="form-border"></div>
                    <label className="user-password" for="user-password">&nbsp;Password
                    </label>
                    <input id="user-password" class="form-content" type="password" name="password" required onChange={handlePasswordChange}/>
                    <div class="form-border"></div>
                    {/* <a id="forgot-pass-parent" href="#">
                        <legend id="forgot-pass">Forgot password?</legend>
                    </a> */}
                    <div id="submit-btn"  onClick={handleSubmitClick}>Submit</div>
                    <a href="#" id="signup">Don't have account yet?</a>
                </form>
                </div>
            </div>
        </div>
    )
}
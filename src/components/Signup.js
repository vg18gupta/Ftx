import { useState } from 'react'
import './Signup.css';

export default function Login() {
    const [name, setName] = useState('Name');
    const [type, setType] = useState('Business');
    function handleEmailChange(e) {
        console.log(e.target.value)
    }
    function handlePasswordChange(e) {
        console.log(e.target.value)
    }
    function handleSubmitClick() {
        console.log("submit")
    }
    function handleNameChange(e) {
        console.log(e.target.value)
    }
    function handleTypeChange(e) {
        console.log(e.target.value)
        // if(myRadio.value === 'Customer') {
        //     setName('Shop Name')
        // }
    }
    return (
        <div classname="parent-container">
            <div id="card">
                <div id="card-content">
                <div id="card-title">
                    <h2>SIGN UP</h2>
                    <div class="underline-title"></div>
                </div>
                <form method="post" class="form">
                    <label className="user-mail" for="user-email">
                        {`${name}`}
                    </label>
                    <input id="user-email" className="form-content" type="name" name="name" autocomplete="on" required onChange={handleNameChange} />
                    <div class="form-border"></div>
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
                    <div className="type-container">
                        <input className="radio-first" type="radio" value="Business" name="gender" checked="checked" onChange={handleTypeChange}/> Bussiness
                        <input className="radio-second" type="radio" value="Customer" name="gender"  onChange={handleTypeChange}/> Customer
                    </div>
                    <button id="submit-btn"  onClick={handleSubmitClick}>Submit</button>
                </form>
                </div>
            </div>
        </div>
    )
}
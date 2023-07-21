import React from "react";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./fonts/stylesheet.css"

function SignIn() {
  return (
    <>
      <div className="container">
        <div className="card">
            <div className="logo">
                <span>chatmate</span>
            </div>
            <div className="login_heading">
                Login
            </div>
            <div className="form">
                <form action="">
                    <div className="form-group">
                    <FontAwesomeIcon className="mail-icon" icon="fa-solid fa-envelope" />
                    <input type="email" className="form-style" placeholder="Email Address" required/>
                    </div>
                    <div className="form_group">
                    <FontAwesomeIcon className="password-icon" icon="fa-solid fa-lock" />
                    <input type="password" className="form-style" placeholder="Password"/>
                    </div>
                    <div>
                    <button className="btn" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
      </div>







      
    </>
  );
}

export default SignIn;

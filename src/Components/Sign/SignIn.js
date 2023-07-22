import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "./SignIn.css";
import "../../fonts/stylesheet.css"

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const getApiData = async () => 
  {
    const data = {
      email: email,
      password: password,
    };

    try {
      
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",data,
        {
          headers: { "Content-Type": "application/json" },          
        });
        localStorage.setItem("token",response.data.access_token);
        navigate("/facbook.com");
      } catch (response) {
      toast.error(response.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const handleLogin = (event) => {
    event.preventDefault()
    getApiData();
  }

  const isDisabled = !(email && password);

  return (
    <>
    <div className="full">
      <div className="container">
        <div className="card">
          <div className="logo">
            <span>chatmate</span>
          </div>
          <div className="login_heading">Login</div>
          <div className="form">
            <form action="" onSubmit={handleLogin}>
              <div className="form-group">
                <FontAwesomeIcon
                  className="mail-icon"
                  icon="fa-solid fa-envelope"
                />
                <input
                  type="text"
                  value={email}
                  name="email"
                  className="form-style"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form_group">
                <FontAwesomeIcon
                  className="password-icon"
                  icon="fa-solid fa-lock"
                />
                <input
                  type="password"
                  value={password}
                  name="password"
                  className="form-style"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button className="btn" type="submit" disabled={isDisabled}>
                  Login
                </button>
                <ToastContainer transition={Flip}/>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default SignIn;

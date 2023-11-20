import React from "react";
import { PersonBoundingBox, HouseExclamationFill } from "react-bootstrap-icons";
import SignUpButtton from "./signupbutton";
import "../globals.css";
//import { useNavigate } from "react-router-dom";

function LoginModal() {
  //const signInpage = useNavigate();
  //const signUp = () => window.open("/signin");
  //const style = { color: "green" };
  return (
    <>
      <div className="sign-up-modal">
        <h2>SIGN IN</h2>
        <div>
          COLLEGE EMAIL{" "}
          <input className="sign-up" type="text" placeholder="email .edu " />
        </div>
        <div>
          PASSWORD{" "}
          <input className="sign-up" type="password" placeholder="password" />
        </div>
        <button>Login</button>
        <div>
          <div>or</div>
          <SignUpButtton />
        </div>
      </div>
    </>
  );
}

export default LoginModal;

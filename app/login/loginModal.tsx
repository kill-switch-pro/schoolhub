{
  /* modal sign in 
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
  crossOrigin="anonymous"
/>*/
}

import React from "react";
import Link from "next/link";
import { PersonBoundingBox, HouseExclamationFill } from "react-bootstrap-icons";

import "../globals.css";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";

function LoginModal() {
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
        <Link href="homepage">
          <button className="btn btn-primary">Login</button>
        </Link>

        <div>
          <div>or</div>
          <div>
            no account ?
            <Link href="login/signuppage" target="_blank">
              <button className="btn btn-primary">signup</button>
            </Link>
          </div>
          {/*  <SignUpButtton />*/}
        </div>
      </div>
    </>
  );
}

export default LoginModal;

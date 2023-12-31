import React from "react";
import LoginPage from "./login/page";
//import ".../globals.css";
//import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "./login/signuppage.css";
import "./globals.css";
import { Envelope, Key, Lock, Person } from "react-bootstrap-icons";
import Link from "next/link";
//import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      {/*
    <div className="sign-up-modal card-body">
        <h2>SIGN IN</h2>

        <div>
          COLLEGE EMAIL{" "}
          <input className="sign-up" type="text" placeholder="email .edu " />
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
          
        </div>
      </div> 
      */}
      <div className="landing-page">
        <div className="signup-page">
          <section className="vh-100">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div className="card text-black ">
                    <div className="row justify-content-center">
                      <div className="card-id col-md-100 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-40 mt-3">
                          Log-in
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-400">
                            <div className="form-outline flex-fill mb-0 signup-input input-container">
                              <Person />
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control input-field"
                              />
                              <label className="form-label placeholder-text">
                                user name
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-6">
                            <div className="form-outline flex-fill mb-3 signup-input input-container">
                              <Lock />
                              <input
                                type="password"
                                id="form3Example4c"
                                className="form-control input-field"
                              />
                              <label className="form-label placeholder-text">
                                Password
                              </label>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <Link href={"home/"}>
                              <button
                                type="button"
                                className="btn btn-primary "
                              >
                                login
                              </button>
                            </Link>
                          </div>
                          <div className="h4 mx-4">or</div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <Link href={"login/"}>
                              <button
                                type="button"
                                className="btn btn-primary "
                              >
                                sign up
                              </button>
                            </Link>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://img.freepik.com/free-vector/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.jpg?w=740&t=st=1703867937~exp=1703868537~hmac=3b95efc76169da825c1b23982596153bb2512698146473df89b4c9f8af78ce96"
                          //src="https://dcv19h61vib2d.cloudfront.net/thumbs/angularjs-building-an-angular-app-controllers/angularjs-building-an-angular-app-controllers.jpg"
                          className="img-fluid"
                          alt="Student image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="slogan">
          <div>THE</div>
          <div>INTERNET</div>
          <div className="h1">HOME FOR</div>
          <div className="h9 heading-four"> STUDENT </div>
        </div>
      </div>
    </>
  );
}

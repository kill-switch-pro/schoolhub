import React from "react";
//import ".../globals.css";
//import "@/app/globals.css";

import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "./signuppage.css";
import { Envelope, Key, Lock, Person } from "react-bootstrap-icons";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-primary signup-page h-full ">
        <section>
          <div className="container h-100 ">
            <div className="row flex justify-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black ">
                  <div className="card-body p-md-2">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className=" text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-1">
                          Sign up
                        </p>

                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0 signup-input input-container">
                              <Person />
                              <input
                                type="text"
                                id="form3Example1c"
                                className="form-control input-field"
                              />
                              <label className="form-label placeholder-text">
                                FULL NAME
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0 signup-input input-container">
                              <Envelope />
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control input-field"
                              />
                              <label className="form-label placeholder-text">
                                Your Email
                              </label>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0 signup-input input-container">
                              <Envelope />
                              <input
                                type="email"
                                id="form3Example3c"
                                className="form-control input-field"
                              />
                              <label className="form-label placeholder-text">
                                user name
                              </label>
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-1 signup-input input-container">
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

                          <div className="d-flex flex-row align-items-center mb-1">
                            <div className="form-outline flex-fill signup-input input-container">
                              <Key />
                              <input
                                type="password"
                                id="form3Example4cd"
                                className="form-control input-field"
                              />
                              <label
                                className="form-label placeholder-text"
                                htmlFor="placeholder-text"
                              >
                                Repeat
                              </label>
                            </div>
                          </div>

                          <div className="form-check d-flex justify-content-center mb-2">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label className="form-check-label">
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-10">
                            <Link href={"/channel"}>
                              <button
                                type="button"
                                className="btn btn-primary "
                              >
                                Register
                              </button>
                            </Link>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SignUpPage;

"use client";
import Link from "next/link";
import React from "react";

const SignUpButtton = () => {
  return (
    <>
      <div className="sign-up-page">
        no account?
        <Link href="login/signuppage" target="_blank">
          <button>sign up</button>
        </Link>
      </div>
    </>
  );
};

export default SignUpButtton;

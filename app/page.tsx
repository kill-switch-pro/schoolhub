import React from "react";
import LoginPage from "./login/page";
//import ".../globals.css";
//import "@/app/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import "./login/signuppage/signuppage.css";
import "./globals.css";
import { Envelope, Key, Lock, Person } from "react-bootstrap-icons";
//import Image from "next/image";
import "./login/signuppage/signuppage.css";
export default function LandingPage() {
  return (
    <>
      <LoginPage />
    </>
  );
}

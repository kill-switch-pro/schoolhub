//import Navigation from "./navigation";
import { Lightbulb, PersonBoundingBox } from "react-bootstrap-icons";
import LoginModal from "./login/loginModal";

import "./globals.css";
//import LoginModal from "./loginmodal";
//import FooterIcon from "../footer/footer";

function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <div className="slogan">
          <div>THE</div>
          <div>INTERNET</div>
          <div>HOME FOR</div>
          <div className="heading-four"> STUDENT </div>
        </div>
        <img
          className="sign-in-img"
          src="https://previews.123rf.com/images/yupiramos/yupiramos1709/yupiramos170912242/85616073-design-thinking-creative-ideas-vector-illustration-graphic-design.jpg"
          alt="website icon"
        />

        <LoginModal />
      </div>
    </>
  );
}

export default LandingPage;

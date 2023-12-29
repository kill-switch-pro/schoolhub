//import Navigation from "./navigation";
//import { Lightbulb, PersonBoundingBox } from "react-bootstrap-icons";
import Login from "./loginModal";
import "../globals.css";
import { Envelope, Key, Lock, Person } from "react-bootstrap-icons";

//import LoginModal from "./loginmodal";
//import FooterIcon from "../footer/footer";

function LoginPage() {
  return (
    <>
      <div className="landing-page">
        <Login />
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

export default LoginPage;

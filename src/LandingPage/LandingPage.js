import "./LandingPage.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/Logo.svg";
import Container from "react-bootstrap/Container";
import NavigationBar from "./NavBar/NavBar";
import video1 from "../assets/video/BackgroundVideo.mp4";
function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <NavigationBar />
        <video autoPlay loop muted>
          <source src={video1} type="video/mp4" className="video-main" />
        </video>
        <div className="main-background"></div>

        <div className="main-text">
          Flintstones{" "}
          <img
            className="main-logo"
            src={logo}
            width="5%"
            style={{ verticalAlign: "super" }}
          />
        </div>
        <div className="tag-line">Live in Luxury</div>
      </div>
    </>
  );
}
export default LandingPage;

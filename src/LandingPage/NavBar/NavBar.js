import "./NavBar.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
function NavigationBar() {
  return (
    // <div className="navbar">
    //   <div className="home">Home</div>
    //   <div className="about-us">About Us</div>
    //   <div className="services">Our Services</div>
    //   <div className="projects">Our Projects</div>
    // </div>
    <Row className="navbar-box">
      <Col span={2} width={"20%"} className="navbar-text">
        <a style={{ textDecoration: "none " }} href="/">
          Home
        </a>
      </Col>
      <Col span={2} className="navbar-text">
        <a style={{ textDecoration: "none " }} href="/about">
          About
        </a>
      </Col>
      <Col span={4} className="navbar-text">
        <a style={{ textDecoration: "none " }} href="/products">
          Products
        </a>
      </Col>
      <Col className="navbar-text">
        <a style={{ textDecoration: "none " }} href="/portfolio">
          Portfolio
        </a>
      </Col>
    </Row>
  );
}
export default NavigationBar;

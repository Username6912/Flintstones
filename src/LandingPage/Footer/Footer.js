import "./Footer.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Instagram, Facebook, Linkedin, Whatsapp } from "react-bootstrap-icons";
import logo from "../../assets/images/Logo.svg";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
function Footer() {
  return (
    <div className="footer">
      <div className="main-text-footer">
        <Row style={{ paddingTop: "3%", maxWidth: "100vw" }}>
          <Col
            style={{
              color: "white",
              fontFamily: "Poppins",
              fontWeight: "bolder",
            }}
          >
            @2022 the bored guys
          </Col>
          <Col>
            <div className="logo">
              <a href="/">
                <img src={logo} classname="logo" width="5%" />
              </a>
            </div>
          </Col>
          <Col
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Row style={{ width: "50%" }}>
              <Col className="icon">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  style={{ textDecoration: "none ", color: " white" }}
                >
                  <Instagram />
                </a>
              </Col>
              <Col className="icon">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  style={{ textDecoration: "none ", color: " white" }}
                >
                  <Facebook />
                </a>
              </Col>
              <Col className="icon">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  style={{ textDecoration: "none ", color: " white" }}
                >
                  <Linkedin />
                </a>
              </Col>
              <Col className="icon">
                <a
                  href="https://api.whatsapp.com/+919845421184?text=I'm%20interested%20in%20your%20car%20for%20sale"
                  target="_blank"
                  style={{ textDecoration: "none ", color: " white" }}
                >
                  <Whatsapp />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Footer;

import "./EngineeredStone.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import NavigationBar from "../LandingPage/NavBar/NavBar";
import Footer from "../LandingPage/Footer/Footer";
import { Row, Col, Carousel } from "react-bootstrap";

import threeD1 from "../assets/images/threeDs/threeD1.jpg";
import threeD2 from "../assets/images/threeDs/threeD2.jpg";
import threeD3 from "../assets/images/threeDs/threeD3.jpg";
import threeD4 from "../assets/images/threeDs/threeD4.jpg";
import threeD5 from "../assets/images/threeDs/threeD5.jpg";

import cladding1 from "../assets/images/claddings/cladding1.jpg";
import cladding2 from "../assets/images/claddings/cladding2.jpg";
import cladding3 from "../assets/images/claddings/cladding3.jpg";
import cladding4 from "../assets/images/claddings/cladding4.jpg";
import cladding5 from "../assets/images/claddings/cladding5.jpg";
import cladding6 from "../assets/images/claddings/cladding6.jpg";
import cladding7 from "../assets/images/claddings/cladding7.jpg";
import { Cart2 } from "react-bootstrap-icons";

function Stone() {
  return (
    <>
      <NavigationBar />

      <div className="engineered-page">
        <br />
        <br />
        <Row style={{ height: "150vh" }}>
          <Col style={{ maxWidth: "20%", position: "relative" }}>
            <div className="main-text-engineered">Engineered Stones</div>
          </Col>
          <Col>
            <div className="heading-engineered-1">threeD Concrete Panels</div>
            <Row
              style={{
                maxWidth: "73vw",
                height: "500px",
                overflowX: "scroll",
                overFlowY: "hidden",
                position: "absolute",
                top: "40%",
              }}
            >
              <Row style={{ height: "100%", minWidth: "5000px" }}>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={threeD1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={threeD2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={threeD3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={threeD4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={threeD5} />
                </Col>
              </Row>
            </Row>
            <div className="heading-engineered-2">Cladding</div>
            <Row
              style={{
                maxWidth: "73vw",
                height: "500px",
                overflowX: "scroll",
                overFlowY: "hidden",
                position: "absolute",
                top: "115%",
              }}
            >
              <Row style={{ height: "100%", minWidth: "5000px" }}>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cladding1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cladding2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cladding3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cladding4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cladding5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cladding6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cladding7} />
                </Col>
              </Row>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="quote-page">
        <div className="main-text-quote"></div>
        <div className="quote-body"></div>
      </div>
      <Footer />
    </>
  );
}
export default Stone;

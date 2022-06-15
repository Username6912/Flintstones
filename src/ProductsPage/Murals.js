import "./Murals.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import NavigationBar from "../LandingPage/NavBar/NavBar";
import Footer from "../LandingPage/Footer/Footer";
import { Row, Col, Carousel } from "react-bootstrap";

import cnc1 from "../assets/images/cncs/cnc1.jpg";
import cnc2 from "../assets/images/cncs/cnc2.jpg";
import cnc3 from "../assets/images/cncs/cnc3.jpg";
import cnc4 from "../assets/images/cncs/cnc4.jpg";
import cnc5 from "../assets/images/cncs/cnc5.jpg";
import cnc6 from "../assets/images/cncs/cnc6.jpg";
import cnc7 from "../assets/images/cncs/cnc7.jpg";
import cnc8 from "../assets/images/cncs/cnc8.jpg";
import cnc9 from "../assets/images/cncs/cnc9.jpg";

import metal1 from "../assets/images/metals/metal1.jpg";
import metal2 from "../assets/images/metals/metal2.jpg";
import metal3 from "../assets/images/metals/metal3.jpg";
import metal4 from "../assets/images/metals/metal4.jpg";
import metal5 from "../assets/images/metals/metal5.jpg";

import fusion1 from "../assets/images/fusions/fusion1.jpg";
import fusion2 from "../assets/images/fusions/fusion2.jpg";
import fusion3 from "../assets/images/fusions/fusion3.jpg";
import fusion4 from "../assets/images/fusions/fusion4.jpg";
import fusion5 from "../assets/images/fusions/fusion5.jpg";
import fusion6 from "../assets/images/fusions/fusion6.jpg";
import fusion7 from "../assets/images/fusions/fusion7.jpg";
import fusion8 from "../assets/images/fusions/fusion8.jpg";

import inlay1 from "../assets/images/inlays/inlay1.jpg";
import inlay2 from "../assets/images/inlays/inlay2.jpg";
import inlay3 from "../assets/images/inlays/inlay3.jpg";

import slate1 from "../assets/images/slates/slate1.jpg";
import slate2 from "../assets/images/slates/slate2.jpg";
import slate3 from "../assets/images/slates/slate3.jpg";
import slate4 from "../assets/images/slates/slate4.jpg";
import slate5 from "../assets/images/slates/slate5.jpg";
import slate6 from "../assets/images/slates/slate6.jpg";
import slate7 from "../assets/images/slates/slate7.jpg";
import { Dice5 } from "react-bootstrap-icons";

function Murals() {
  return (
    <>
      <NavigationBar />

      <div className="murals-page">
        <br />
        <br />
        <Row style={{ height: "400vh" }}>
          <Col style={{ maxWidth: "20%", position: "relative" }}>
            <div className="main-text-murals">Murals</div>
          </Col>
          <Col>
            <div className="heading-natural-1">CNC</div>
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
                  <img className="image" src={cnc1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cnc2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cnc3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cnc4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cnc5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cnc6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cnc7} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cnc8} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={cnc9} />
                </Col>
              </Row>
            </Row>
            <div className="heading-natural-2">Full body metal</div>
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
                  <img className="image" src={metal1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={metal2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={metal3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={metal4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={metal5} />
                </Col>
              </Row>
            </Row>
            <div className="heading-natural-3">fusion concept</div>
            <Row
              style={{
                maxWidth: "73vw",
                height: "500px",
                overflowX: "scroll",
                overFlowY: "clip",
                position: "absolute",
                top: "185%",
              }}
            >
              <Row style={{ height: "100%", minWidth: "5000px" }}>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={fusion1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={fusion2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={fusion3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={fusion4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={fusion5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={fusion6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={fusion7} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={fusion8} />
                </Col>
              </Row>
            </Row>
            <div className="heading-natural-4">inlays</div>
            <Row
              style={{
                maxWidth: "73vw",
                height: "500px",
                overflowX: "scroll",
                overFlowY: "hidden",
                position: "absolute",
                top: "255%",
              }}
            >
              <Row style={{ height: "100%", minWidth: "2000px" }}>
                <Col style={{ maxWidth: "30%" }}>
                  <img className="image" src={inlay1} />
                </Col>
                <Col style={{ maxWidth: "30%" }}>
                  <img className="image" src={inlay2} />
                </Col>
                <Col style={{ maxWidth: "30%" }}>
                  <img className="image" src={inlay3} />
                </Col>
              </Row>
            </Row>
            <div className="heading-natural-5">Slates</div>
            <Row
              style={{
                maxWidth: "73vw",
                height: "500px",
                overflowX: "scroll",
                overFlowY: "hidden",
                position: "absolute",
                top: "325%",
              }}
            >
              <Row style={{ height: "100%", minWidth: "5000px" }}>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={slate1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={slate2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={slate3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={slate4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={slate5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={slate6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={slate7} />
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
export default Murals;

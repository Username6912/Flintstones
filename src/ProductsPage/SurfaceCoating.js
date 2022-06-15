import "./SurfaceCoating.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import NavigationBar from "../LandingPage/NavBar/NavBar";
import Footer from "../LandingPage/Footer/Footer";
import { Row, Col, Carousel } from "react-bootstrap";

import concrete1 from "../assets/images/concretes/concrete1.jpg";
import concrete2 from "../assets/images/concretes/concrete2.jpg";
import concrete3 from "../assets/images/concretes/concrete3.jpg";
import concrete4 from "../assets/images/concretes/concrete4.jpg";
import concrete5 from "../assets/images/concretes/concrete5.jpg";
import concrete6 from "../assets/images/concretes/concrete6.jpg";
import concrete7 from "../assets/images/concretes/concrete7.jpg";
import concrete8 from "../assets/images/concretes/concrete8.jpg";

import concveneer1 from "../assets/images/concveneers/concveneer1.jpg";
import concveneer2 from "../assets/images/concveneers/concveneer2.jpg";
import concveneer3 from "../assets/images/concveneers/concveneer3.jpg";

import texture1 from "../assets/images/textures/texture1.jpg";
import texture2 from "../assets/images/textures/texture2.jpg";
import texture3 from "../assets/images/textures/texture3.jpg";
import texture4 from "../assets/images/textures/texture4.jpg";
import texture5 from "../assets/images/textures/texture5.jpg";
import texture6 from "../assets/images/textures/texture6.jpg";

import micro1 from "../assets/images/micros/micro1.jpg";
import micro2 from "../assets/images/micros/micro2.jpg";
import micro3 from "../assets/images/micros/micro3.jpg";
import micro4 from "../assets/images/micros/micro4.jpg";
import micro5 from "../assets/images/micros/micro5.jpg";
import micro6 from "../assets/images/micros/micro6.jpg";
import micro7 from "../assets/images/micros/micro7.jpg";

function Coating() {
  return (
    <>
      <NavigationBar />

      <div className="surface-page">
        <br />
        <br />
        <Row style={{ height: "300vh" }}>
          <Col style={{ maxWidth: "20%", position: "relative" }}>
            <div className="main-text-natural">Surface Coating</div>
          </Col>
          <Col>
            <div className="heading-surface-1">Concrete Veneers</div>
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
              <Row style={{ height: "100%", minWidth: "2000px" }}>
                <Col style={{ maxWidth: "30%" }}>
                  <img className="image" src={concveneer1} />
                </Col>
                <Col style={{ maxWidth: "30%" }}>
                  <img className="image" src={concveneer2} />
                </Col>
                <Col style={{ maxWidth: "30%" }}>
                  <img className="image" src={concveneer3} />
                </Col>
              </Row>
            </Row>
            <div className="heading-surface-2">Granite Textures</div>
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
                  <img className="image" src={texture1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={texture2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={texture3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={texture4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={texture5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={texture6} />
                </Col>
              </Row>
            </Row>
            <div className="heading-surface-3">Micro Concrete</div>
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
                  <img className="image" src={micro1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={micro2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={micro3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={micro4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={micro5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={micro6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={micro7} />
                </Col>
              </Row>
            </Row>
            <div className="heading-surface-4">Stamped Concrete</div>
            <Row
              style={{
                maxWidth: "73vw",
                height: "500px",
                overflowX: "scroll",
                overFlowY: "hidden",
                position: "absolute",
                top: "262%",
              }}
            >
              <Row style={{ height: "100%", minWidth: "5000px" }}>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={concrete1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={concrete2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={concrete3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={concrete4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={concrete5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={concrete6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={concrete7} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={concrete8} />
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
export default Coating;

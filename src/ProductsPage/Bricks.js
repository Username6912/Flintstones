import "./Bricks.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import NavigationBar from "../LandingPage/NavBar/NavBar";
import Footer from "../LandingPage/Footer/Footer";
import { Row, Col, Carousel } from "react-bootstrap";
import brick1 from "../assets/images/bricks/brick1.jpg";
import brick2 from "../assets/images/bricks/brick2.jpg";
import brick3 from "../assets/images/bricks/brick3.jpg";
import brick4 from "../assets/images/bricks/brick4.jpg";
import brick5 from "../assets/images/bricks/brick5.jpg";
import brick6 from "../assets/images/bricks/brick6.jpg";
import brick7 from "../assets/images/bricks/brick7.jpg";
import brick8 from "../assets/images/bricks/brick8.jpg";
import brick9 from "../assets/images/bricks/brick9.jpg";

import concrete1 from "../assets/images/bricks2/concrete_brick1.jpg";
import concrete2 from "../assets/images/bricks2/concrete_brick2.jpg";
import concrete3 from "../assets/images/bricks2/concrete_brick3.jpg";
import concrete4 from "../assets/images/bricks2/concrete_brick4.jpg";
import concrete5 from "../assets/images/bricks2/concrete_brick5.jpg";
import concrete6 from "../assets/images/bricks2/concrete_brick6.jpg";
import concrete7 from "../assets/images/bricks2/concrete_brick7.jpg";
import concrete8 from "../assets/images/bricks2/concrete_brick8.jpg";
import concrete9 from "../assets/images/bricks2/concrete_brick9.jpg";

import natural1 from "../assets/images/bricks3/natural1.jpg";
import natural2 from "../assets/images/bricks3/natural2.jpg";
import natural3 from "../assets/images/bricks3/natural3.jpg";
import natural4 from "../assets/images/bricks3/natural4.jpg";
import natural5 from "../assets/images/bricks3/natural5.jpg";
import natural6 from "../assets/images/bricks3/natural6.jpg";
import natural7 from "../assets/images/bricks3/natural7.jpg";
import natural8 from "../assets/images/bricks3/natural8.jpg";
import natural9 from "../assets/images/bricks3/natural9.jpg";

function Bricks() {
  return (
    <>
      <NavigationBar />

      <div className="bricks-page">
        <br />
        <br />
        <Row style={{ height: "150vh" }}>
          <Col style={{ maxWidth: "20%", position: "relative" }}>
            <div className="main-text-bricks">Bricks</div>
          </Col>
          <Col>
            <div className="heading-1">Artificial Bricks</div>
            <Row
              style={{
                maxWidth: "73vw",
                height: "500px",
                overflowX: "scroll",
                overFlowY: "hidden",
                position: "absolute",
                top: "43%",
              }}
            >
              <Row style={{ height: "100%", minWidth: "5000px" }}>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={brick1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={brick2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={brick3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={brick4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={brick5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={brick6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={brick7} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={brick8} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={brick9} />
                </Col>
              </Row>
            </Row>
            <div className="heading-2">Concrete Bricks</div>
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
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={concrete9} />
                </Col>
              </Row>
            </Row>
            <div className="heading-3">Natural Bricks</div>
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
                  <img className="image" src={natural1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={natural2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={natural3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={natural4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={natural5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={natural6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={natural7} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={natural8} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image" src={natural9} />
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
export default Bricks;

import "./Natural.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import NavigationBar from "../LandingPage/NavBar/NavBar";
import Footer from "../LandingPage/Footer/Footer";
import { Row, Col, Carousel } from "react-bootstrap";
import basin1 from "../assets/images/basins/basin1.jpg";
import basin2 from "../assets/images/basins/basin2.jpg";
import basin3 from "../assets/images/basins/basin3.jpg";
import basin4 from "../assets/images/basins/basin4.jpg";
import basin5 from "../assets/images/basins/basin5.jpg";
import basin6 from "../assets/images/basins/basin6.jpg";

import floor1 from "../assets/images/flooring/floor1.jpg";
import floor2 from "../assets/images/flooring/floor2.jpg";
import floor3 from "../assets/images/flooring/floor3.jpg";

import lattice1 from "../assets/images/lattice/lattice1.jpg";
import lattice2 from "../assets/images/lattice/lattice2.jpg";
import lattice3 from "../assets/images/lattice/lattice3.jpg";
import lattice4 from "../assets/images/lattice/lattice4.jpg";
import lattice5 from "../assets/images/lattice/lattice5.jpg";
import lattice6 from "../assets/images/lattice/lattice6.jpg";

import mosiac1 from "../assets/images/mosiacs/mosiac1.jpg";
import mosiac2 from "../assets/images/mosiacs/mosiac2.jpg";
import mosiac3 from "../assets/images/mosiacs/mosiac3.jpg";
import mosiac4 from "../assets/images/mosiacs/mosiac4.jpg";
import mosiac5 from "../assets/images/mosiacs/mosiac5.jpg";
import mosiac6 from "../assets/images/mosiacs/mosiac6.jpg";
import mosiac7 from "../assets/images/mosiacs/mosiac7.jpg";

import veneer1 from "../assets/images/veneers/veneer1.jpg";
import veneer2 from "../assets/images/veneers/veneer2.jpg";
import veneer3 from "../assets/images/veneers/veneer3.jpg";
import veneer4 from "../assets/images/veneers/veneer4.jpg";
import veneer5 from "../assets/images/veneers/veneer5.jpg";
import veneer6 from "../assets/images/veneers/veneer6.jpg";
import veneer7 from "../assets/images/veneers/veneer7.jpg";

import stacking1 from "../assets/images/stackings/stacking1.jpg";
import stacking2 from "../assets/images/stackings/stacking2.jpg";
import stacking3 from "../assets/images/stackings/stacking3.jpg";
import stacking4 from "../assets/images/stackings/stacking4.jpg";
import stacking5 from "../assets/images/stackings/stacking5.jpg";
import stacking6 from "../assets/images/stackings/stacking6.jpg";
import stacking7 from "../assets/images/stackings/stacking7.jpg";
import stacking8 from "../assets/images/stackings/stacking8.jpg";
import stacking9 from "../assets/images/stackings/stacking9.jpg";

function Natural() {
  return (
    <>
      <NavigationBar />

      <div className="natural-page">
        <br />
        <br />
        <Row style={{ height: "400vh" }}>
          <Col style={{ maxWidth: "20%", position: "relative" }}>
            <div className="main-text-natural">Natural Stones</div>
          </Col>
          <Col>
            <div className="heading-natural-1">Basins</div>
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
                  <img className="image-basin" src={basin1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={basin2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={basin3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={basin4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={basin5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={basin6} />
                </Col>
              </Row>
            </Row>
            <div className="heading-natural-2">Flooring</div>
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
              <Row style={{ height: "100%", minWidth: "2000px" }}>
                <Col style={{ maxWidth: "30%" }}>
                  <img className="image-basin" src={floor1} />
                </Col>
                <Col style={{ maxWidth: "30%" }}>
                  <img className="image-basin" src={floor2} />
                </Col>
                <Col style={{ maxWidth: "30%" }}>
                  <img className="image-basin" src={floor3} />
                </Col>
              </Row>
            </Row>
            <div className="heading-natural-3">Lattices</div>
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
                  <img className="image-basin" src={lattice1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={lattice2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={lattice3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={lattice4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={lattice5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={lattice6} />
                </Col>
              </Row>
            </Row>
            <div className="heading-natural-4">Mosiacs</div>
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
              <Row style={{ height: "100%", minWidth: "5000px" }}>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={mosiac1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={mosiac2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={mosiac3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={mosiac4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={mosiac5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={mosiac6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={mosiac7} />
                </Col>
              </Row>
            </Row>
            <div className="heading-natural-5">Stacking Stones</div>
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
                  <img className="image-basin" src={stacking1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={stacking2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={stacking3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={stacking4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={stacking5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={stacking6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={stacking7} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={stacking8} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={stacking9} />
                </Col>
              </Row>
            </Row>
            <div className="heading-natural-6">Veneers</div>
            <Row
              style={{
                maxWidth: "73vw",
                height: "500px",
                overflowX: "scroll",
                overFlowY: "hidden",
                position: "absolute",
                top: "395%",
              }}
            >
              <Row style={{ height: "100%", minWidth: "5000px" }}>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={veneer1} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={veneer2} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={veneer3} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={veneer4} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={veneer5} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={veneer6} />
                </Col>
                <Col style={{ maxWidth: "20%" }}>
                  <img className="image-basin" src={veneer7} />
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
export default Natural;

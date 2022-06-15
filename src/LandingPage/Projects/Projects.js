import "./Projects.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button, Row, Col } from "react-bootstrap";

import Container from "react-bootstrap/Container";
function Projects() {
  return (
    <div className="projects-page">
      <div className="main-text-projects">Our Projects</div>

      <div className="project-card-1">
        <Row className="project-card-row">
          <Col className="project-box" style={{ maxWidth: "40%" }}>
            <div className="project-text-left">Natural Calibrated White</div>
          </Col>
          <Col span={16} className="project-1"></Col>
        </Row>
      </div>
      <div className="project-card-1">
        <Row className="project-card-row">
          <Col
            span={16}
            style={{ maxWidth: "60%" }}
            className="project-2"
          ></Col>
          <Col className="project-box ">
            <div className="project-text">1522</div>
          </Col>
        </Row>
      </div>
      <div className="project-card-1">
        <Row className="project-card-row">
          <Col span={4} style={{ maxWidth: "40%" }} className="project-box">
            <div className="project-text-left" style={{ top: "40%" }}>
              Brigade Arcade
            </div>
          </Col>
          <Col span={16} className="project-3"></Col>
        </Row>
      </div>
      <div className="project-card-1">
        <Row className="project-card-row">
          <Col span={16} className="project-4"></Col>
          <Col style={{ maxWidth: "40%" }} className="project-box">
            <div className="project-text">Concrete</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Projects;

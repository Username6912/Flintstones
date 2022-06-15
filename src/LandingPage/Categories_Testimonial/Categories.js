import "./Categories.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Button, Row, Col, Card, CardGroup, Carousel } from "react-bootstrap";
import img1 from "../../assets/images/bricks.png";
import img2 from "../../assets/images/luxury.png";
import img3 from "../../assets/images/ProductBackground2.jpg";

import Container from "react-bootstrap/Container";
function Categories() {
  return (
    <div className="categories-page">
      <div className="main-text-categories">Categories</div>
      <div className="category-cards">
        <CardGroup
          style={{
            width: "100%",
            paddingTop: "50px",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              margin: "4%",
              height: "200%",
              marginBottom: "2%",
              border: "none",
              maxWidth: "40vh",
              background: "transparent",
            }}
            className="card"
          >
            <a href="/products/bricks">
              <Card.Img variant="top" src={img1} size="fit" />
            </a>
            <Card.Body style={{ background: "#353535", marginTop: "30%" }}>
              <h2 style={{ color: "white", fontWeight: "bold" }}>Bricks</h2>
            </Card.Body>
          </Card>

          <Card
            style={{
              margin: "4%",
              height: "200%",
              marginBottom: "2%",
              border: "none",
              maxWidth: "40vh",
              background: "transparent",
            }}
            class="card"
          >
            <a href="products/murals">
              <Card.Img variant="top" src={img2} />
            </a>
            <Card.Body style={{ background: "#353535", marginTop: "30%" }}>
              <h2 style={{ color: "white", fontWeight: "bold" }}>
                Luxury Products
              </h2>
            </Card.Body>
          </Card>
          <Card
            style={{
              margin: "4%",
              height: "200%",
              marginBottom: "2%",
              border: "none",
              maxWidth: "40vh",
              background: "transparent",
            }}
            class="card"
          >
            <a href="/products/coating">
              <Card.Img variant="top" src={img3} />
            </a>
            <Card.Body style={{ background: "#353535", marginTop: "30%" }}>
              <h2 style={{ color: "white", fontWeight: "bold" }}>
                Surface Coating
              </h2>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <div className="main-text-testimonial">Testimonial</div>
      <div className="testimonial-body">
        <Carousel style={{ transform: "scale(1.7)" }}>
          <Carousel.Item style={{ padding: "10%", height: "30vh" }}>
            "Amazing collection Plenty of New Designs and Good quality of
            products. Best price" - Ashwin S
          </Carousel.Item>
          <Carousel.Item style={{ padding: "10%", height: "30vh" }}>
            "Amazing Place.The rates are reasonable and the staff there is so
            welcoming and professional A one stop destination for all your decor
            needs " - Gaurav B
          </Carousel.Item>
          <Carousel.Item style={{ padding: "10%", height: "30vh" }}>
            "We were looking for a marble washbasin and backsplash design for
            our house interiors, and Deepak @ Flintstones helped us with his
            ideas. The backsplash has come very beautiful, and enhances the
            beauty of our common vanity. I recommend Flintstones." - Prashanth P
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="waves"></div>
    </div>
  );
}
export default Categories;

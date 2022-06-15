import "./Portfolio.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Carousel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Footer from "../LandingPage/Footer/Footer";
import NavigationBar from "../LandingPage/NavBar/NavBar";
import { Row, Col } from "react-bootstrap";
import img1 from "../assets/images/portfolio/portfolio1.jpg";
import img2 from "../assets/images/portfolio/portfolio2.jpg";
import img3 from "../assets/images/portfolio/portfolio3.jpg";
import img4 from "../assets/images/portfolio/portfolio4.jpg";
import img5 from "../assets/images/portfolio/portfolio5.jpg";
import img6 from "../assets/images/portfolio/portfolio6.jpg";
import img7 from "../assets/images/portfolio/portfolio7.jpg";
import img8 from "../assets/images/portfolio/portfolio8.jpg";
import img9 from "../assets/images/portfolio/portfolio9.jpg";
import img10 from "../assets/images/portfolio/portfolio10.jpg";
import img11 from "../assets/images/portfolio/portfolio11.jpg";
import img12 from "../assets/images/portfolio/portfolio12.jpg";
import img13 from "../assets/images/portfolio/portfolio13.jpg";

function Portfolio() {
  return (
    <>
      <NavigationBar />
      <div className="portfolio-page">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className="main-text-portfolio">Our Projects</h1>
        <div class="testimonial2">
          <div class="test-element">
            <Carousel fade className="carousel-portfolio">
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img1} alt="First slide" />

                <Carousel.Caption>
                  <h3>Aster RV</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img2} alt="Second slide" />

                <Carousel.Caption>
                  <h3>CRED,Banglore</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img3} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Gerald,Hossur</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img4} alt="First slide" />

                <Carousel.Caption>
                  <h3>Google,Bangalore</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img5} alt="Second slide" />

                <Carousel.Caption>
                  <h3>Google,Bangalore</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img6} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Google,Hyderabad</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img7} alt="First slide" />

                <Carousel.Caption>
                  <h3>Residential,Bangalore</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img8} alt="Second slide" />

                <Carousel.Caption>
                  <h3>Manoj,HSR layout</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img9} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Oracale,Bangalore</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img10} alt="First slide" />

                <Carousel.Caption>
                  <h3>Saswati,HSR layout</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img11} alt="Second slide" />

                <Carousel.Caption>
                  <h3>Soumya,Banashankri</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img12} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Sumadura Group,Bangalore</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src={img13} alt="First slide" />

                <Carousel.Caption>
                  <h3>Vinay,Yelahanka</h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="quote-page">
        <div className="main-text-quote"></div>
        <div className="quote-body"></div>
      </div>

      <Footer />
    </>
  );
}
export default Portfolio;

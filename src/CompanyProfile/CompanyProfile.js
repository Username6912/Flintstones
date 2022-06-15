import "./CompanyProfile.css";
import React from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import Footer from "../LandingPage/Footer/Footer";
import NavigationBar from "../LandingPage/NavBar/NavBar";
function CompanyProfile() {
  return (
    <>
      <NavigationBar />
      <div className="company-page">
        <div className="main-text-company">About Us</div>
      </div>
      <div
        style={{
          background: "#1d1d1b",
          paddingLeft: "5%",
          paddingBottom: "5%",
          paddingRight: "5%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div class="flip-card" tabIndex="0">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div className="heading">Who we are</div>
            </div>
            <div class="flip-card-back">
              <div className="card-body">
                We are connoisseurs of the world of artisans and craftsmanship.
                The art of sculpting has been a very important and an integral
                part of our history. From the marble sculptures at the Vatican
                to the carvings on the temples of Hampi, artistic installations
                are an essential ornament used to enhance the aesthetics of any
                architecture. We at Flintstones celebrate this art with our
                designer collection of products. We specialise in aesthetic
                finishing- building materials which adds a luxurious touch to
                any architectural wonder. We wish to transform one’s living
                space into a home, and the place of work into a place of comfort
                with materials that represent and compliment the personality and
                vision of our clients.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#1d1d1b",
          paddingLeft: "5%",
          paddingBottom: "5%",
          paddingRight: "5%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div class="flip-card" tabIndex="0">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div className="heading">Our Vision</div>
            </div>
            <div class="flip-card-back">
              <div className="card-body">
                We hope to be the name on everyone’s mind when they think of
                murals, concrete, stone finishes and other underlying
                mind-bending products that we frequently wish to adopt and add
                to our collection. We wish to be the go-to brand for architects
                and interior designers and pretty much anybody with an eye for
                design. We hope to bring a more nuanced, organised and
                customer-centric approach to the industry, also providing our
                clients with an unbiased after-sales service.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#1d1d1b",
          paddingLeft: "5%",
          paddingBottom: "5%",
          paddingRight: "5%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div class="flip-card" tabIndex="0">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div className="heading">Our Values</div>
            </div>
            <div class="flip-card-back">
              <div className="card-body">
                Transparency is what builds trust, and that’s what we’d like to
                exhibit towards our customers. For us, our clients come first.
                We want to ensure that they have a seamless and welcoming
                experience throughout their journey with us. We want to make
                sure that any obstacle that may arise during the whole process
                will be our responsibility to handle. Here at Flintstones, we
                carry out our projects with a comprehensive sense of
                responsibility by making sure our clients are content with our
                deliveries throughout the entire process, keeping an open mind
                about feedback or criticism.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background: "#1d1d1b",
          paddingLeft: "5%",
          paddingBottom: "5%",
          paddingRight: "5%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div class="flip-card" tabIndex="0">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <div className="heading">Our USP</div>
            </div>
            <div class="flip-card-back">
              <div className="card-body">
                As we have mentioned before, our priority is to make sure our
                clients receive what they come looking for. While our collection
                is diverse and exclusive, we also encourage personalisation in
                order to better be able to meet our clients needs. We provide
                design solutions and suggestions that best compliment their
                vision. In the sense that if our client has a design he is
                specifically inspired by, we enjoy bringing that inspiration to
                life. We also try to provide quick and seamless customer support
                post-delivery and take pride in helping our customers out, in
                every way possible.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quote-page">
        <div className="main-text-quote">
          "Luxury is when it seems flawless and you reach the perfect balance
          between all elements that exist. Understated in theatricality – that
          is what my definition of luxury is all about." - Jean-Louis Denoit
        </div>

        <div className="quote-body"></div>
      </div>
      <Footer />
    </>
  );
}
export default CompanyProfile;

import "./ProductsPage.css";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import Footer from "../LandingPage/Footer/Footer";
import NavigationBar from "../LandingPage/NavBar/NavBar";
import bricks from "../assets/images/Brick_main.jpg";
import catalogue1 from "../assets/catalogues/catalogue1.pdf";
import catalogue2 from "../assets/catalogues/catalogue2.pdf";
import catalogue3 from "../assets/catalogues/catalogue3.pdf";
import catalogue4 from "../assets/catalogues/catalogue4.pdf";
import catalogue5 from "../assets/catalogues/catalogue5.pdf";
import catalogue6 from "../assets/catalogues/catalogue6.pdf";
import catalogue7 from "../assets/catalogues/catalogue7.pdf";

function Products() {
  return (
    <>
      <NavigationBar />

      <div style={{ padding: "4%" }} className="product-main">
        <br />
        <br />
        <br />
        <br />
        <div style={{ padding: "3%", paddingTop: "0" }}>
          <Row
            style={{
              background: "#353535",
              height: "50vh",

              position: "relative",
            }}
          >
            <div className="category-text">Categories</div>
          </Row>
          <Row style={{ height: "100vh" }}>
            <Col>
              <Row
                className="brick-main"
                style={{
                  height: "40%",
                  marginTop: "3%",
                  marginBottom: "3%",
                  position: "relative",
                }}
              >
                <div className="category-text">
                  <a
                    style={{ textDecoration: "none ", color: " white" }}
                    href="/products/bricks"
                  >
                    Bricks
                  </a>
                </div>
              </Row>
              <Row
                className="surface-coating"
                style={{
                  height: "58vh",
                  position: "relative",
                }}
              >
                <div className="category-text">
                  {" "}
                  <a
                    style={{ textDecoration: "none ", color: " white" }}
                    href="/products/coating"
                  >
                    Surface Coating
                  </a>
                </div>
              </Row>
            </Col>
            <Col
              className="natural-stone"
              style={{
                marginTop: "1.5%",
                marginLeft: "1.5%",
                height: "100%",
                position: "relative",
              }}
            >
              <div className="category-text">
                {" "}
                <a
                  style={{ textDecoration: "none ", color: " white" }}
                  href="/products/stones"
                >
                  natural Stones
                </a>
              </div>
            </Col>
          </Row>
          <Row
            className="engineered-stone"
            style={{
              height: "40vh",
              marginTop: "3%",
              position: "relative",
            }}
          >
            <div className="category-text">
              {" "}
              <a
                style={{ textDecoration: "none ", color: " white" }}
                href="/products/engineered"
              >
                Engineered Stone
              </a>
            </div>
          </Row>
          <Row
            className="murals"
            style={{
              height: "60vh",
              marginTop: "1.5%",
              position: "relative",
            }}
          >
            <div className="category-text">
              {" "}
              <a
                style={{ textDecoration: "none ", color: " white" }}
                href="/products/murals"
              >
                Murals
              </a>
            </div>
          </Row>
        </div>
      </div>
      <div className="question-back">
        <div className="question-text">
          Could not find what you're looking for?
        </div>
        <div className="simple-text">Browse our Catalouges</div>
      </div>
      <div className="catalouges-page">
        <div className="catalouge-card-1">
          <Row className="catalouge-card-row gx-0">
            <Col
              span={16}
              style={{ maxWidth: "60%" }}
              className="catalouge-2 catalogue-natural"
            ></Col>
            <Col className="catalouge-box" style={{ maxWidth: "40%" }}>
              <a href={catalogue1}>
                <div className="catalouge-text">Natural Stones</div>
                <p className="catalouge-body">
                  Experience the look of a natural stone chiselled in the form
                  of a sheet-like derivative, but with enhanced flexibility and
                  durability, we call it Natural Stone Veneers. These sprightly
                  finishes can be decorated on walls, furniture, and a number
                  surfaces as laminates. They come in two forms- opaque and
                  translucent (for lighting to pass by).
                </p>
              </a>
            </Col>
          </Row>
        </div>
        <div className="catalouge-card-1">
          <Row className="catalouge-card-row">
            <Col className="catalouge-box" style={{ maxWidth: "40%" }}>
              <a href={catalogue2}>
                <div className="catalouge-text-left">Stamped Concrete</div>
                <p className="catalouge-body-left">
                  Malleable to incalculable designs and styles, with sturdy,
                  resistive properties, stamped concrete finishes comes in
                  various colours, demonstrating an arrogantly rustic, yet
                  authentic cement finish. Browse through our extensive
                  collection of existing references for a better understanding.
                </p>
              </a>
            </Col>
            <Col span={16} className="catalouge-1 catalogue-stamped"></Col>
          </Row>
        </div>
        <div className="catalouge-card-1">
          <Row className="catalouge-card-row">
            <Col
              span={16}
              style={{ maxWidth: "60%" }}
              className="catalouge-2 catalogue-metal"
            ></Col>
            <Col className="catalouge-box" style={{ maxWidth: "40%" }}>
              <a href={catalogue3}>
                <div className="catalouge-text">Metal Concepts</div>
                <p className="catalouge-body">
                  A unique blend of metal and natural stone, the metal series is
                  a very distinctive artistic piece of ours. The numerous
                  possibilities with murals never ceases to amaze, providing
                  sophistication to the applicant's space.
                </p>
              </a>
            </Col>
          </Row>
        </div>
        <div className="catalouge-card-1">
          <Row className="catalouge-card-row">
            <Col span={4} style={{ maxWidth: "40%" }} className="catalouge-box">
              <a href={catalogue4}>
                <div className="catalouge-text-left">Flooring Stone</div>
                <p className="catalouge-body-left">
                  A classic never goes out of fashion. Natural stone flooring is
                  a perfect choice when one looks for minimalism and earthy
                  flooring representation. Explore our vast collection of stone
                  flooring designs and with us be rest assured you will find the
                  right pick for you.
                </p>
              </a>
            </Col>
            <Col span={16} className="catalouge-3 catalogue-flooring"></Col>
          </Row>
        </div>
        <div className="catalouge-card-1">
          <Row className="catalouge-card-row">
            <Col span={16} className="catalouge-4 catalogue-engineered"></Col>
            <Col style={{ maxWidth: "40%" }} className="catalouge-box">
              <a href={catalogue5}>
                <div className="catalouge-text">Engineered Stone</div>
                <p className="catalouge-body">
                  For the connoisseurs of the yesteryear, our collection of
                  Engineered stones provide an array of options. From Victorian
                  fireplaces to Roman castles, go all out mediaeval with our
                  diverse range of Engineered Stones.
                </p>
              </a>
            </Col>
          </Row>
        </div>
        <div className="catalouge-card-1">
          <Row className="catalouge-card-row">
            <Col span={4} style={{ maxWidth: "40%" }} className="catalouge-box">
              <a href={catalogue6}>
                <div className="catalouge-text-left">Concrete facades</div>
                <p className="catalouge-body-left">
                  The poster child for minimalism, a material built on the
                  grounds of sturdiness with an indefinite range of
                  possibilities, is a bridal definition of sleek-luxury. Browse
                  through our collection of designs and let the world of
                  personalization take you on the ride of a lifetime.
                </p>
              </a>
            </Col>
            <Col span={16} className="catalouge-3 catalogue-concrete"></Col>
          </Row>
        </div>
        <div className="catalouge-card-1">
          <Row className="catalouge-card-row">
            <Col span={16} className="catalouge-4 catalogue-brick"></Col>
            <Col style={{ maxWidth: "40%" }} className="catalouge-box">
              <a href={catalogue7}>
                <div className="catalouge-text" style={{ display: "inline" }}>
                  Bricks
                </div>
                <p className="catalouge-body">
                  For the connoisseurs of the yesteryear, our collection of
                  Engineered stones provide an array of options. From Victorian
                  fireplaces to Roman castles, go all out mediaeval with our
                  diverse range of Engineered Stones.
                </p>
              </a>
            </Col>
          </Row>
        </div>
      </div>

      <div className="quote-page">
        <div className="main-text-quote-products">
          " For a house to feel successfully like home, the objects in it must
          communicate with one another, respond and balance one another out." -
          Andree Putman
        </div>
        <div className="quote-body"></div>
      </div>
      <Footer />
    </>
  );
}

export default Products;

import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import AboutUS from "./LandingPage/AboutUs/AboutUS";
import Categories from "./LandingPage/Categories_Testimonial/Categories";
import Product from "./LandingPage/Products/Product";
import Projects from "./LandingPage/Projects/Projects";
import ContactUs from "./LandingPage/ContactUs/ContactUs";
import Footer from "./LandingPage/Footer/Footer";
import Products from "./ProductsPage/ProductsPage";
import CompanyProfile from "./CompanyProfile/CompanyProfile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import video1 from "./assets/video/BackgroundVideo.mp4";
import Portfolio from "./Portfolio/Portfolio";
import Category from "./ProductsPage/Category.tsx";
import Bricks from "./ProductsPage/Bricks";
import Natural from "./ProductsPage/Natural";
import Coating from "./ProductsPage/SurfaceCoating";
import Stone from "./ProductsPage/EngineeredStone";
import Murals from "./ProductsPage/Murals";
import ProductsMobile from "./ProductsPage/ProductsPage_Mobile";

function App() {
  if (window.innerWidth >= 767) {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <LandingPage />
                  <AboutUS />
                  <Categories />
                  <Product />
                  <Projects />
                  <ContactUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <Products />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <CompanyProfile />
                </>
              }
            />
            <Route
              path="/portfolio"
              element={
                <>
                  <Portfolio />
                </>
              }
            />
            <Route
              path="/products/bricks"
              element={
                <>
                  <Bricks />
                </>
              }
            />
            <Route
              path="/products/stones"
              element={
                <>
                  <Natural />
                </>
              }
            />
            <Route
              path="/products/coating"
              element={
                <>
                  <Coating />
                </>
              }
            />
            <Route
              path="/products/engineered"
              element={
                <>
                  <Stone />
                </>
              }
            />
            <Route
              path="/products/murals"
              element={
                <>
                  <Murals />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <LandingPage />
                  <AboutUS />
                  <Categories />
                  <Product />
                  <Projects />
                  <ContactUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/products"
              element={
                <>
                  <ProductsMobile />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <CompanyProfile />
                </>
              }
            />
            <Route
              path="/portfolio"
              element={
                <>
                  <Portfolio />
                </>
              }
            />
            <Route
              path="/products/bricks"
              element={
                <>
                  <Bricks />
                </>
              }
            />
            <Route
              path="/products/stones"
              element={
                <>
                  <Natural />
                </>
              }
            />
            <Route
              path="/products/coating"
              element={
                <>
                  <Coating />
                </>
              }
            />
            <Route
              path="/products/engineered"
              element={
                <>
                  <Stone />
                </>
              }
            />
            <Route
              path="/products/murals"
              element={
                <>
                  <Murals />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

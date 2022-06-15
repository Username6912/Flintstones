import "./Category.css";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import Footer from "../LandingPage/Footer/Footer";
import NavigationBar from "../LandingPage/NavBar/NavBar";
import { Row, Col } from "react-bootstrap";
export interface CategoryProps {
  name: string;
}

const Category: React.FC<CategoryProps> = ({ name }) => {
  return (
    <>
      <NavigationBar />
      <div className="category-page">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="main-text-category">{name}</div>
      <div className="quote-page">
        <div className="main-text-quote"></div>
        <div className="quote-body"></div>
      </div>
      <Footer />
    </>
  );
};
export default Category;

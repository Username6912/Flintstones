import { React, useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./Product.css";

function Product() {
  return (
    <div class="body-section4">
      {/* <video autoPlay loop muted>
        <source src={sample} type="video/mp4" />
      </video> */}
      <h1 className="center-text-card">
        <a
          style={{ textDecoration: "none ", color: " white" }}
          href="/products"
        >
          Browse our Products
        </a>
      </h1>
    </div>
  );
}

export default Product;

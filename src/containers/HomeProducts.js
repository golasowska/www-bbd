import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeProduct extends Component {
  displayHomeProducts = () => {
    console.log("products");
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="home-section-header background-blue-1 col-md-4 white-font d-flex align-items-center">
            <div>Product</div>
          </div>
          <div className="home-section-more read-more-white background-blue-1 col-md-7 d-flex align-items-center white-font justify-content-end">
            <Link to="/products">
              <div>Read more ></div>
            </Link>
          </div>
          <div
            className="col-1 footer-pink-fake"
            style={{ background: "rgba(255, 96, 97, 0.5)" }}
          />
        </div>
        <div className="row text-center">{this.displayHomeProducts()}</div>
      </div>
    );
  }
}

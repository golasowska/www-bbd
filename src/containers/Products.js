import React, { Component } from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import Footer from "./Footer";

import Product from "./Product";

import logo_white from "../assets/images/bbod_basic_white.svg";

class Products extends Component {
  displayProducts = () => {
    return this.props.products.map(product => {
      return <Product key={product.name} product={product} />;
    });
  };

  render() {
    return (
      <div>
        <Navigation />

        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Products</div>
          </div>
        </div>

        <div className="row">
          <div className="col col-md-11 feature-desc d-flex align-items-center pl-5 pt-5 offset-md-1">
            <div>
              <span className="light-blue">
                BBOD offers a variety of derivatives<br /> contract types.<br />
              </span>
              <span className="dark-blue">
                All contracts profit<br /> and loss are calculated in Ether.
              </span>
            </div>
          </div>
        </div>

        <div className="row text-center justify-content-center">
          {this.displayProducts()}
        </div>

        <Footer bgColor="#224394" fontColor="#fafafa" logo={logo_white} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Products);

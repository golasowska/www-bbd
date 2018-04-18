import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import HomeProduct from "./HomeProduct";

class HomeProducts extends Component {
  displayHomeProducts = () => {
    return this.props.products.map(product => {
      return <HomeProduct key={product.name} product={product} />;
    });
  };
  render() {
    return (
      <div>
        <div className="row" style={{ background: "rgba(255, 96, 97, 0.9)" }}>
          <div className="home-section-header background-blue-1 col col-md-4 white-font d-flex align-items-center">
            <div>Products</div>
          </div>
          <div className="home-section-more read-more-white background-blue-1 col col-md-7 d-flex align-items-center white-font justify-content-end">
            <Link to="/products">
              <div>Read more ></div>
            </Link>
          </div>
        </div>
        <div
          className="row text-center"
          style={{ background: "rgba(255, 96, 97, 0.9)", zIndex: "-50" }}
        >
          {this.displayHomeProducts()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(HomeProducts);

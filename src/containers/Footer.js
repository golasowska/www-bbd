import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Footer extends Component {
  displayMedia = () => {
    return this.props.media.map(logo => {
      return (
        <div key={logo.name} className="pr-3 logo-media">
          <a href={logo.href} target={logo.target}>
            <img src={logo.src} width={logo.width} alt={logo.alt} />
          </a>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="">
        <div className="row">
          <Link to="/newsletter" className="col-md-4 btn-footer text-center">
            Newsletter >
          </Link>

          <div className="col-md-7 btn-footer text-center">Trading ></div>
        </div>

        <div
          className="row footer-text"
          style={{
            color: this.props.fontColor
          }}
        >
          <div
            className="col-md-4"
            style={{
              background: this.props.bgColor,
              color: this.props.fontColor
            }}
          >
            <div className="text-center">
              <img
                src={this.props.logo}
                width="199.947"
                height="90.001"
                alt="bbod"
              />
            </div>
            <div className="text-center mt-4 mb-4">
              <Link to="/migrate-tokens">
                <span className=" migrate migrate-btn text-uppercase">
                  migrate your bbd tokens
                </span>
              </Link>
            </div>
          </div>

          <div
            className="col col-md-4"
            style={{
              background: this.props.bgColor,
              color: this.props.fontColor
            }}
          >
            <div className="footer-text-header pt-4 pl-4">
              <p>Resources</p>
            </div>
            <div className="pl-4">
              <p>Quick Guide</p>
            </div>
            <div className="pl-4">
              <Link
                to="/products"
                style={{
                  color: this.props.fontColor
                }}
              >
                <p>Products</p>
              </Link>
            </div>
            <div className="pl-4">
              <p>API Documentations</p>
            </div>
            <div className="pl-4">
              <p>Technical Reference</p>
            </div>
          </div>

          <div
            className="col col-md-4"
            style={{
              background: this.props.bgColor,
              color: this.props.fontColor
            }}
          >
            <div className="text-left footer-text-header pt-4">
              <p>About & Contact</p>
            </div>
            <div className="text-left">
              <Link
                to="/features"
                style={{
                  color: this.props.fontColor
                }}
              >
                <p>Features</p>
              </Link>
            </div>
            <div className="text-left">
              <Link
                to="/about"
                style={{
                  color: this.props.fontColor
                }}
              >
                <p>About BBOD</p>
              </Link>
            </div>
            <div className="text-left">
              <p>News</p>
            </div>
            <div className="text-left">
              <Link
                to="/contact"
                style={{
                  color: this.props.fontColor
                }}
              >
                <p>Contact Us</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="row footer-media">
          <div className="col-md-5">
            <p className="follow m-3">Follow Us</p>
          </div>
          <div className="col-md-6 m-3 text-center d-flex flex-wrap justify-content-center">
            {this.displayMedia()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    media: state.media
  };
}

export default connect(mapStateToProps)(Footer);

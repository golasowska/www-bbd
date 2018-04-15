import React, { Component } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";
import FormContact from "./FormContact";
import GoogleMap from "./GoogleMap";

import logo_white from "../assets/images/bbod_white.svg";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 0.121817,
      lat: 52.205337
    };
  }
  setMarker1 = () => {
    this.setState({
      lng: 30.1217,
      lat: 23.205337
    });
    console.log("sialalalaaa1");
  };
  setMarker2 = () => {
    this.setState({
      lng: 7.1217,
      lat: 5.205337
    });
    console.log("sialalalaaa2");
  };
  setMarker3 = () => {
    this.setState({
      lng: 10.1217,
      lat: 63.205337
    });
    console.log("sialalalaaa3");
  };
  setMarker4 = () => {
    this.setState({
      lng: 38.1217,
      lat: 13.205337
    });
    console.log("sialalalaaa4");
  };
  render() {
    return (
      <div>
        <Navigation />

        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Community</div>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-4 feature-desc d-flex align-items-center pl-5 pt-5 offset-md-1">
            <div>
              <span className="light-blue">Where</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-10 pt-5">
            <GoogleMap lng={this.state.lng} lat={this.state.lat} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-2 home-feature-item">
            <div className="contact-item pb-5" onClick={this.setMarker1}>
              Piotr<br />12345678<br /> piotr@gmail.com <br />
            </div>
          </div>
          <div className="col-md-2 home-feature-item">
            <div className="contact-item pb-5" onClick={this.setMarker2}>
              Piotr<br />12345678<br /> piotr@gmail.com <br />
            </div>
          </div>
          <div className="col-md-2 home-feature-item">
            <div className="contact-item pb-5" onClick={this.setMarker3}>
              Piotr<br />12345678<br /> piotr@gmail.com <br />
            </div>
          </div>
          <div className="col-md-2 home-feature-item">
            <div className="contact-item pb-5" onClick={this.setMarker4}>
              Piotr<br />12345678<br /> piotr@gmail.com <br />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Get info</div>
          </div>
        </div>

        <div className="row">
          <div className="col-col-md-4 feature-desc d-flex align-items-center pl-5 pt-5 offset-md-1">
            <FormContact history={this.props.history} />
          </div>
        </div>

        <Footer bgColor="#00468e" fontColor="#fff" logo={logo_white} />
      </div>
    );
  }
}

import React, { Component } from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import Footer from "./Footer";
import AboutPerson from "./AboutPerson";

import logo_white from "../assets/images/bbod_basic_white.svg";
import about_photo from "../assets/images/about/about_photo.jpg";

class AboutUs extends Component {
  displayPeople = () => {
    return this.props.people.map(person => {
      return <AboutPerson key={person.name} person={person} />;
    });
  };

  render() {
    return (
      <div>
        <Navigation />

        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>About Us</div>
          </div>
        </div>

        <div className="row pb-5">
          <div className="col col-md-5 feature-desc d-flex justify-content-center align-items-center">
            <div>
              <span className="light-blue">
                We are all in this<br />together,<br />
              </span>
              <span className="dark-blue">
                everybody does<br /> their part.
              </span>
            </div>
          </div>
          <div
            className="col-md-7 photo-about-desc"
            style={{
              background: `url(${about_photo}) no-repeat center`,
              backgroundSize: "cover",
              minHeight: "300px"
            }}
          />
        </div>

        <div className="row text-center justify-content-center">
          {this.displayPeople()}
        </div>

        <Footer bgColor="#224394" fontColor="#fafafa" logo={logo_white} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.people,
    newsletter: state.newsletterList,
    messages: state.messages
  };
}

export default connect(mapStateToProps)(AboutUs);

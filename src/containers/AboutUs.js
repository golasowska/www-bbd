import React, { Component } from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import Footer from "./Footer";
import AboutPerson from "./AboutPerson";

import logo_white from "../assets/images/bbod_white.svg";
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
          <div className="col-md-5 about-desc  pl-5 pt-5 offset-md-1">
            <div className="dark-blue">
              The Blockchain Board of Derivatives (BBOD) is a cryptocurrency
              derivatives exchange with marketing and research offices in
              Cambridge, UK. BBOD’s cryptocurrency derivatives exchange has been
              created in partnership with GMEX. BBOD has made it its mission to
              demistify the world of derivatives for the benefit of everyone who
              uses cryptocurrencies.
            </div>
          </div>
          <div
            className="col-md-6"
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

        <Footer bgColor="#00468e" fontColor="#fff" logo={logo_white} />
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

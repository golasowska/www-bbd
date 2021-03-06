import React, { Component } from "react";
import { connect } from "react-redux";
import { showMarker } from "../actions";

class ContactPerson extends Component {
  setMarker = () => {
    const contactPerson = this.props.contactPerson;
    this.props.showMarker(contactPerson);
    setTimeout(() => this.props.initMap(), 1500);
  };

  render() {
    const { name, country } = this.props.contactPerson;
    return (
      <div className="col col-md-2 contact-item-col background-blue-1 white-font">
        <div className="contact-item" onClick={this.setMarker}>
          {name}
          <br />
          {country}
        </div>
      </div>
    );
  }
}

export default connect(null, { showMarker })(ContactPerson);

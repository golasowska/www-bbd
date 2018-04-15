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
    const { name, phone, email } = this.props.contactPerson;
    return (
      <div className="col-md-2 home-feature-item">
        <div className="contact-item pb-5" onClick={this.setMarker}>
          {name}
          <br />
          {phone}
          <br /> {email} <br />
        </div>
      </div>
    );
  }
}

export default connect(null, { showMarker })(ContactPerson);

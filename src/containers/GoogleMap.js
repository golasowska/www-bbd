/*global google*/

import React, { Component } from "react";
import { connect } from "react-redux";

import ContactPerson from "./ContactPerson";

class GoogleMap extends Component {
  displayPeopleContact = () => {
    return this.props.contactPeople.map(contactPerson => {
      return (
        <ContactPerson
          key={contactPerson.phone}
          contactPerson={contactPerson}
          initMap={this.initMap}
        />
      );
    });
  };

  initMap = () => {
    const map = new google.maps.Map(this.refs.map, {
      zoom: 10,
      center: {
        lat: Number(this.props.marker.lat),
        lng: Number(this.props.marker.lng)
      }
    });
    new google.maps.Marker({
      position: {
        lat: Number(this.props.marker.lat),
        lng: Number(this.props.marker.lng)
      },
      map: map
    });
  };

  componentDidMount() {
    this.initMap();
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col col-md-10 pt-5">
            <div className="map" ref="map" id="map" />
          </div>
        </div>
        <div className="row">{this.displayPeopleContact()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contactPeople: state.contactPeople,
    marker: state.marker
  };
}

export default connect(mapStateToProps)(GoogleMap);

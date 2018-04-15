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
        <div className="row  d-flex align-items-end">
          <div className="col col-md-10 pr-0">
            <div className="map" ref="map" id="map" />
          </div>
          <div className="col col-md-1 fake-hight map-square-blue" />
        </div>
        <div className="row">
          <div className="col col-md-1 fake-hight" />
          {this.displayPeopleContact()}
          <div className="col col-md-2 fake-hight" />
        </div>
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

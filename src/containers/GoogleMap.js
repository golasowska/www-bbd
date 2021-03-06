/*global google*/

import React, { Component } from "react";
import { connect } from "react-redux";

import ContactPerson from "./ContactPerson";

class GoogleMap extends Component {
  displayPeopleContact = () => {
    return this.props.contactPeople.map(contactPerson => {
      return (
        <ContactPerson
          key={contactPerson.country}
          contactPerson={contactPerson}
          initMap={this.initMap}
        />
      );
    });
  };

  initMap = () => {
    const map = new google.maps.Map(this.refs.map, {
      zoom: 5,
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
      // icon: "http://maps.google.com/mapfiles/kml/pal5/icon11.png",
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
          <div className="col col-md-10 pr-0 pl-0">
            <div className="map" ref="map" id="map" />
          </div>
          <div className="col col-md-1 fake-hight-map map-square-blue" />
        </div>
        <div className="row row-map-marker">
          <div className="col col-md-1 fake-hight-map" />
          {this.displayPeopleContact()}
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

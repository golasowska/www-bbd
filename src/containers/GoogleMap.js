/*global google*/

import React, { Component } from "react";

class GoogleMap extends Component {
  componentDidMount() {
    const map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    });
    let marker = new google.maps.Marker({
      position: {
        lat: this.props.lat,
        lng: this.props.lng
      },
      map: map
    });
  }
  render() {
    return <div className="map" ref="map" id="map" />;
  }
}

export default GoogleMap;
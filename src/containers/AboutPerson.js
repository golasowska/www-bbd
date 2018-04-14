import React, { Component } from "react";

export default class AboutPerson extends Component {
  render() {
    const { name, src, description, position, alt, width } = this.props.person;
    return (
      <div className="col-md-5 pl-5 pr-5 dark-blue feature-item">
        <div className="feature-icon">
          <img src={src} width={width} height={width} alt={alt} />
        </div>
        <div className="feature-name pb-5">{name}</div>
        <div className="feature-description pb-3 pr-1 pl-1">{position}</div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class AboutPerson extends Component {
  render() {
    const { name, src, description, position, alt } = this.props.person;
    return (
      <div className="col-ml-5 pl-5 pr-5 dark-blue feature-item">
        <div className="about-person-square  m-auto">
          <img src={src} className=" about-person-icon" alt={alt} />
          <div className="about-person-description">
            <div className="feature-description pb-3 pr-1 pl-1 pt-3 about-person-position text-center">
              {position}
            </div>
            <div className="feature-description pb-3 pr-1 pl-1 pt-3">
              {description}
            </div>
          </div>
        </div>
        <div className="about-person-name text-center pb-5">{name}</div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class AboutPerson extends Component {
  render() {
    const { name, src, description, position } = this.props.person;
    return (
      <div className="col-ml-5 pt-5 pl-5 pr-5 dark-blue feature-item text-center">
        <div
          className="text-center about-person-icon m-auto"
          style={{
            background: `url(${src}) no-repeat center`,
            backgroundSize: "contain"
          }}
        >
          <div className="about-person-description align-items-center">
            <div className="feature-description pb-3 pr-1 pl-1 pt-3 about-person-position align-self-center">
              {position}
            </div>
            <div className="feature-description pb-3 pr-1 pl-1 pt-3">
              {description}
            </div>
          </div>
        </div>
        <div className="about-person-name  pb-5">{name}</div>
      </div>
    );
  }
}

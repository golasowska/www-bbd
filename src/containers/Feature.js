import React, { Component } from "react";

export default class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "block",
      displayHover: "none"
    };
  }
  iconLight = () => {
    this.setState({
      display: "none",
      displayHover: "block"
    });
  };
  iconDark = () => {
    this.setState({
      display: "block",
      displayHover: "none"
    });
  };
  render() {
    const { name, description, src, srcLb, alt, width } = this.props.feature;
    return (
      <div
        className="col-md-4 p-3 dark-blue feature-item"
        onMouseEnter={this.iconLight}
        onMouseLeave={this.iconDark}
      >
        <div className="feature-icon" style={{ display: this.state.display }}>
          <img src={src} width={width} alt={alt} />
        </div>
        <div
          className="feature-icon"
          style={{ display: this.state.displayHover }}
        >
          <img src={srcLb} width={width} alt={alt} />
        </div>
        <div className="feature-name pb-5">{name}</div>
        <div className="feature-description pb-3 pr-1 pl-1">{description}</div>
      </div>
    );
  }
}

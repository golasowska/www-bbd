import React, { Component } from "react";

export default class HomeFeature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none"
    };
  }

  showDescription = () => {
    this.setState({
      display: "block"
    });
  };
  hideDescription = () => {
    this.setState({
      display: "none"
    });
  };
  render() {
    const { name, description, src, alt, width } = this.props.homeFeature;
    return (
      <div
        className="col-md-3 home-feature-item"
        onMouseEnter={this.showDescription}
        onMouseLeave={this.hideDescription}
      >
        <div className="feature-icon">
          <img src={src} width={width} alt={alt} />
        </div>
        <div className="feature-name pb-5">{name}</div>
        <div
          className="feature-description pb-3 pr-1 pl-1"
          style={{ display: this.state.display, transition: "0.5s" }}
        >
          {description}
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

import logo_bbod from "../assets/images/bbod-big.svg";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bg: null,
      bgSize: null
    };
  }
  showBg = () => {
    this.setState({
      bg: `url(${logo_bbod}) no-repeat center`,
      bgSize: "contain"
    });
  };
  hideBg = () => {
    this.setState({
      bg: null,
      bgSize: null
    });
  };
  render() {
    const { name, description, src, alt, width } = this.props.product;
    return (
      <div
        className="col-md-5 pl-5 pr-5 dark-blue feature-item"
        style={{
          background: this.state.bg,
          backgroundSize: this.state.bgSize
        }}
        onMouseEnter={this.showBg}
        onMouseLeave={this.hideBg}
      >
        <div className="feature-icon">
          <img src={src} width={width} height={width} alt={alt} />
        </div>

        <div className="feature-name pb-5">{name}</div>
        <div className="feature-description pb-3 pr-1 pl-1">{description}</div>
      </div>
    );
  }
}

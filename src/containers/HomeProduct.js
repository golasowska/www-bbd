import React, { Component } from "react";

export default class HomeProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacityDesc: "0",
      maxHeightDesc: "0px",
      classesDesc: "feature-description pr-1 pl-1 m-auto"
    };
  }

  showDescription = () => {
    this.setState({
      opacityDesc: "1",
      maxHeightDesc: "500px",
      classesDesc: "feature-description pb-3 pr-1 pl-1 m-auto"
    });
  };

  hideDescription = () => {
    this.setState({
      opacityDesc: "0",
      maxHeightDesc: "0px",
      classesDesc: "feature-description pr-1 pl-1 m-auto"
    });
  };
  render() {
    const {
      name,
      description,
      srcW,
      alt,
      width,
      colClass
    } = this.props.product;
    return (
      <div className={colClass}>
        <div
          className="feature-name"
          onMouseEnter={this.showDescription}
          onMouseLeave={this.hideDescription}
        >
          {name}
        </div>
        <div className="pt-3 pb-4">
          <img src={srcW} width={width} height={width} alt={alt} />
        </div>

        <div
          className={this.state.classesDesc}
          style={{
            opacity: this.state.opacityDesc,
            transition: "1s",
            width: "70%",
            maxHeight: this.state.maxHeightDesc
          }}
        >
          {description}
        </div>
      </div>
    );
  }
}

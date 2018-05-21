import React, { Component } from "react";
import { Document, Page } from "react-pdf";

import Navigation from "../containers/Navigation";
import Footer from "../containers//Footer";

import logo_white from "../assets/images/bbod_white.svg";

import qg from "../assets/images/quick-guide/BBOD.pdf";

export default class QuickGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1
    };
  }
  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };
  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Navigation />

        <div>
          <Document file={qg} onLoadSuccess={this.onDocumentLoad}>
            <div className="row">
              <div className="col text-center d-inline-block img-fluid">
                <Page pageNumber={1} className={"qg"} />
              </div>
            </div>
            <div className="row">
              <div className="col text-center d-inline-block img-fluid">
                <Page pageNumber={2} className={"qg"} />
              </div>
            </div>
            <div className="row">
              <div className="col text-center d-inline-block img-fluid">
                <Page pageNumber={3} className={"qg"} />
              </div>
            </div>
            <div className="row">
              <div className="col text-center d-inline-block img-fluid">
                <Page pageNumber={4} className={"qg"} />
              </div>
            </div>
          </Document>
        </div>

        <Footer bgColor="#224394" fontColor="#fafafa" logo={logo_white} />
      </div>
    );
  }
}

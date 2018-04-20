import React, { Component } from "react";
import { connect } from "react-redux";

import Navigation from "./Navigation";
import Footer from "./Footer";
import NewsItem from "./NewsItem";

import logo_white from "../assets/images/bbod_basic_white.svg";

class News extends Component {
  displayNewsItem = () => {
    return this.props.news.map(newsItem => {
      return <NewsItem key={newsItem.title} newsItem={newsItem} />;
    });
  };
  render() {
    return (
      <div>
        <Navigation />

        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>News</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 feature-desc d-flex align-items-center pt-5 mb-5 offset-md-1">
            <div>
              <span className="light-blue">Read </span>{" "}
              <span className="dark-blue"> about BBOD</span>
            </div>
          </div>
        </div>

        <div className="row text-center justify-content-center">
          {this.displayNewsItem()}
        </div>

        <Footer bgColor="#446c72" fontColor="#fff" logo={logo_white} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    news: state.news
  };
}

export default connect(mapStateToProps)(News);

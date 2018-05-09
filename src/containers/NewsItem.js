import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, url, src } = this.props.newsItem;
    return (
      <div className="col-lg-6 dark-blue">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div
            className="news-photo"
            style={{
              background: `url(${src}) no-repeat center`,
              backgroundSize: "contain"
            }}
          />
        </a>

        <div className="news-title text-center">
          <a
            className="dark-blue"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </div>
      </div>
    );
  }
}

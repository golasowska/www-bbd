import React, { Component } from 'react';

import kck from '../assets/images/partners/kck_logo.png';
import gmex from '../assets/images/partners/gmex_logo.png';
import mtp from '../assets/images/partners/MTP_logo.svg';

export default class HomePartners extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="home-section-header col-md-4 dark-blue d-flex align-items-center">
            <div>Partners</div>
          </div>
          <div
            className="col-md-8 partners-pink"
            style={{ background: '#90caf9' }}
          />
        </div>
        <div className="row">
          <div className="col col-md-4 partners-white" />
          <div className="col col-md-7 partners-logos d-flex flex-wrap justify-content-around align-items-center">
            <div className="partner-logo">
              <a
                href="http://www.gmex-group.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gmex} height="45" alt="logo_gmex" />
              </a>
            </div>
            <div className="partner-logo">
              <a
                href="http://mobiletradingpartners.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={mtp} height="65" alt="logo_mtp" />
              </a>
            </div>
            <div className="partner-logo">
              <a
                href="http://kcik.ug.edu.pl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={kck} height="45" alt="logo_kck" />
              </a>
            </div>
          </div>
          <div
            className="col-md-1 partners-pink"
            style={{ background: '#90caf9' }}
          />
        </div>
      </div>
    );
  }
}

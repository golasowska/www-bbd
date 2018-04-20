import React, { Component } from "react";

import Navigation from "../containers/Navigation";
import Footer from "../containers//Footer";

import ReactJson from "react-json-view";

import logo_white from "../assets/images/bbod_white.svg";
import data_json from "../assets/data_json";

import migrate1 from "../assets/images/migrate/migrate1.png";
import migrate2 from "../assets/images/migrate/migrate2.png";
import migrate3 from "../assets/images/migrate/migrate3.png";
import migrate4 from "../assets/images/migrate/migrate4.png";
import migrate5 from "../assets/images/migrate/migrate5.png";
import migrate6 from "../assets/images/migrate/migrate6.png";
import migrate7 from "../assets/images/migrate/migrate7.png";
import migrate8 from "../assets/images/migrate/migrate8.png";

export default class MigrateTokens extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className="row">
          <div className="home-section-header col-md-11 dark-blue d-flex align-items-center">
            <div>Migrate your BBD tokens</div>
          </div>
        </div>

        <div className="row">
          <div className="col col-md-11 feature-desc d-flex align-items-center pl-5 pt-5 offset-md-1">
            <div>
              <span className="light-blue">
                To migrate your BBD tokens<br />
              </span>
              <span className="dark-blue">into the new contract version</span>
            </div>
          </div>
        </div>

        <div className="row pb-5">
          <div className="col col-md-10 about-desc pl-5 pt-3 offset-md-1">
            <div className="dark-blue pb-2">
              Make sure you do this using the{" "}
              <a
                href="https://www.google.com/intl/en/chrome/"
                target="_blank"
                rel="noopener noreferrer"
                className="migrate-link"
              >
                Chrome Browser{" "}
              </a>
              with the{" "}
              <a
                href="https://metamask.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="migrate-link"
              >
                Metamask plug-in{" "}
              </a>
              running.
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Go to MyEtherWallet
              Contracts page:{" "}
              <a
                href="https://www.myetherwallet.com/#contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="migrate-link"
              >
                https://www.myetherwallet.com/#contracts
              </a>{" "}
              .
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Paste the old BBD Contract
              address into the <b> Contract Address </b> field:
              0x5CA71Ea65ACB6293e71E62c41B720698b0Aa611C
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Please paste the following
              into the <b> ABI / JSON interface </b> :
            </div>
            <div className="mt-5">
              <ReactJson src={data_json} theme="monokai" />{" "}
            </div>

            <div className="m-3">
              <img src={migrate1} className="img-fluid" alt="instructions" />
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Click <b> Access </b> .
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Choose <b>balanceOf </b> and
              put your address in which you have old BBD. Press “READ”.
            </div>

            <div className="m-3">
              <img src={migrate2} className="img-fluid" alt="instructions" />
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span>Copy the amount of balance
              you have (this is in a format in which we need up to 18 digits
              after the dot).
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Now choose <b>migrate </b>{" "}
              and paste the number in the place of <b>_value </b>
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Now click <b>Write </b> .
            </div>

            <div className="m-3">
              <img src={migrate3} className="img-fluid" alt="instructions" />
            </div>

            <div className="m-3">
              <img src={migrate4} className="img-fluid" alt="instructions" />
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Set gas limit to “70000” and
              Amount to send to “0” and press “Generate Transaction”.
            </div>

            <div className="m-3">
              <img src={migrate5} className="img-fluid" alt="instructions" />
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Press{" "}
              <b>Yes, I am sure! Make transaction </b> .
            </div>

            <div className="m-3">
              <img src={migrate6} className="img-fluid" alt="instructions" />
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span>Wait a few minutes and it is
              done.
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span>{" "}
              <b>To see your migrated BBD token:</b> .
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Open Metamask and go into
              your account in which you have completed the above migration
              procedure.
            </div>

            <div className="m-3">
              <img src={migrate7} className="img-fluid" alt="instructions" />
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span>Click <b>Add Token </b> .
            </div>

            <div className="m-3">
              <img src={migrate8} className="img-fluid" alt="instructions" />
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span> Now paste into the{" "}
              <b>Token Contract Address </b> field this address:
              0xb79fc5505ea4f3b920ee7e3349de064226692717
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span>Click <b>Add </b> .
            </div>

            <div className="dark-blue pb-1">
              <span className="red-base"> > </span>Wait a few minutes and you
              will see your updated BBD account balance in Metamask.
            </div>
          </div>
        </div>

        <Footer bgColor="#446c72" fontColor="#fff" logo={logo_white} />
      </div>
    );
  }
}

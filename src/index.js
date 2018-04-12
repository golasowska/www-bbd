import React from "react";
import ReactDOM from "react-dom";
import "./style/bootstrap-material-design.min.css";
import "./style/index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import reducers from "./reducers";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

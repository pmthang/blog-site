import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import store, { history } from "./store";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWithRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);

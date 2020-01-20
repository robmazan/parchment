/* istanbul ignore file */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import { history } from "./store/router";
import NavigationBar from "./components/NavigationBar";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route exact path="/" render={() => <App />} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

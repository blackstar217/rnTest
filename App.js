import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MainStackRouter from "./src/Routers/MainStackRouter";

const store = createStore(() => {}, {});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainStackRouter />
      </Provider>
    );
  }
}

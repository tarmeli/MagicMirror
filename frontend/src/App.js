import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import Content from "./components/Content";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Content />
      </Provider>
    );
  }
}

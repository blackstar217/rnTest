import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MainStackRouter from "./src/Routers/MainStackRouter";
import firebase from 'firebase';

const store = createStore(() => {}, {});

export default class App extends Component {

  componentWillMount() {

    // config firebase
    firebase.initializeApp({
      apiKey: 'AIzaSyAeVTwP2GDAx48c95zY-tXHA9wxvEE8OgY',
      authDomain: 'authentication-ba376.firebaseapp.com',
      databaseURL: 'authentication-ba376.firebaseapp.com',
      projectId: 'authentication-ba376',
      storageBucket: 'authentication-ba376',
      messagingSenderId: '530736962945'
    });
  }

  render() {
    return (
      <Provider store={store}>
        <MainStackRouter />
      </Provider>
    );
  }
}

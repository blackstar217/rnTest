import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { Scene, Router } from "react-native-router-flux";
import Home from "../containers/home";
import FullNameScreen from "../containers/fullNameScreen";
import LoginScreen from "../containers/loginScreen";
import SignUpScreen from "../containers/SignUpScreen";
import NavigationDrawer from "./NavigationDrawer";

const RouterWithRedux = connect()(Router);

class MainNavigator extends Component {
  render() {
    return (
      <RouterWithRedux>
        <Scene
          key="drawer"
          component={NavigationDrawer}
          open={false}
          type="replace"
        >
          <Scene key="drawerChildrenWrapper" hideNavBar>
            <Scene initial key="home" component={Home} hideNavBar />
            <Scene key="fullNameScreen" component={FullNameScreen} hideNavBar />
            <Scene key="loginScreen" component={LoginScreen} hideNavBar />
            <Scene key="signUpScreen" component={SignUpScreen} hideNavBar />
          </Scene>
        </Scene>
      </RouterWithRedux>
    );
  }
}

export default MainNavigator;

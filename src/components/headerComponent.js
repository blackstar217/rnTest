import React, { Component } from "react";
import { Dimensions, View, TouchableOpacity, StatusBar } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Actions as NavigationActions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../style/";

export default class HeaderComponent extends Component {
  navigate() {
    NavigationActions.refresh({
      key: "drawer",
      open: true
    });
  }

  goBack = () => {
    NavigationActions.pop();
  };

  render() {
    return (
      <View style={styles.headerContainer}>
        {!isIphoneX() && <StatusBar hidden />}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => this.goBack()}
          >
            <Icon active name="ios-arrow-back" size={25} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuButtonContainer}
            onPress={() => this.navigate()}
          >
            <Icon active name="ios-menu" size={30} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

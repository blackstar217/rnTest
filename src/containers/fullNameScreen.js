import React, { Component } from "react";
import { View, Text } from "react-native";
import { Actions as NavigationActions } from "react-native-router-flux";
import HeaderComponent from "../components/headerComponent";
import styles from "../style";

class FullNameScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <View style={styles.content}>
          <Text style={styles.text}>Denis Dovganiuc</Text>
        </View>
      </View>
    );
  }
}

export default FullNameScreen;

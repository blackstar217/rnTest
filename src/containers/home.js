import React, { Component } from "react";
import { View, Text } from "react-native";
import { Actions as NavigationActions } from "react-native-router-flux";
import firebase from 'firebase';
import HeaderComponent from "../components/headerComponent/";
import styles from "../style/";

class Home extends Component {
  state = { currentUser: null }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ currentUser: user})
    })
  }

  render() {
    const user = this.state.currentUser;
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <View style={styles.content}>
          <Text style={styles.text}>Hello</Text>
          {user && <Text style={styles.text}>{user.email}</Text>}
        </View>
      </View>
    );
  }
}

export default Home;

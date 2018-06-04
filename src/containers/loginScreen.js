import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator  } from 'react-native';
import firebase from 'firebase';
import { Actions as NavigationActions } from "react-native-router-flux";
import {TitledInput} from './common';
import HeaderComponent from "../components/headerComponent/";
import styles from "../style/";

class LoginScreen extends Component {
  state = { email: '', password: '', error: '', loading: false  };

  onLoginPress = () => {
    this.setState({ error: '', loading: true });
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        this.setState({ error: '', loading: false });
        NavigationActions.home();
      })
      .catch(err => {
        this.setState({ error: 'Authentication failed.', loading: false });
      })
  }

  renderButtonOrSpinner = () => {
    if (this.state.loading) {
      return <ActivityIndicator size="small" />;
    }
    return <Button onPress={this.onLoginPress} title="Log in" />;
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <View style={styles.content}>
          <TitledInput
            label='Email Address'
            placeholder='you@domain.com'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <TitledInput
            label='Password'
            autoCorrect={false}
            placeholder='*******'
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
          {this.renderButtonOrSpinner()}
        </View>
      </View>
    );
  }
}

export default LoginScreen;

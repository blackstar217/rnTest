import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Actions as NavigationActions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../style/";

class DrawerBar extends React.Component {
  navigate = mode => {
    setTimeout(() => {
      this.drawerClose();
    }, 0);
    if (mode === "login") {
      NavigationActions.loginScreen();
    } else {
      NavigationActions.signUpScreen();
    }
  };

  drawerClose = () => {
    NavigationActions.refresh({
      key: "drawer",
      open: false
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentContainer}>
            <TouchableOpacity
              style={styles.sidebarItems}
              onPress={() => this.navigate("login")}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sidebarItems}
              onPress={() => this.navigate("signup")}
            >
              <Text style={styles.text}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default DrawerBar;

import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { Actions as NavigationActions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "../style/";

class DrawerBar extends React.Component {
  navigate = () => {
    setTimeout(() => {
      this.drawerClose();
    }, 0);
    NavigationActions.fullNameScreen();
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
              onPress={() => this.navigate()}
            >
              <Text style={styles.text}>Full Name</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default DrawerBar;

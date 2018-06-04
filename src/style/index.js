const React = require("react-native");
import { Dimensions, Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
const { width, height } = Dimensions.get("window");

const { StyleSheet } = React;
export default {
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  content: {
    flex: 1,
    width: width,
    height: isIphoneX() ? height - 90 : height - 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: isIphoneX() ? 30 : 0
  },
  contentContainer: {
    width: 200,
    backgroundColor: "transparent"
  },
  headerContainer: {
    width: width,
    height: isIphoneX() ? 90 : 60,
    backgroundColor: "#ff2e57"
  },
  header: {
    height: 60,
    width: width > 320 ? 309 : 280,
    flexDirection: "row",
    backgroundColor: "#ff2e57",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    top: isIphoneX() ? 30 : 0
  },
  backButtonContainer: {
    width: 25,
    height: 25,
    marginTop: -3,
    alignItems: "center"
  },
  menuButtonContainer: {
    width: 21,
    height: 25,
    marginTop: -5
  },
  sidebarItems: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text: {
    fontSize: 30,
    color: "#ff2e57"
  },
  errorTextStyle: {
    color: '#E64A19',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  inputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 2,
    color: '#262626',
    fontSize: 18,
    fontWeight: '200',
    flex: 1,
    height: 40
  },
  labelStyle: {
    fontSize: 12,
    color: '#7F7D7D',
    fontWeight: '200',
    flex: 1
  },
  containerStyle: {
    height: 45,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    borderColor: '#D4D4D4',
    borderBottomWidth: 1,
  }
};

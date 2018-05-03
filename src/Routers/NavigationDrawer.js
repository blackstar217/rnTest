import React, { PropTypes, Component } from "react";
import { Dimensions } from "react-native";
import Drawer from "react-native-drawer";
import {
  DefaultRenderer,
  Actions as NavigationActions
} from "react-native-router-flux";
import DrawerBar from "../containers/drawerBar";

const { width, height } = Dimensions.get("window");

class NavigationDrawer extends Component {
  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        ref="navigation"
        type="static"
        open={state.open}
        onOpen={() => NavigationActions.refresh({ key: state.key, open: true })}
        onClose={() =>
          NavigationActions.refresh({ key: state.key, open: false })}
        content={<DrawerBar />}
        tapToClose
        openDrawerOffset={80}
        panCloseMask={0.5}
        negotiatePan
        tweenHandler={ratio => ({
          main: {
            opacity: Math.max(0.8, 1 - ratio)
          }
        })}
      >
        <DefaultRenderer
          navigationState={children[0]}
          onNavigate={this.props.onNavigate}
        />
      </Drawer>
    );
  }
}

export default NavigationDrawer;

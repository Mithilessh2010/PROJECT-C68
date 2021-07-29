import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import fb from "./screens/fb";
import ins from "./screens/ins";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  ins: { screen: ins },
  fb: { screen: fb }
});

const AppContainer = createAppContainer(TabNavigator);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FetchLocation from "./components/FetchLocation";
import UsersMap from "./components/UsersMap";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Luke Yuzuki & Leslie,\n" +
    "'Is yarn add the same as NPM install? - Bruce 2018'"
});

type Props = {};
export default class App extends Component<Props> {
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position + "hi");
      },
      err => console.log(err)
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Cool People!</Text>
        <Text style={styles.instructions}>Chips anyone?</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class PorIniciar extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <Text>PorIniciar Screen ...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF"
  }
});
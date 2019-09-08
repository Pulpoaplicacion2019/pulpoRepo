import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import firebase from "react-native-firebase";

export default class Calendarios extends Component {
  constructor() {
    super();
    global.torneos = [];
  }
  state = {
    urlResult: "",
    idLayout: "torneo",
    misTorneos: []
  };

  listenForItems = itemsRef => {
    itemsRef.on("value", snap => {
      console.log("Se ingresa al listener");
      let data = snap.val();
      let items = Object.values(data);
      console.log(items);
      // var torneo = [];
      snap.forEach(child => {
        torneos.push(child.val());
      });
      this.setState({
        misTorneos: torneos
      });
    });
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref("torneos");
    this.listenForItems(itemsRef);
  }
  render() {
    return (
      <View style={styles.viewBody}>
        <Text>Calendarios Screen ...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

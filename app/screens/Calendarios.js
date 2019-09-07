import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import firebase from "react-native-firebase";
const db = firebase.database();

export default class Calendarios extends Component {
  constructor() {
    super();
    global.calendarios = [];
    state = {
      items: []
    };
  }

  listenForItems = itemsRef => {
    console.log("item:" + itemsRef);
    itemsRef.on("value", snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });

    console.log(this.state);
  };

  componentDidMount() {
    console.log("Ingreso a la parte de carga");
    let itemsRef = db.ref("calendario/torneos");
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

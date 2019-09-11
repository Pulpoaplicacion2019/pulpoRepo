import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator
} from "react-native";
import firebase from "react-native-firebase";
import { Image } from "react-native-elements";

export default class Calendarios extends Component {
  constructor() {
    super();
    this.state = {
      listCalendarios: null
    };
  }

  listenForItems = itemsRef => {
    let resultadoCalendario = [];

    itemsRef.on("value", snap => {
      let data = snap.val();
      resultadoCalendario = Object.values(data);

      //this.setState({ items });
      this.setState({ listCalendarios: resultadoCalendario });
    });
  };

  componentDidMount() {
    const itemsRef = firebase.database().ref("calendario/torneos/Delgado_2019");
    this.listenForItems(itemsRef);
    console.log("State " + this.state);
  }

  renderRow = listCalendarios => {
    console.log("renderRow");
    console.log(listCalendarios);
  };

  renderFlatList = listCalendarios => {
    if (listCalendarios) {
      return (
        <FlatList
          data={this.state.listCalendarios}
          renderItem={this.renderRow}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    } else {
      return (
        <View style={styles.startLoadCalendarios}>
          <Text>Cargando Calendairio </Text>
        </View>
      );
    }
  };

  render() {
    const { listCalendarios } = this.state;
    return (
      <View style={styles.viewBody}>
        {this.renderFlatList(listCalendarios)}
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
  },
  startLoadCalendarios: { marginTop: 20, alignItems: "center" }
});

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Calendarios extends Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <Text>Página para mostrar el calendario.</Text>
      </View>
    );
  }
}

// Estilos para el view que se esta pintando en la pantalla
const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

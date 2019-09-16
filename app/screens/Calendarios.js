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
    const itemsRef = firebase
      .database()
      .ref("calendario/torneos/Delgado_2019/1");
    this.listenForItems(itemsRef);
    console.log("State " + this.state);
  }

  renderRow = listCalendarios => {
    console.log("renderRow");
    console.log(listCalendarios.item);
    const {
      categoria,
      equipoUno,
      equipoDos,
      fecha,
      hora,
      minuto,
      cancha
    } = listCalendarios.item;
    console.log(equipoUno);
    return (
      <View style={styles.viewPartidos}>
        <View style={styles.viewEquipoUno}>
          <Image
            resizeMode="cover"
            source={{ cancha }}
            style={[styles.imagenEstilo, border("#7A7A7A")]}
          />
          <Text style={styles.viewNombreEquipo}>{equipoUno}</Text>
        </View>
        <View style={[styles.viewDatos]}>
          <Text>{fecha}</Text>
          <Text>
            {hora}:{minuto}
          </Text>
          <Text>cancha: {cancha}</Text>
        </View>
        <View style={styles.viewEquipoUno}>
          <Image
            resizeMode="cover"
            source={{ cancha }}
            style={[styles.imagenEstilo, border("#7A7A7A")]}
          />
          <Text style={styles.viewNombreEquipo}>{equipoDos}</Text>
        </View>
      </View>
    );
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
        <View style={styles.navegadorCategorias}>
          <Text style={styles.titleCartegorias}>Categorias</Text>
        </View>
        {this.renderFlatList(listCalendarios)}
      </View>
    );
  }
}

const border = color => {
  return { borderColor: color, borderWidth: 2, backgroundColor: color };
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    backgroundColor: "#fff"
  },
  navegadorCategorias: {
    backgroundColor: "#FF0400",
    height: 50,
    marginBottom: 25,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  titleCartegorias: { fontSize: 20, color: "#FFFFFF" },
  startLoadCalendarios: { marginTop: 20, alignItems: "center" },
  viewEquipoUno: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  viewNombreEquipo: { fontSize: 9 },
  viewPartidos: {
    flexDirection: "row",
    marginLeft: 10,
    // backgroundColor: "#F9F9F9",
    marginTop: 5,
    padding: 5
  },
  imagenEstilo: { width: 80, height: 80 },
  viewDatos: { flex: 2, justifyContent: "center", alignItems: "center" }
});

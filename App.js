import React from "react";
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView,
  Button
} from "react-native";

//import firebase from 'react-native-firebase';

import ResultadosScreen from "./app/screens/Resultados"; // Importar la página creada de prueba

export default class App extends React.Component {
  /* constructor() {
    super();
    this.state = {};
  }
  onPressButton() {
    let db = firebase.database();
    alert("probando insert en bdd");
    let reference = db.ref("/programadores");
    reference
      .child("/123")
      .set({ nombre: "Juan", apellido: "Perez" })
      .then(() => {
        alert("Registro Insertado!");
      })
      .catch(() => {
        alert("Error al insertar!");
      });
  }

  async componentDidMount() {}*/

  render() {
    return (
      <View style={styles.container}>
        <ResultadosScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    margin: 20
  },
  multiButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

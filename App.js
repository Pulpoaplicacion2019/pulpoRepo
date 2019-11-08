import React from "react";
//import Orientation, { orientation } from "react-native-orientation";
import MisTorneosScreen from "./app/navigations/Home"; // Importar la página creada de prueba
import {
   SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
/*
import MisTorneosScreen from "./app/navigations/Home"; // Importar la página creada de prueba*/


export default class App extends React.Component {

 /* componentDidMount = () => {
    Orientation.lockToPortrait();
  };*/

/////////////////////////////////////////////

/*componentDidMount() {

      global.idTorneo = 'Delgado_2019'
	}
*/
////////////////////////////////////////
  render() {
    return (
      <View style={styles.container}>
        <MisTorneosScreen />
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

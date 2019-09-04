import React from "react";
import { Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

// Ejemplo de código en la documentación https://reactnavigation.org/docs/en/hello-react-navigation.html

// Importacion de las Screen creadas para la navegacion
import EquiposScreen from "../screens/Equipos";
import ResultadosScreen from "../screens/Resultados";
import PosicionesScreen from "../screens/Posiciones";
import CalendariosScreen from "../screens/Calendarios";

// Creación de los stack (Conjunto de pantallas de la aplicacion) para relacionar los screen con la navegacion
//Equipos
const equiposScreenStack = createStackNavigator({
  Equipos: {
    screen: EquiposScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Equipos"
    })
  }
});
//Calendario
const calendariosScreenStack = createStackNavigator({
  Calendarios: {
    screen: CalendariosScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Calendarios"
    })
  }
});
//Resultado
const resultadosScreenStack = createStackNavigator({
  Resultados: {
    screen: ResultadosScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Resultados"
    })
  }
});
//Posiciones
const posicionesScreenStack = createStackNavigator({
  Posiciones: {
    screen: PosicionesScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Posiciones"
    })
  }
});

// Root Stack - Es todo lo que agrupa la carga de los stacks

const RootStack = createBottomTabNavigator({
  Resultados: {
    screen: resultadosScreenStack,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "Resulgtados"
    })
  }
});

// Contenedor de la navegacion de la aplicaión
export default createAppContainer(RootStack);

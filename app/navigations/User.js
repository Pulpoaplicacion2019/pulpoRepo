import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-elements";

// Ejemplo de código en la documentación https://reactnavigation.org/docs/en/hello-react-navigation.html

// Importacion de las Screen creadas para la navegacion
import FavoritosScreen from "../screens/Torneos/Favoritos";
import EnCursoScreen from "../screens/Torneos/EnCurso";
import PorIniciarScreen from "../screens/Torneos/PorIniciar";
import MisTorneosScreen from "../screens/Torneos/MisTorneos";

// Creación de los stack (Conjunto de pantallas de la aplicacion) para relacionar los screen con la navegacion
//Favoritos
const FavoritosScreenStack = createStackNavigator({
  Favoritos: {
    screen: FavoritosScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Torneos"
    })
  }
});
//MisTorneos
const MisTorneosScreenStack = createStackNavigator({
  MisTorneos: {
    screen: MisTorneosScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Torneos"
    })
  }
});
//Resultado
const EnCursoScreenStack = createStackNavigator({
  EnCurso: {
    screen: EnCursoScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Torneos"
    })
  }
});
//PorIniciar
const PorIniciarScreenStack = createStackNavigator({
  PorIniciar: {
    screen: PorIniciarScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Torneos"
    })
  }
});


// Root Stack - Es todo lo que agrupa la carga de los stacks

const RootStack = createBottomTabNavigator(
  {
    EnCurso: {
      screen: EnCursoScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "En Curso",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="basketball-hoop"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    MisTorneos: {
      screen: MisTorneosScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "MisTorneos",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="basketball"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    Favoritos: {
      screen: FavoritosScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="star"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    PorIniciar: {
      screen: PorIniciarScreenStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "PorIniciar",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="calendar-clock"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    initialRouteName: "MisTorneos", // Guarda que tab se debe mostrar primero
    order: ["MisTorneos", "Favoritos", "EnCurso", "PorIniciar"], // orden para el menú de dibujado
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);

// Contenedor de la navegacion de la aplicaión
export default createAppContainer(RootStack);

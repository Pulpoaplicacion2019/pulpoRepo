import React from "react";
import {   
  createDrawerNavigator,
  createAppContainer,
  createSwitchNavigator,
  NavigationTransitionProps,
  StackViewTransitionConfigs,
  TabScene,
  TransitionConfig} from "react-navigation";
  import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Icon } from "react-native-elements";

// Ejemplo de código en la documentación https://reactnavigation.org/docs/en/hello-react-navigation.html

// Importacion de las Screen creadas para la navegacion
import FavoritosScreen from "../screens/Torneos/Favoritos";
import EnCursoScreen from "../screens/Torneos/EnCurso";
import PorIniciarScreen from "../screens/Torneos/PorIniciar";
import MisTorneosScreen from "../screens/Torneos/MisTorneos";

import CalendariosScreen from "../screens/Calendarios";
import EquiposScreen from "../screens/Equipos";
import PosicionesScreen from "../screens/Posiciones";
import ResultadosScreen from "../screens/Resultados";



const TorneosStack = createStackNavigator({ MisTorneosScreen});

TorneosStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel:"Torneos",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-basketball", android: "md-basketball" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
    tabBarVisible
  };
};
 const EquiposStack = createStackNavigator({EquiposScreen});
 EquiposStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel:"Equipos",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-contacts", android: "md-contacts" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
    tabBarVisible
  };
};
//Menu inferior
const AuthTabs = createBottomTabNavigator({ TorneosStack,FavoritosScreen, EnCursoScreen,PorIniciarScreen  });
const EquiTabs = createBottomTabNavigator({EquiposStack,CalendariosScreen,PosicionesScreen,ResultadosScreen});
const RootSwitch = createSwitchNavigator({ MisTorneosScreen, AuthTabs ,EquiTabs}, {initialRouteName: "AuthTabs" });
//const RootSwitch = createSwitchNavigator({ MisTorneosScreen, AuthTabs, EquiTabs });

export default createAppContainer(RootSwitch);







// Creación de los stack (Conjunto de pantallas de la aplicacion) para relacionar los screen con la navegacion

//Calendarios
/*
const CalendariosScreenStack = createStackNavigator({
  Favoritos: {
    screen: CalendariosScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Calendarios"
    })
  }
});
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
      title: "Torneos",
      headerRight: (
        <Icon 
        name="menu" 
        onPress={()=>navigation.navigate('DrawerOpen')}
        />
      )
    })
  }
});
//EnCurso
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

    Calendarios: {
      screen: CalendariosScreenStack,
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
    order: ["MisTorneos", "Favoritos", "EnCurso", "PorIniciar", "Calendarios"], // orden para el menú de dibujado
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680"
    }
  }
);

// Contenedor de la navegacion de la aplicaión
export default createAppContainer(RootStack);
*/
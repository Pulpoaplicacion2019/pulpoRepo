import React from "react";
import BurgerMenu from "../components/BurgerMenu";
import {createAppContainer,
  createSwitchNavigator,
  NavigationTransitionProps,
  StackViewTransitionConfigs,
  TabScene,
  TransitionConfig} from "react-navigation";
  import { Platform } from "react-native";
  import { createDrawerNavigator}from "react-navigation-drawer";
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

import LoginScreen from "../screens/Login"



const TorneosStack = createStackNavigator({ MisTorneosScreen,FavoritosScreen,EnCursoScreen,PorIniciarScreen});

TorneosStack.navigationOptions = ({ navigation }) => {
  const tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  let drawerLockMode = "unlocked";
  if (navigation.state.index > 0) {
    drawerLockMode = "locked-closed";
  }

  return {
    tabBarLabel:"Mis Torneos",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-basketball", android: "md-basketball" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
    tabBarVisible,
    drawerLockMode,
    drawerLabel: "Torneos",
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-basketball" type="ionicon" color={tintColor} />
    )
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

const LoginStack = createStackNavigator({LoginScreen});

LoginStack.navigationOptions ={
  tabBarLabel: "Login",
  tabBarIcon: ({ tintColor }) => <Icon name="ios-cog" type="ionicon" color={tintColor} />,
  drawerLabel: "Login",
  drawerIcon: ({ tintColor }) => <Icon name="md-cog" type="ionicon" color={tintColor} />
};

//HAMBURGUESA
const MainNavigator = Platform.select({
  ios: createBottomTabNavigator({LoginStack }),
  android: createDrawerNavigator({TorneosStack,LoginStack }, { contentComponent: BurgerMenu })
});
//Menu inferior
const AuthTabs = createBottomTabNavigator({ TorneosStack,FavoritosScreen, EnCursoScreen,PorIniciarScreen  });
const EquiTabs = createBottomTabNavigator({EquiposStack,CalendariosScreen,PosicionesScreen,ResultadosScreen});
const RootSwitch = createSwitchNavigator({ MisTorneosScreen, AuthTabs ,EquiTabs,MainNavigator}, {initialRouteName: "AuthTabs" });

export default createAppContainer(RootSwitch);

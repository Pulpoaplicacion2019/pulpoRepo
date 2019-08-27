import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import firebase from 'react-native-firebase';
import Home from './screens/Home';
import AddItem from './screens/AddItem';
import List from './screens/List';
import Torneos from './screens/Torneos';


const AppNavigator = createStackNavigator(
	{
		Home,
		AddItem,
		List,
      Torneos
	},
	{
		initialRouteName: 'Home'
	}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
	render() {
		return <AppContainer />;
	}
}

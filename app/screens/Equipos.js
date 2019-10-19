import React, { Component } from "react";
import {Platform, StyleSheet, View, Text } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body } from 'native-base';
import firebase from 'react-native-firebase';
import { Icon } from "react-native-elements";
import ItemEquipos from '../components/ItemEquipos';
import { NavigationActions } from "react-navigation";


const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF"
  },
  container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ebebeb'
	},
   header: {
		backgroundColor: '#E67E22'
	}
});
export default class Equipos extends Component {

  static navigationOptions = ({navigation})=>({
    headerTitle: "Equipos",
    headerLeft: Platform.select({
      ios: null,
      android: (
        <Icon
          name="md-arrow-back"
          type="ionicon"
          containerStyle={styles.icon}
          onPress={() => navigation.navigate('TorneosStack',{},navigation.navigate({routeName:'MisTorneosScreen'}))}
        />
      )
    })
  });
   
state = {
   lista : [{id:'Prueba_2019',
             nombreEquipo:'Prueba_2019'}],
   categorias : [],
   titulo: ''
}
listenForItems = (itemsRef) => {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var lista = [];
      var equipos;
      snap.forEach((child) => {
       equipos = child.val().equipos;
        lista.push({
           equipos: Object.values(equipos),
          id: child.key
        });
      });

      this.setState({
        categorias: lista,
        lista: lista[1].equipos
      });

    });
  }

	componentDidMount() {
      const itemsRef = firebase.database().ref('torneos');
      var lCat =itemsRef.child(global.idTorneo+'/categorias');
      this.listenForItems(lCat);
      
	}
   atras(){
      console.log('aquii');
      this.setState({
        titulo: 'siguiente'
      });
   }
  render() {
    return (
      
      <View style={styles.container}>
      <Container> 
                <Content>
                    <View style={styles.container}>                  
                          <ItemEquipos lista={this.state.lista} />
                    </View>
                </Content>
       </Container>
    </View>       
    );
  }
}


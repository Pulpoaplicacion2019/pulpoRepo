import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body } from 'native-base';
import firebase from 'react-native-firebase';
import { Icon } from "react-native-elements";
import ItemCategorias from '../components/ItemCategorias';
import ItemEquipos from '../components/ItemEquipos';


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
		backgroundColor: '#E67E22',
      justifyContent: "center"
	}
});
export default class Equipos extends Component {
   
state = {
   listaCat : [],
   index:0,
   categoria:'',
   itemsRef:firebase.database().ref('torneos'),
   listaEquip: []
}
listenForItems = (itemsRef) => {
   
    itemsRef.on('value', (snap) => {

      // get children as an array
      var lista = [];
      var equipos;
      snap.forEach((child) => {
        lista.push({
          id: child.key
        });
      });

      this.setState({
        listaCat: lista,
        categoria:lista[0].id
      });
      
       var rEq =itemsRef.child(lista[0].id+'/equipos');
      this.listenForItemsEquipos(rEq);
    });
  }
  listenForItemsEquipos = (itemsRef) => {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var lista = [];
      snap.forEach((child) => {
        lista.push({
          id: child.key,
          nombreEquipo: child._value.nombreEquipo,
          imagenEquipo: child._value.imagenEquipo
        });
      });

      this.setState({
        listaEquip: lista
      });

    });
  }
next = () => {
       var indice = this.state.index;
       const itemsRef = this.state.itemsRef;
       
       ++indice;
       if(indice < this.state.listaCat.length){
          var categ = this.state.listaCat[indice].id;
          var rEq =itemsRef.child(global.idTorneo+'/categorias/'+categ+'/equipos');
         this.listenForItemsEquipos(rEq);
          this.setState({
           index: indice,
           categoria: categ
         });
      }
     
     }
 back = () => {
       var indice = this.state.index;
       const itemsRef = this.state.itemsRef;
       
       --indice;
       if(indice >= 0){
          var categ = this.state.listaCat[indice].id;
          var rEq =itemsRef.child(global.idTorneo+'/categorias/'+categ+'/equipos');
         this.listenForItemsEquipos(rEq);
          this.setState({
           index: indice,
           categoria: categ
         });
      }
     
     }
     
	componentDidMount() {
      const itemsRef = this.state.itemsRef;
       var RCat =itemsRef.child(global.idTorneo+'/categorias/');
      this.listenForItems(RCat);

	}
  render() {
    return (
      
      <View style={styles.container}>
      <Container>
                 <Header style={styles.header}>
                          <Left>
                              <Button transparent>
                                  <Icon name='keyboard-arrow-left' onPress={this.back} />
                              </Button>
                          </Left>
                          <Body>
                              <Title>{this.state.categoria}</Title>
                          </Body>
                          <Right>
                              <Button transparent>
                                  <Icon name='keyboard-arrow-right' onPress={this.next} />
                              </Button>
                           </Right>
                   </Header>
                <Content>
                    <View style={styles.container}>                  
                          <ItemEquipos lista={this.state.listaEquip} />
                    </View>
                </Content>
       </Container>
    </View>       
    );
  }
}


import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body } from 'native-base';
import { Icon } from "react-native-elements";
import  ActionButton from "react-native-action-button";
import {loadTeams} from '../../services/equipos.js';
import ItemEquipos from '../../components/ItemEquipos';
import NavegadorCategorias from '../../components/NavegadorCategorias.js'


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
   static navigationOptions = {
       tabBarLabel:"Equipos",
	 tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-basketball", android: "md-basketball" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    },
   };
state = {
   listaCat : [],
   index:0,
   categoria:'',
   listaEquip: []
}
 
next = () => {
       var indice = this.state.index;
       
       ++indice;
       if(indice < this.state.listaCat.length){
         var categ = this.state.listaCat[indice];
         var lista = this.state.listaCat;
         loadTeams(this,categ);
          this.setState({
           index: indice,
           categoria: categ
         });
      }
     
     }
 back = () => {
       var indice = this.state.index;
       
       --indice;
       if(indice >= 0){
          var categ = this.state.listaCat[indice];
        var lista = this.state.listaCat;
        loadTeams(this,categ);
          this.setState({
           index: indice,
           categoria: categ
         });
      }
     
     }
     
	componentDidMount() {
       var lista = global.listaCategorias;
      var categ = lista[0];
     this.setState({
        listaCat: lista,
        categoria:categ
      });
 
     loadTeams(this,categ);

	}
  render() {
    return (
      
      <View style={styles.container}>
      <Container>
                 <Header style={styles.header}>
                         <NavegadorCategorias pintar = {(categ)=>{loadTeams(this,categ);}}></NavegadorCategorias>
                   </Header>
                <Content>
                    <View style={styles.container}>                  
                          <ItemEquipos lista={this.state.listaEquip} />
                    </View>
                </Content>
       </Container>
       <ActionButton buttonColor="#00A680" onPress={() => {this.props.navigation.navigate("CrearEquipos",this.state.categoria);}} />
    </View>       
    );
  }
}


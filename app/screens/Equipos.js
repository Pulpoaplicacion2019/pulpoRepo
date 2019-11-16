import React, { Component } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body } from 'native-base';
import { Icon } from "react-native-elements";
import {loadTeams} from '../services/equipos.js';
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
   listaEquip: []
}
 
next = () => {
       var indice = this.state.index;
       
       ++indice;
       if(indice < this.state.listaCat.length){
         var categ = this.state.listaCat[indice];
         var lista = this.state.listaCat;
         loadTeams(this,lista,indice);
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
        loadTeams(this,lista,indice);
          this.setState({
           index: indice,
           categoria: categ
         });
      }
     
     }
     
	componentDidMount() {
       var lista = global.listaCategorias;
     this.setState({
        listaCat: lista,
        categoria:lista[0]
      });
 
     loadTeams(this,lista,0);

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


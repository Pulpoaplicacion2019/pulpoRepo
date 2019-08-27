import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import firebase from 'react-native-firebase';
import ItemComponent from '../components/ItemComponent';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ebebeb'
	},
   header: {
		backgroundColor: '#E67E22'
	}
});

export default class Torneos extends Component {

state = {
   urlResult :"",
   lista : [{id:'Prueba_2019',
             anio:2019,
             nombreTorneo:'Prueba_2019'}
             ]
}
listenForItems = (itemsRef) => {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var lista = [];
      snap.forEach((child) => {
       //  this.getPath(child.val().imagenTorneo);
       //  var ruta = this.state.urlResult;
        lista.push({
          nombreTorneo: child.val().nombreTorneo,
          anio: child.val().anio,  
          id: child.key,
          imagenTorneo : child.val().imagenTorneo
        });
      });

      this.setState({
        lista: lista
      });

    });
  }
  
    
	componentDidMount() {
      const itemsRef = firebase.database().ref('torneos');
        this.listenForItems(itemsRef);
	}

	render() {
		return (
			<View style={styles.container}>
               <Container>
                <Header style={styles.header}>
                    <Left />
                    <Body>
                        <Title>Lista Torneos</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                     </Right>
                </Header>
                <Content>
                    <View style={styles.container}>                  
                          <ItemComponent lista={this.state.lista} />
                    </View>
                </Content>
            </Container> 
			</View>
		);
	}
}

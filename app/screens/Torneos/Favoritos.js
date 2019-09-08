import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ItemTorneos from '../../components/ItemTorneos';

export default class Favoritos extends Component {
  state ={
    listaTorneos:[]
  };

  componentDidMount() {
    global.favoritosComponent=this;
    cargarTorneo(true,favoritosComponent,2);
  }
  
  render() {	  
    return (		
          <View style={[styles.container]} >
             <ItemTorneos torneos={this.state.listaTorneos} />
            </View>       
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ebebeb'
	},
});
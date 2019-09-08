import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ItemTorneos from '../../components/ItemTorneos';

export default class PorIniciar extends Component {
  state ={
    porIniciar:[]
  };

  componentDidMount() {
    var porIniciar = [];
    for(var i = 0; i<global.torneos.length; i++){
      if(global.torneos[i].estado =='I'){
        porIniciar.push(global.torneos[i]);
      }
    }
    this.setState({
    	porIniciar: porIniciar
      });
  }
  
  render() {	  
    return (		
          <View style={[styles.container]} >
             <ItemTorneos torneos={this.state.porIniciar} />
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
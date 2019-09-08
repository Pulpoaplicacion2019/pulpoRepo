import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import firebase from 'react-native-firebase';
import ItemTorneos from '../../components/ItemTorneos';
import {cargarTorneos} from '../../services/torneos.js'


export default class Example extends Component {
  constructor() {
    super();
    global.torneos = [];
	console.log("ejecuta Constructor");
		
  }
	state = {
    urlResult :"",
    idLayout: 'torneo',
    listaTorneos:[]
	};

	componentDidMount() {
		console.log("ejecuta DidMount");
	cargarTorneos(this);	
     this.setState({
    	listaTorneos: global.torneos
      });
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
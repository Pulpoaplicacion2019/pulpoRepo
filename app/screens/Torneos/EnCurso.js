import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ItemTorneos from '../../components/ItemTorneos';
import { cargarTorneos } from "../../services/torneos";


export default class EnCurso extends Component {

  state ={
    listaTorneos:[]
  };

  componentDidMount() {
    global.enCursoComponent=this;
    cargarTorneo("C",enCursoComponent,1);
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
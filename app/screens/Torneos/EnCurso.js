import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import ItemTorneos from '../../components/ItemTorneos';


export default class EnCurso extends Component {

  state ={
    enCurso:[]
  };

  componentDidMount() {
    var enCurso = [];
    for(var i = 0; i<global.torneos.length; i++){
      if(global.torneos[i].estado =='C'){
        enCurso.push(global.torneos[i]);
      }
    }
    this.setState({
    	enCurso: enCurso
      });
  }
  
  render() {	  
    return (		
          <View style={[styles.container]} >
             <ItemTorneos torneos={this.state.enCurso} />
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
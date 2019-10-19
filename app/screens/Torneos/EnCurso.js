import React, { Component } from "react";
import {Platform, StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";
import ItemTorneos from '../../components/ItemTorneos';


export default class EnCurso extends Component {

  static navigationOptions = {
    tabBarLabel: "En Curso",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-fastforward", android: "md-fastforward" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    }
  };

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
             <ItemTorneos torneos={this.state.listaTorneos} nav={this.props.navigation} />
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
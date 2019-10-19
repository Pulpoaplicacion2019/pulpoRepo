import React, { Component } from 'react';
import {Platform,StyleSheet, View} from 'react-native';
import ItemTorneos from '../../components/ItemTorneos';
import {cargarTorneos} from '../../services/torneos.js';
import { Icon } from "react-native-elements";

export default class Example extends Component {

  static navigationOptions = {
    headerTitle: "Torneos",
    tabBarLabel: "Torneos",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-basketball", android: "md-basketball" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    }
  };
  constructor() {
    super();
    global.torneos = [];
		
  }
	state = {
    urlResult :"",
    idLayout: 'torneo',
    listaTorneos:[]
	};

	componentDidMount() {
	  cargarTorneos(this);	
     this.setState({
    	listaTorneos: global.torneos
      });
	}
  
  render() {	  
    return (		
          <View style={[styles.container]} >
             <ItemTorneos torneos={this.state.listaTorneos} nav={this.props.navigation}/>
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
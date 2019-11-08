import React, { Component } from 'react';
import {Platform,StyleSheet, View} from 'react-native';
import ItemTorneos from '../../components/ItemTorneos';
import {cargarTorneos} from '../../services/torneos.js';
import { Icon } from "react-native-elements";
import {DrawerActions}from "react-navigation-drawer"
import styles from "../../Styles/styles";

export default class Example extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Torneos",
    headerLeft: Platform.select({
      ios: null,
      android: (
        <Icon
          name="md-menu"
          type="ionicon"
         // containerStyle={styles.icon}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        />
      )
    }),
   /* tabBarLabel: "Mis Torneos",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-basketball", android: "md-basketball" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    }*/
  });

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
  componentWillUnmount() {
    console.log("salir");
  }
 
  
  render() {	  
    return (		
          <View style={[styles.container]} >
             <ItemTorneos torneos={this.state.listaTorneos} nav={this.props.navigation}/>
            </View>       
    );
  }
}

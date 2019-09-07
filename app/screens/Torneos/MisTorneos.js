import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import firebase from 'react-native-firebase';
import ItemTorneos from '../../components/ItemTorneos';

export default class Example extends Component {
  constructor() {
    super();
    global.torneos = [];
  }
	state = {
    urlResult :"",
    idLayout: 'torneo',
    misTorneos:[]
	};

listenForItems = (itemsRef) => {
    itemsRef.on('value', (snap) => {
     // var torneo = [];
      snap.forEach((child) => {
		  	    torneos.push(child.val());        
      });
     this.setState({
    	misTorneos: torneos
      });
        });
  }
  
	componentDidMount() {
      const itemsRef = firebase.database().ref('torneos');	  
      this.listenForItems(itemsRef);
	}
  
  render() {	  
    return (		
          <View style={[styles.container]} >
             <ItemTorneos misTorneos={this.state.misTorneos} />
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
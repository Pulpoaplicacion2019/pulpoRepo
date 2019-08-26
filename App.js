import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView, Button } from 'react-native';

import firebase from 'react-native-firebase';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  onPressButton() {  
       let db = firebase.database();
	   alert("configurado db");
	   let reference = db.ref("/programadores");
	   reference.child("/123").set({nombre:'Juan',apellido:'Perez'});
    }  

  async componentDidMount() {
  }

  render() {
    return (
    <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Press Me"  
                    />  
                </View>  
	 </View>  
    );
  }
}

const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 20  
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }  
})  
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { IconButton, Colors } from 'react-native-paper';
import firebase from 'react-native-firebase';

export default class Example extends Component {
	
	state = {
    urlResult :"",
    idLayout: 'torneo',
		torneo : [{id:'Prueba_2019',
					anio:2019,
					nombreTorneo:'Prueba_2019'}
					]
	};

listenForItems = (itemsRef) => {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var torneo = [];
      snap.forEach((child) => {
		  	    torneo.push({
				    nombreTorneo: child.val().nombreTorneo,
				    anio: child.val().anio,  
				    id: child.key,
				    imagenTorneo : child.val().imagenTorneo
			    });        
      });

      this.setState({
    		torneo: torneo
      });
    });
  }
  
    
	componentDidMount() {
      const itemsRef = firebase.database().ref('torneos');	  
      this.listenForItems(itemsRef);
	}
  
  addFavorite=(idTorneo)=>{
    var favoritos = [];
    for(var i = 0; i<this.state.torneo.length; i++){
      if(this.state.torneo[i].id === idTorneo){
        favoritos.push(this.state.torneo[i]);
      }
    }
    console.log(idTorneo);
    console.log(favoritos);
  }
	

  render() {	  

    return (
      <FlatGrid
        itemDimension={130}
        items={this.state.torneo}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
		
		
          <View style={[styles.itemContainer]} >
		        	<ImageBackground  source = {{uri: item.imagenTorneo}}
								                style = {styles.itemContainer}>
				
					        <IconButton
					          	icon="star"
					          	color="#ffffff"
					          	size={25}
						          align= "left"
						          onPress={() => this.addFavorite(item.id)}
				        	/>
          	      <Text style={styles.itemName}>{item.nombreTorneo}</Text>
					        <Text style={styles.itemCode}>{item.anio}</Text>
		        	</ImageBackground>
			
			  
            </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#e67e22',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#e67e22',
  },
});
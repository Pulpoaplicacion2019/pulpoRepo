import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity,Alert } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { IconButton} from 'react-native-paper';

export default class Example extends Component {
  state ={
    colorFavorito:"#ffffff"
  };

  constructor(){
    super();
    global.colorFavorito="#ffffff";
          }

 addFavorito=(torneo)=>{
     if(torneo.favorito){
       global.itemsRef.child(torneo.id).update({favorito:false});
       this.setState({colorFavorito:"#ffffff"});
    	}else{
        global.itemsRef.child(torneo.id).update({favorito:true});
        this.setState({colorFavorito:"#F79405"});
        }
  }

  imagePressed(idTorneo, nav){
    global.idTorneo = idTorneo
    //Alert.alert(global.idTorneo)
    console.log(idTorneo);
  
      }

  render() {	  

    return (
      <FlatGrid
        itemDimension={130}
        items={this.props.torneos}
        style={styles.gridView}
        renderItem={({ item, index }) => (	
		
          <View style={[styles.itemContainer]} >
            <TouchableOpacity onPress={()=>this.imagePressed(item.id, this.props.nav.navigate("EquiposScreen"))}>

		        	<ImageBackground  source = {{uri: item.imagenTorneo}}
								                style = {styles.itemContainer}>
					        <IconButton
					          	icon="star"
					          	color={global.colorFavorito}
					          	size={25}
						        align= "left"
						        onPress={() => this.addFavorito(item)}
				        	/>
          	                <Text style={styles.itemName}>{item.nombreTorneo}</Text>
					        <Text style={styles.itemCode}>{item.anio}</Text>
							     <Text style={styles.itemCode}>{item.estado}</Text>
		        </ImageBackground>  
            </TouchableOpacity>
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
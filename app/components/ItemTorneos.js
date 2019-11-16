import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity,Alert } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { IconButton} from 'react-native-paper';
import styles from "../Styles/styles";
export default class Example extends Component {
  state ={
    colorFavorito:"#ffffff"
  };

 addFavorito=(torneo)=>{
     if(torneo.favorito){
       global.itemsRef.child(torneo.id).update({favorito:false});
       this.setState({colorFavorito:"#ffffff"});
    	}else{
        global.itemsRef.child(torneo.id).update({favorito:true});
        this.setState({colorFavorito:"#F79405"});
        }
  }

  imagePressed(idTorneo,categorias,nav){
    global.idTorneo = idTorneo;
    global.listaCategorias = Object.getOwnPropertyNames(categorias);
    console.log(idTorneo);
  
  }

  pintarFavorito=(favorito)=>{
    if(favorito){
       return "#F79405"
    }else{
     return "#ffffff"
    }
  }

  render() {	  
    return (
      <FlatGrid
        itemDimension={130}
        items={this.props.torneos}
        style={styles.gridView}
        renderItem={({ item, index }) => (	
		
          <View style={[styles.itemContainer]} >
            <TouchableOpacity onPress={()=>this.imagePressed(item.id,item.categorias, this.props.nav.navigate("EquiposScreen",global.idTorneo))}>
		        	<ImageBackground  source = {{uri: item.imagenTorneo}}
								                style = {styles.image}>
               
					        <IconButton
					          	icon="star"
					          	color={this.pintarFavorito(item.favorito)}
					          	size={25}
						        align= "left"
						        onPress={() => this.addFavorito(item)}
                    style={styles.iconFav}
				        	/>
                 
          	                <Text style={styles.itemName}>{item.nombreTorneo}</Text>
					        <Text style={styles.itemYear}>{item.anio}</Text>
		        </ImageBackground>  
              
            </TouchableOpacity>
            </View>
        )}
      />
    );
  }
}

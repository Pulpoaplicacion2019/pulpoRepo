import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { IconButton} from 'react-native-paper';

export default class Example extends Component {
  render() {	  

    return (
      <FlatGrid
        itemDimension={130}
        items={this.props.misTorneos}
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
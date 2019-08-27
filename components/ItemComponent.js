import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

export default class ItemComponent extends Component {
	static propTypes = {
      
	};
   state = {
     urlResult: "rutaMal"
   }


	render() {
		return (
			<View style={styles.itemsList}>
				{this.props.lista.map((item, index) => {
					return (
						<View key={index}>
							<Text style={styles.itemtext}>{item.nombreTorneo}</Text>
                     <Image source = {{uri: item.imagenTorneo}}
                        style = {{ width: 100, height: 100 }}
                        />
                     <Text style={styles.itemtext}>{item.anio}</Text>   
                       
						</View>
                );
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	itemsList: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	itemtext: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

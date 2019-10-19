import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import firebase from 'react-native-firebase';

export default class ItemEquipos extends Component {
	static propTypes = {
      
	};


	render() {
		return (
			<View style={styles.itemsList}>
				{this.props.lista.map((item, index) => {
					return (
						<View key={index}>
							<Text style={styles.itemtext}>{item.nombreEquipo}</Text>
                     <Image source = {{uri: item.imagenEquipo}}
                        style = {{ width: 100, height: 100 }}
                        />
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

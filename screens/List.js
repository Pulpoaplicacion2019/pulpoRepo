import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#ebebeb'
	}
});

export default class List extends Component {

	componentDidMount() {
	}

	render() {
		return (
			<View style={styles.container}>
					<Text>No items</Text>
			</View>
		);
	}
}

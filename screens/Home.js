import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Home extends Component {
	render() {
		return (
			<View>
				<Text>Home Screen</Text>
				<Button
					title="Agregar un Item"
					onPress={() => this.props.navigation.navigate('AddItem')}
				/>
				<Button
					title="Lista de Items"
					color="green"
					onPress={() => this.props.navigation.navigate('List')}
				/>
            <Button
					title="Torneos"
					color="orange"
					onPress={() => this.props.navigation.navigate('Torneos')}
				/>
			</View>
		);
	}
}

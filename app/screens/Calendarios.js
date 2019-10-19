import React, { Component } from "react";
import { Platform,StyleSheet, View, Text } from "react-native";
import { Icon } from "react-native-elements";

export default class Calendarios extends Component {
  static navigationOptions = {
    tabBarLabel: "Calendario",
    tabBarIcon: ({ tintColor }) => {
      let iconName = Platform.select({ ios: "ios-calendar", android: "md-calendar" });
      return <Icon name={iconName} type="ionicon" color={tintColor} />;
    }
  };

  render() {
    return (
      <View style={styles.viewBody}>
        <Text>Calendarios Screen ...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

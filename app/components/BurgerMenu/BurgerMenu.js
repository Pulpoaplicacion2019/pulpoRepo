import styles from "./styles";
//import { strings as loginStrings } from "../../screens/Torneos/MisTorneos";
import React, { PureComponent } from "react";
import { ScrollView } from "react-native";
import { Button } from "react-native-elements";
import {
  NavigationInjectedProps,
  SafeAreaView,
  withNavigation
} from "react-navigation";
import { DrawerItems}from "react-navigation-drawer";

class BurgerMenu extends PureComponent<NavigationInjectedProps> {
  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: "always", horizontal: "never" }}>
        <ScrollView>
          <DrawerItems {...this.props} />
        </ScrollView>
        <Button
          icon={{ name: "md-log-out", type: "ionicon" }}
          title='Torneos'
          iconContainerStyle={styles.icon}
          buttonStyle={styles.button}
          titleStyle={styles.title}
          onPress={() => this.props.navigation.navigate('TorneosStack',{},this.props.navigation.navigate({routeName:'MisTorneosScreen'}))}
        />
      </SafeAreaView>
    );
  }
}

export default withNavigation(BurgerMenu);

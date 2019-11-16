import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar, Input ,Icon, Button } from 'react-native-elements';
import firebase from 'react-native-firebase';
/*import MultiSelect from 'react-native-multiple-select';*/

import DatePicker from 'react-native-datepicker'
 

export default class PerfilTorneo extends Component {
 
  constructor(props){
    super(props);
    this.state = {date:this.date,
      torneo:{nombreTorneo:'Nombre Torneo',
               anio:'Año',
               fechaInicio:'Fecha Inicio',
               nombreOrganizador:'Nombre Organizador',
               apellidoOrganizador:'Apellido Organizador',
               correoOrganizador:'Mail Organizador',
               telefonoOrganizador:'Teléfono Organizador'
             },
                
    };
   
  };
  
  
listenForItems = (itemsRef) => {
    itemsRef.on('value', (snap) => {
     var torneoFirebase =snap.val();
     this.setState({
    	torneo:torneoFirebase
      });
        });
  }
  
	componentDidMount() {
      const itemsRef = firebase.database().ref('torneos/Delgado_2019');	  
      this.listenForItems(itemsRef);
  }
  
  
 
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
 

  render() {
    
    return (
      <View >
        
        <Avatar
              size="xlarge"
              rounded
              title="CR"
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
          />
         
         <Input placeholder= {this.state.torneo.nombreTorneo}
                leftIcon={ <Icon name='account-group' type="material-community" size={20} color='black' />}
               
         />
         <Input placeholder= 'Año'
                leftIcon={ <Icon name='calendar' type="material-community" size={20} color='black' />}
         />
         <DatePicker
        style={{width: 300,borderWidth:0}}
        date={this.state.torneo.fechaInicio}
        mode="date"
        placeholder= 'Fecha Inicio'
        format="DD/MM/YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
         <Input placeholder={this.state.torneo.nombreOrganizador}
                leftIcon={ <Icon name='account-arrow-right' type="material-community"  size={20} color='black' />}
         />
         <Input placeholder={this.state.torneo.apellidoOrganizador}
                leftIcon={ <Icon name='account-arrow-right' type="material-community"  size={20} color='black' />}
         />
         <Input placeholder={this.state.torneo.correoOrganizador}
                leftIcon={ <Icon name='chevron-down-box' type="material-community" size={20} color='black' />}
         />
         <Input placeholder={this.state.torneo.telefonoOrganizador}
                leftIcon={ <Icon name='phone-in-talk' type="material-community" size={20} color='black' />}
         />
       
        
         <Button title="GUARDAR"/>

      </View>
    );
  }
}



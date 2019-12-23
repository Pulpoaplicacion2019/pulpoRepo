import React, { Component } from "react";
import { StyleSheet, View, Text,TouchableOpacity,Image,FlatList,AsyncStorage,Dimensions,cScrollView } from "react-native";
import { Avatar, Input ,Icon, Button } from 'react-native-elements';
import firebase from 'react-native-firebase';
/*import MultiSelect from 'react-native-multiple-select';*/
import  ImagePicker  from 'react-native-image-picker' ;

import DatePicker from 'react-native-datepicker'
 
const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};
export default class PerfilTorneo extends Component {
 
  constructor(props){
    super(props);
    this.state = {date:this.date,
      torneo:{nombreTorneo:'Nombre Torneo',
      fechaRegistro:'Año',
      estado:'A',
      fechaInicio:'Fecha Inicio',
      nombreOrganizador:'Nombre Organizador',
      apellidoOrganizador:'Apellido Organizador',
      correoOrganizador:'Mail Organizador',
      telefonoOrganizador:'Teléfono Organizador'
             },
             imgSource: ''
                
    };
   
  };
   /**
   * Select image method
   */
  pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert('You cancelled image picker 😟');
      } else if (response.error) {
        alert('And error occured: ', response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imgSource: source,
          imageUri: response.uri
        });
      }
    });
  };

  uploadImage = () => {
    const ext = this.state.imageUri.split('.').pop(); // Extract image extension
    const filename =new Date().getTime(); // Generate unique name
    this.setState({ uploading: true });
    firebase.storage().ref('tutorials/images/'+filename).putFile(this.state.imageUri).on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        snapshot => {
          let state = {};
          state = {
            ...state,
            progress: (snapshot.bytesTransferred / snapshot.totalBytes) * 100 // Calculate progress percentage
          };
          if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
            state = {
              ...state,
              uploading: false,
              imgSource: '',
              imageUri: '',
              progress: 0,
              url:snapshot.downloadURL,
             /* images: allImages*/
            };
           /* AsyncStorage.setItem('images', JSON.stringify(allImages));*/
          }
          this.setState(state);
        },

        error => {
          unsubscribe();
          alert('Sorry, Try again.');
        }
      );
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
      //this.listenForItems(itemsRef);
  }

  
  
  
 
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
 

  render() {
    
    return (
      <View >
        
        <Text style={styles.welcome}>React Native Firebase Image Upload </Text>
        <Text style={styles.instructions}>Hello 👋, Let us upload an Image</Text>
        {/** Select Image button */}
        <TouchableOpacity style={styles.btn} onPress={this.pickImage}>
          <View>
            <Text style={styles.btnTxt}>Pick image</Text>
          </View>
        </TouchableOpacity>
        {/** Display selected image */}
        {this.state.imgSource ? (
          <Image
            source={this.state.imgSource}
            style={styles.image}
          />
        ) : (
          <Text>Select an Image!</Text>
        )}
 
<TouchableOpacity style={styles.btn} onPress={this.uploadImage}>
          <View>
            <Text style={styles.btnTxt}>upload image</Text>
          </View>
        </TouchableOpacity>

        <Avatar
              size="xlarge"
              rounded
              title="CR"
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
          />
          <Input placeholder= {this.state.url}
                leftIcon={ <Icon name='account-group' type="material-community" size={20} color='black' />}
               
         />
          <Input placeholder= {this.state.torneo.nombreTorneo}
                leftIcon={ <Icon name='account-group' type="material-community" size={20} color='black' />}
               
         />
         <Input placeholder={this.state.torneo.nombreOrganizador}
                leftIcon={ <Icon name='account-arrow-right' type="material-community"  size={20} color='black' />}
         />

         <Input placeholder={this.state.torneo.apellidoOrganizador}
                leftIcon={ <Icon name='account-arrow-right' type="material-community"  size={20} color='black' />}
         />
          <Input placeholder={this.state.torneo.telefonoOrganizador}
                leftIcon={ <Icon name='phone-in-talk' type="material-community" size={20} color='black' />}
         />
         <Input placeholder={this.state.torneo.correoOrganizador}
                leftIcon={ <Icon name='chevron-down-box' type="material-community" size={20} color='black' />}
         />
         <Input placeholder= {this.state.torneo.fechaInicio}
                leftIcon={ <Icon name='calendar' type="material-community" size={20} color='black' />}
         />

         <Button title="GUARDAR" />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    marginTop: 20,
    paddingLeft: 5,
    paddingRight: 5
  },

  btn: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    backgroundColor: 'rgb(3, 154, 229)',
    marginTop: 20,
   alignItems: 'center'
  },
  disabledBtn: {
    backgroundColor: 'rgba(3,155,229,0.5)'
  },
  btnTxt: {
    color: '#fff'
  },
  image: {
    marginTop: 20,
    minWidth: 200,
    height: 200,
    resizeMode: 'contain',
    backgroundColor: '#ccc',

  },

  img: {
    flex: 1,
    height: 100,
    margin: 5,
    resizeMode: 'contain',
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#ccc'
  },
  progressBar: {
    backgroundColor: 'rgb(3, 154, 229)',
    height: 3,
    shadowColor: '#000',
  }
});



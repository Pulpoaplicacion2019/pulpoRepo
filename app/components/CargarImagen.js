import { StyleSheet, View, Text,TouchableOpacity,Image,FlatList,AsyncStorage,Dimensions,cScrollView } from "react-native";
import firebase from 'react-native-firebase';
import  ImagePicker  from 'react-native-image-picker' ;
const options = {
    title: 'Select Image',
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };

  export default class CargarImagen extends Component{
       /**
   * Select image method
   */
  pickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        alert('Has cancelado el selector de imágenes😟');
      } else if (response.error) {
        alert('A ocurrido un error: ', response.error);
      } else {
        const source = { uri: response.uri };
        this.setState({
          imgSource: source,
          imageUri: response.uri
        });
      }
    });
  };
  uploadImage = (url) => {
    const ext = this.state.imageUri.split('.').pop(); // Extract image extension
    const filename =new Date().getTime(); // Generate unique name
    this.setState({ uploading: true });
    firebase.storage().ref(url+'/'+filename).putFile(this.state.imageUri).on(
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
            };
          }
          this.setState(state);
        },
        error => {
          unsubscribe();
          alert('Sorry, Try again.');
        }
      );
  };
  componentDidMount() {
    this.props.navigation.state.params.url; 
  
}
  render(){
      return(
        <View >
          
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
          <Text>Seleccione una imagen!</Text>
        )}
 
      <TouchableOpacity style={styles.btn} onPress={this.uploadImage(this.props.url)}>
          <View>
            <Text style={styles.btnTxt}>Cargar Imagen</Text>
          </View>
        </TouchableOpacity>

        </View>
      )
  }

  }
import firebase from 'react-native-firebase';

export const loadTeams =(object,categoria)=>{
	console.log("ingresa a cargar equipos");
   var itemsRef = firebase.database().ref('equipos');
   var rEq =itemsRef.child(global.idTorneo+'/categorias/'+categoria+'/equipos');
	listenForItemsEquipos(rEq,object);

}	
export const saveTeams =(object,lista)=>{
	console.log("ingresa a cargar equipos");
   var itemsRef = firebase.database().ref('equipos');
   var rEq =itemsRef.child(global.idTorneo+'/categorias/'+lista[index]+'/equipos');
	listenForItemsEquipos(rEq,object);

}
 listenForItemsEquipos = (itemsRef,object) => {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var lista = [];
      snap.forEach((child) => {
        lista.push({
          id: child.key,
          nombreEquipo: child._value.nombreEquipo,
          imagenEquipo: child._value.imagenEquipo
        });
      });

      object.setState({
        listaEquip: lista
      });

    });
  }

import firebase from 'react-native-firebase';

export const cargarTorneos =(object)=>{
	console.log("ingresa a cargar");
	const itemsRef = firebase.database().ref('torneos');	  
	listenForItems(itemsRef,object);

}	

listenForItems = (itemsRef,object) => {
    itemsRef.on('value', (snap) => {
      snap.forEach((child) => {
		 if(buscarTorneo(child.val().id) == null){
			global.torneos.push(child.val());        
		 }else{
				reemplazarTorneo(child.val());
		 }
      });
		object.setState({
    	listaTorneos: global.torneos
      });
    });
  }
  
  buscarTorneo = (idTorneo) =>{
	  var i = 0;
	  var torneosTmp = global.torneos;
	  var torneo = null;
	  for(i=0;i<torneosTmp.length;i++){
		  if(torneosTmp[i].id == idTorneo){
			  torneo = torneosTmp[i];
			  break;
		  }
	  }
	  return torneo;
  }

buscarPosicionTorneo = (idTorneo) => {
	  var i = 0, pos=-1;
	  var torneosTmp = global.torneos;
	  for(i=0;i<torneosTmp.length;i++){
		  if(torneosTmp[i].id == idTorneo){
			pos = i;	  
		}
	  }
	  return pos;
	
}
reemplazarTorneo = (torneo) =>{
	var posicion = buscarPosicionTorneo(torneo.id);
	if(posicion!=-1){
		global.torneos[posicion]=torneo;
	}
}
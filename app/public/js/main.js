
// var database = firebase.database();
// var refProfesor = database.ref("profesores")

// function profesorPUSH(nombre, apaterno, amaterno, semestre, materia, carrera, calificacion) {
//   refProfesor.push({
//     nombre:   nombre,
//     apaterno: apaterno,
//     amaterno: amaterno,
//     semestre: semestre,
//     materia:  materia,
//     carrera:  carrera,
//     calificacion: calificacion
//   }).then(function(){
//     console.log("Se subio correctamente ");
//   }).catch(function(error){
//     conlsole.log("Hubo un error" + error);
//   });
// }

// function profesorUPDATE(calificacion, key){
//   database.ref("prof/"+key).update({
//     calificacion: calificacion
//   }).then(
//     function(){
//       console.log("La edicion fue correcta");
//   }).catch(
//     function(error){
//       console.log("Hubo un error"+ error);
//   });
// }

// function profesorGET(){
//   refProfesor.on("child_added", function(data, childKey){
//     console.log(data.val().nombre
//     +" "+ data.val().apaterno
//     +" "+ data.val().amaterno
//     +"\n"+ data.val().carrera
//     +"\n"+data.val().semestre
//     +"\n"+data.val().materia
//     +"\n"+data.val().calificacion
//     +"\n"+childKey
//     )
//   });
// }

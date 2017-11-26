var database = firebase.database();

var refTeacher = database.ref("prof")

function proDb(nombre, apellidoM,apellidoP, semestre, materia, carrera) {
  refTeacher.push(
    {
    nomber: nombre,
    ma: apellidoM,
    pa: apellidoP,
    sem: semestre,
    mat: materia,
    carre: carrera,


  }).then(function(){
    console.log("Se subio correctamente ");
  }).catch(function(error){
    conlsole.log("Hubo un error" + error);
  });

}

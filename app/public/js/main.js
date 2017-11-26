var database = firebase.database();

var refTeacher = database.ref("prof")

function proDb(nombre, apellidoM,apellidoP, semestre, materia, carrera, qualification) {
  refTeacher.push(
    {
    nomber: nombre,
    ma: apellidoM,
    pa: apellidoP,
    sem: semestre,
    mat: materia,
    carre: carrera,
    strats: qualification


  }).then(function(){
    console.log("Se subio correctamente ");
  }).catch(function(error){
    conlsole.log("Hubo un error" + error);
  });

}

function editProf(qualification){
database.ref("prof/-KzqvXPlbCiQmz-2dwB8").update({stars: qualification}
).then(function(){console.log("La edicion fue correcta");
}).catch(function(error){
  console.log("Hubo un error"+ error);
});

}

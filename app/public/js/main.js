var database = firebase.database();

var refTeacher = database.ref("prof")

function proDb(nombre, apellidoM,apellidoP, semestre, materia, carrera, qualification) {
  refTeacher.push(
    {
    name: nombre,
    ma: apellidoM,
    pa: apellidoP,
    sem: semestre,
    mat: materia,
    carre: carrera,
    stars: qualification


  }).then(function(){
    console.log("Se subio correctamente ");
  }).catch(function(error){
    conlsole.log("Hubo un error" + error);
  });

}

function editProf(qualification){
database.ref("prof/-Kzr08AYRQALfUVxp8Uj").update({stars: qualification}
).then(function(){console.log("La edicion fue correcta");
}).catch(function(error){
  console.log("Hubo un error"+ error);
});

}

function showProf(){
refTeacher.on("child_added", function(data, childKey){
  console.log(data.val().nomber
  +" "+ data.val().ma
  +" "+ data.val().pa
  +"\n"+ data.val().carre
  +"\n"+data.val().sem
  +"\n"+data.val().mat
  +"\n"+data.val().stars
  +"\n"+childKey
  )

})

}

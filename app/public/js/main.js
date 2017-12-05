var database = firebase.database();

//A NUMA ME HACKIARON XD

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

function shP() {
  refTeacher.on("value", function (datas) {
    console.log(datas.val());

  })

}


function searchName(name) {
  refTeacher.orderByChild("nomber").equalTo(name).on("child_added", function (data) {
    console.log(data.val().nomber+ "  "+ data.key);
  })
}

function searchSemester(semester) {
  refTeacher.orderByChild("sem").equalTo(semester).on("child_added", function (data) {
    console.log(data.val().sem+ " "+ data.key);
  })

}

function searchMatter(matter) {
  refTeacher.orderByChild("mat").equalTo(matter).on("child_added", function(data){
    console.log(data.val().mat+ " "+ data.key);

  })
}


 function searchCareer(career) {
   refTeacher.orderByChild("carre").equalTo(career).on("child_added", function (data) {
     console.log(data.val().carre+ " "+ data.key);
   })
 }

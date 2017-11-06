var database = firebase.database();

var refUser= database.ref("user");
refUser.push({
  nombre: "Carlos",
  carrera: "ICO",
  semestre: "Quinto"

})

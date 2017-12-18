var database = firebase.database();
var refCurso = database.ref('cursos');

function setCurso(_titulo, _contenido) {
	var nuevoCurso = refCurso.push();
	console.log(nuevoCurso,'nuevoCurso');
	nuevoCurso.set({
		titulo: _titulo,
		contenido: _contenido
	})
}

var pushCurso = (_number, _contenido) => {
	var newPush = refCurso.push({
		number: _number,
		contenido: _contenido
	});

	var newKey = newPush.getKey();
	console.log(newKey,'newKey');
}

// refCurso.once('value', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

var searchNumber = (_n) => {
	database.ref('cursos').orderByChild('number').equalTo(_n).on('child_added', (data) => {
		console.log(data.key, data.val(),' ------child_added');
	});
}

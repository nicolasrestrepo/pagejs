
// ¿Qué es un callback?

//El parametro de la funcion `click` no es un valor o una variable, sino una function.
//cuando una función se pasa como parametro a otrta función, se llama `callback`

$('#buton_1').click(funcion(){
	alert('se clickeó el botón')
})


//otro ejemplo tipico: procesa  un array

var zfighters = {'Goku', 'Vegeta', 'Gohan', 'Piccolo'};

zfighters.forEach(function (name, index){

	console.log(index + 1 + '.' + name)
})

//salida
//1. Goku
//2. Vegeta
//3. Gohan
//4. Piccolo




// Callbacks como funciones nombradas

//Variable global
var allUser = [];

//funcion de logueo genérica
function logStuff (data){ //defino la funcion logStuff

	if('string' == typeof data) return cosole.log(data) //si le paso un string lo loguea

	if('object' typeof data){
		for (var key in data){
			console.log(key + ':' + data[key]);
		}
	}	
}

function getInput (input, callback){ //usamos la funcion de arriba como callback
	allUsers.push(input);

	callback(input);
}

//Llamamos a `getInput`con `LogStuff`como parámetro.
//Así, `LogStuff`sera ejecutada ('called back') dentro de la funcion `getInput`

getInput ( { user: 'Nicolas', speciality: 'Frontend' }, logStuff )

//salida:
//user: Nicolas
//speciality: JavaScript





//Buena practica: asegurarse que un callback es una función
//Una funcion que recibe dos parametros; el segundo es un callback

function getInput (input, callback){

	allUsers.push(input);

	//llamamos callback únicamente si es una función
	('function' == typeof callback) && callback(input);
}

//evitar la piramide de la muerte 

//callback hell!

//Pseudo codigo que borra una coleccion de base de datos e inserta un único elemento nuevo 

var db = new Db('test_database', new Server(/*Configuracion*/))
db.open(function (err,db) {
	db.dropDatabase(function (err, done){
		db.createCollection('test_custom_key', function (err, collection){
			collection.insert({'a': 1}, function (err,docs){
				collection.find({'id': new ObjectID('aaaaaaaaa')}, function(err, cursor){
					cursor.toArray(function (err, items){
						(err == null) && test.asserEquals(1, items.length)
						//cerramos la base de datos	
						db.close()
					})
				})
			})
		})
	})
})

// se le dice piramide de la muerte porque se exede el uso de callback (los llamados de funciones)


// Soluciones 
// en vez de usar funciones anonimas usar funciones nombradas
//Modularidad: separar el codigo en módulos/componentes con responsabilidades acotadas y definidas

var assertResetCollection = require('assertResetCollection.js')

var db = new Db('test_database', new Server(/*Configuracion*/))
assertResetCollection(db, function(err, items){
	(err == null) && test.assertEquals(1, items.length)

	db.closet()
})




//los callbacks se usan para funciones asincronas que es que queiro que se ejecute esto despues de que paso algo



















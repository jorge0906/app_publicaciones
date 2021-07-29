//Requerimos (accedemos) del paquete express:
const express = require('express')

const mongoose = require('mongoose')

const Post = require('./Post')
require('./database')


// Creamos una instancia del paquete express para poder utilizarlo:
const app = express()
const port = 3000

//Lanzamos la aplicación a través del puerto 3000:
app.listen(process.env.PORT || port, () =>

	console.log('Servidor conectado al puerto ' + port)
)

//La aplicacioón muestra el archivo index.html ubicado en la carpeta proyecto Verano

app.use(express.static('public'))

//Configuramos el tamaño maximo de llos datos que poodemos reciibir

app.use(express.json({limit: '2mb'}))

//obtenemos los datos del formulario de index.html:
//req (request): parámetro desde donde recibimoos los datos
//res (response): parámetro desde donde podemos generar una respuesta al que nos ha enviado los datos

app.post('/', async function(req, res){

	console.log('Respuesta recibida!!')
	// obtenemos los datos en texto (json) y los volvemos a convertir a javascript (objeto):

	console.log(req.body)
	const {usuario, descripcion, base64, date} = req.body 

//Creamos una instancia del esquema Post:

const newPost = new Post({usuario, descripcion, base64, date})

await newPost.save()

	//enviamos una respuesta al cliente
	res.json({

	status: 'success',
	usuario: usuario,	
	desc: descripcion,
	imag: base64,
	fecha: date,

});



});

app.get('/publicaciones' , async function async(req res){

	const publicaciones = await Post.find({}).lean().sort({date: 'desc'})
	res.son(publicaciones)
})
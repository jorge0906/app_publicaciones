const mongoose = require('mongoose')

//Utilizamos el esquema de datos de mongoose:

const {Schema} = mongoose

//Definimos las propiedades de las publicaciones:

const PostSchema = new Schema({
	usuario: {type: String, required: true},
	descripcion: {type: String, required: true},
	base64: {type: String, required: true},
	date: {type: Date, default: Date.now}


});

//Module.exports nos ayuda a poder exportar la informacion de este modulo

module.exports = mongoose.model('Post', PostSchema)


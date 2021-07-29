const mongoose = require('mongoose')

const mongodb_url = 'mongodb+srv://Jorge:JEoU0bCnP7xhJ6AF@clusterapppublicaciones.jfyup.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(mongodb_url, {

	useCreateIndex: true,
	useNewUrlParser: true,
	useFindAndModify: false
	
}).then(db => console.log('BDD Conectada con éxito')).catch(err => console.error(err))


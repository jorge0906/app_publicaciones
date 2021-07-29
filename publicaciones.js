async function getData(){

	const response = await fetch('/publicaciones')
	const datos = await response.json()
	console.log(datos)

	for(let i = 0; i < datos.length; i++){

//Contenedor principal para alojar el post:
		const root = document.createElement('div')
		root.id = 'root'
//Etiquetas para los diferentes datos
		const usuario = document.createElement('div')
		const description = document.createElement('div')
		const fecha = document.createElement('div')
		const imagen = document.createElement('img')
		const linea = document.createElement('hr')


//Mostramos en las etiquetas creadas los datos que queremos mostrar

		usuario.innerHTML = 'Usuario' + datos[i].usuario
		descripcion.innerHTML = 'Descripción' + datos[i].description
		const fechaOK = new Date(datos[i].date).toLocaleString()
		fecha.innerHTML = 'Fecha publicación:' + fechaOK
		imagen.src = datos[i].base64 
		imagen.style = 'width: 500px'

//Funcion append añadimos los elementos creados al contenedor principal (root en el orden que queremos)
		root.append(imagen, usuario, descripcion, fecha, linea)
		doocument.getElementById('publicaciones').append(root)

	}
}


getData()
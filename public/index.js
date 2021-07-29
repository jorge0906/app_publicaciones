let publicar = document.getElementById('publicar')

let base64

//cargamos la imagen y generamos su previsualizacion:

function leerArchivo(input){

	//Si existe un archivo:

	if(input.files){

		const reader = new FileReader

		reader.onload = function(e){
			const filePreview = document.createElement('img')

			filePreview.id = 'file-preview'
			//Al atributo src le indicamos la imagen que debe cargar:
			filePreview.src = e.target.result

			filePreview.width = 400
			base64 = e.target.result
			console.log(base64)
			const previewZone = document.getElementById('preview')
			//Inserto la etiqueta img con toda su informacion dentro del div 'preview'
			previewZone.appendChild(filePreview)

		}
		reader.readAsDataURL(input.files[0])
	}
}

let fileUpload = document.getElementById('file')

//en el momento que cambie el imput para subir archivo ejecutamos el evento que cargará a imagen en nuestro formulario
fileUpload.onchange = function(e){
	leerArchivo(e.srcElement)
}

// enviamos los datos al servidor -------------------------------------------------------

pubicar.onclick = async() =>{

	let usuario = document.getElementById('usuario').value
	let descripcion = document.getElementById('descripcion').value

	//creamos un objeto con los datos a enviar:

	const data = {usuario, descripcion, base64}

	//preparamos el objeto data con toda la información para el envio al servidor (archivo index.js)
	const datos = {

		method:'POST',
		headers:{
			'Content-type': 'application/json'

		},

		//Datos que enviamos:

		body: JSON.stringify(data)
	};

//Enviamos los datos:
const response = await fetch('/', datos)

//recibimos una respuesta del servidor
const json = await response.json()
console.log(json)

document.getElementById('usuario').value = '';
document.getElementById('descripcion').value = '';
document.getElementById('file').value = '';

//accedemos a la imagen y a la zona donde la previsualizamos y eliminamos la imagen

const imagen = document.getElementById('file-preview')
const previewZone = document.getElementById('preview')
previewZone.removeChild(imagen)


}


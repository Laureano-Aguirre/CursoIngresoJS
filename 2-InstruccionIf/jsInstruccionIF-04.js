function mostrar()
{
	
	//declaramos las variables
	let edad;


	//definimos las variables
	edad=document.getElementById('txtIdEdad').value;

	//pasamos de texto a numero
	edad=parseInt(edad);

	//definimos la variable if
	if (edad>=13 && edad<=17) {
		alert("Es adolescente");

		
		
	}



}//FIN DE LA FUNCIÓN
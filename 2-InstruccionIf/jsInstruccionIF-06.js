function mostrar()
{
	//declaramos las variables
	let edad;


	//definimos las variables
	edad=document.getElementById('txtIdEdad').value;

	//pasamos de texto a numero
	edad=parseInt(edad);

	//definimos la variable if
	if (edad<13) {
		alert("Es niño");
	
	}
	else{

		if (edad>=18) {
			alert("Es mayor");
			
		}
		else 
		alert("Es adolescente");


	}







}//FIN DE LA FUNCIÓN
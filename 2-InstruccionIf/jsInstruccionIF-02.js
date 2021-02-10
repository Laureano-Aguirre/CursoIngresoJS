function mostrar()
{

	//declaramos las variables
	let edad;


	//definimos las variables
	edad=document.getElementById('txtIdEdad').value;

	//paso de texto a numero
	edad=parseInt(edad);

	//declaramos el if 
	if (edad>=18) {
		alert("es mayor de edad");
		
	}

	

}//FIN DE LA FUNCIÓN
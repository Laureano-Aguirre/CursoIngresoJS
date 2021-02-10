function mostrar()
{
	//declaramos las variables
	let edad;


	//definimos las variables
	edad=document.getElementById('txtIdEdad').value;

	//pasamos de texto a numero
	edad=parseInt(edad);

	//definimos el if
	if (edad<13 || edad>17) {
		
		alert("La persona no es adolescente");
	}





}//FIN DE LA FUNCIÓN
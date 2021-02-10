function mostrar()
{
	
	//declaramos las variables
	let edad;
	let estado;



	//definimos las variables
	edad=document.getElementById('txtIdEdad').value;
	estado=document.getElementById('estadoCivil').value;
	
	//pasamos de texto a numero
	edad=parseInt(edad);

	//declaramos las variables if
	if (edad<18 && estado!="Soltero") {
		
		alert("Es muy pequeño para no estar soltero");
	}



	


}//FIN DE LA FUNCIÓN
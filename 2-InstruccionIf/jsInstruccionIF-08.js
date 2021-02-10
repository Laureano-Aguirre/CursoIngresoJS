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

	//declaramos y definimos el if
	if (edad<18 && estado!="Soltero") {
		
		
	}
	else {

		if (edad>=18 && estado=="Soltero") {
			
			alert("Es soltero y no es menor");
		}
	}
	


}//FIN DE LA FUNCIÓN
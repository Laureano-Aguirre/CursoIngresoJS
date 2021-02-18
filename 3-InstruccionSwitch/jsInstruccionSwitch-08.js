function mostrar()
{
	//declaramos las variables
	let destino;
	let mensaje;


	//definimos las variables
	destino=document.getElementById('txtIdDestino').value;

	//declaramos y definimos la variable switch
	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			mensaje="En el destino hace frio";	
			break;
	
		default:
			mensaje="En el destino hace calor";
			break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
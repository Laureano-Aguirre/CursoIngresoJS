function mostrar()
{
	//declaramos las variables
	let destino;
	

	//definimos las variables
	destino=document.getElementById('txtIdDestino').value;

	//definimos la variable switch
	switch (destino) {
		case "Bariloche":
			alert("Oeste");
			break;

		case "Cataratas":
			alert("Norte");
			break;

		case "Ushuaia":
			alert("Sur");
			break;

		default:
			alert("Este");
			break;
	}
	

}//FIN DE LA FUNCIÓN
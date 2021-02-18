//aguirre laureano
//ejercicio 4
function mostrar()
{
	//declaramos las variables
	let mes;


	//definimos las variables
	mes=document.getElementById('txtIdMes').value;

	//declaramos y definimos el switch
	switch (mes) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("Este mes tiene 31 dias.");
			break;
		case "Febrero":
		alert("Este mes tiene 28 dias.");
			break;
		default:
			alert("Este mes tiene 30 dias.");
			break;
	}
	
	



}//FIN DE LA FUNCIÓN
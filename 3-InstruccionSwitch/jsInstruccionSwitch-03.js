//aguirre laureano
//ejercicio 3
function mostrar()
{
	//declaramos las variables
	let mes;


	//definimos las variables
	mes=document.getElementById('txtIdMes').value;

	//declaramos el switch
	switch (mes) {
		case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Este mes tiene 30 dias o más.");
			break;
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
	}

}//FIN DE LA FUNCIÓN
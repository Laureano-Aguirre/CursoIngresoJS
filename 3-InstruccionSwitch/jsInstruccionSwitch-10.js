/*aguirre laureano
ejercicio 10 switch */
function mostrar()
{
	//declaramos las variables
	let estacion;
	let destino;
	let mensaje;

	//definimos las variables
	estacion=document.getElementById('txtIdEstacion').value;
	destino=document.getElementById('txtIdDestino').value;

	switch (estacion) {
		case "Invierno":
		if (destino=="Bariloche") 
		{
			mensaje="Se viaja";
		}
			else 
			{
			mensaje="No se viaja";
			}
			break;
		
		case "Verano":
		if (destino=="Cordoba" || destino=="Bariloche") 
		{
			mensaje="No se viaja";
		}
			else 
			{
			mensaje="Se viaja";
			}
			break;

		case "Otoño":
			mensaje="Se viaja";
			break;

		default:
		if (destino=="Bariloche") 
		{
			mensaje="No se viaja";	
		}
			else 
			{
				mensaje="Se viaja";
			}
		break;
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN
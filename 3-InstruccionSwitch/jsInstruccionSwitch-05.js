//aguirre laureano
//ejercicio 5

function mostrar()
{
	//declaramos las variables

	let hora;


	//definimos las variables
	hora=document.getElementById('txtIdHora').value;
	
	//pasamos de texto a numero
	hora=parseInt(hora);

	//declaramos el switch
	switch (hora) 
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
		break;
		
	}
	
	



}//FIN DE LA FUNCIÓN
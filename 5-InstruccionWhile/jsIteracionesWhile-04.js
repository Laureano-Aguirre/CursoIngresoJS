/*
aguirre laureano while ej 4
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	

//definimos la variable
numeroIngresado= prompt("Ingrese un numero entre el 0 y 9");

//pasamos de texto a numero
numeroIngresado=parseInt(numeroIngresado);

//declaramos y definimos el while
while (!(numeroIngresado>0 && numeroIngresado<10)) {
	
	numeroIngresado=prompt("Error, ingrese un numero entre el 0 y 9");
}
document.getElementById('txtIdNumero').value=numeroIngresado;
	
}//FIN DE LA FUNCIÓN
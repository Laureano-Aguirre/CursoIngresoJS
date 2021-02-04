/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	//declaramos variables
	let sueldo;
	let valorPorElQueMultiplicamos;
	let resultadoUno;
	let resultadoFinal;

	//definimos variables
	sueldo=document.getElementById('txtIdImporte').value;
	valorPorElQueMultiplicamos= 0.25
	
	//pasamos de texto a numero
	sueldo=parseInt(sueldo);

	//hacemos que mediante el parseFloat, acepte numeros con coma
	valorPorElQueMultiplicamos=parseFloat(valorPorElQueMultiplicamos);

	//definimos la variable resultadoUno
	resultadoUno=sueldo*valorPorElQueMultiplicamos;

	//definimos la variable resultadoFinal
	resultadoFinal=sueldo-resultadoUno;

	document.getElementById('txtIdResultado').value=resultadoFinal;
	 






}

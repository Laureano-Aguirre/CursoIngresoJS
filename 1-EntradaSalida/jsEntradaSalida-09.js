/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//declaramos las variables
	let sueldo;
	let valorPorElQueMultiplicamos;
	let resultadoUno;
	let resultadoFinal;

	//definimos las variables
	sueldo=document.getElementById('txtIdSueldo').value;
	valorPorElQueMultiplicamos=0.10;

	//transformamos el texto a numeros
	sueldo=parseInt(sueldo);
	valorPorElQueMultiplicamos=parseFloat(valorPorElQueMultiplicamos);
	
	//definimos la variable resultadoUno
	resultadoUno=sueldo*valorPorElQueMultiplicamos;

	//definimos la variable resultadoFinal
	resultadoFinal=sueldo+resultadoUno;

	document.getElementById('txtIdResultado').value=resultadoFinal;





}

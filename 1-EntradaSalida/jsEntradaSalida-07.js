/*
aguirre laureano
ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//declaramos  las variables
	let numeroUno;
	let numeroDos;
	let resultado;
	let respuesta;

	//definimos las variables
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	//convertimos mediante parseInt el texto a numero
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//declaramos la variable resultado
	resultado=numeroUno+numeroDos;
	
	//declaramos la variable respuesta
	respuesta="la suma es " +resultado;

	alert(respuesta);



}

function restar()
{
	
	//declaramos variables
	let numeroUno;
	let numeroDos;
	let resultado;
	let respuesta;

	//definimos las variables
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	//transformamos el texto a numero
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//definimos la variable resultado
	resultado=numeroUno-numeroDos;

	//declaramos la variable respuesta
	respuesta="la resta da " +resultado;

	alert(respuesta);




}

function multiplicar()
{ 
	
	//declaramos las variables
	let numeroUno;
	let numeroDos;


	//definimos las variables
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	//transformamos el texto a numero
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//declaramos la variable resultado
	resultado=numeroUno*numeroDos;

	//declaramos la variable respuesta
	respuesta="la multiplicacion da " +resultado;

	alert(respuesta);



}

function dividir()
{
	
	//declaramos las variables
	let numeroUno;
	let numeroDos;
	let resultado;
	let respuesta;

	//definimos las variables
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	//transformamos el texto a numeros
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//declaramos la variable resultado
	resultado=numeroUno/numeroDos;

	//declaramos la variable respuesta
	respuesta="la division da " +resultado;

	alert(respuesta);


}


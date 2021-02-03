/*
aguirre laureano
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaro las variables
	let numeroUno;
	let numeroDos;
	let resultado;
	let respuesta;

	//defino las variables
	numeroUno=document.getElementById('txtIdNumeroUno').value;

	numeroDos=document.getElementById('txtIdNumeroDos').value;

	//con parseInt, transformo el texto (al usar 'txtid' nos lanzará un texto, por más que veamos un numero) a un numero
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	//luego de transformar a numero, recien ahi se define la variable resultado, ya que si lo realizamos antes, lo concatena
	resultado=numeroUno+numeroDos;
	respuesta="la suma es " +resultado;

	alert(respuesta);


}

//si nosotros colocamos un caracter que no sea un numero, en una caja de texto donde interviene el parseInt, saltara el error NaN (not a number)

//si nos olvidamos de colocar el value, tambien arrojara NaN






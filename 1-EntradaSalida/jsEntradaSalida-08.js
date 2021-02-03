/*
aguirre laureano
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//declaramos variables
	let dividendo;
	let divisor;
	let resto;

	//definimos las variables
	dividendo=document.getElementById('txtIdNumeroDividendo').value;
	divisor=document.getElementById('txtIdNumeroDivisor').value;

	//transformamos el texto a numeros
	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	//una vez transformado a numeros, se define la variable resto
	resto=dividendo%divisor;

	alert("El resto es " +resto)


}



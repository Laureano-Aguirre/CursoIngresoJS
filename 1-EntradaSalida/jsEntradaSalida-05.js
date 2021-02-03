/*
aguirre laureano
ejercicio 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// establezco las variables
let nombre;
let edad;	

	//defino al nombre, el cual va a ser el que se coloque en el cuadro de texto del html 
nombre=document.getElementById("txtIdNombre").value;
	//defino la edad, la cual va a ser la que se coloque en el cuadro de texto del html
edad=document.getElementById("txtIdEdad").value;
	//hilbano la oración, concatenando con el signo mas el nombre y la edad a la oración
alert(""+ apellido + "Usted se llama " + nombre + " y tiene " + edad + " años");


}

/* 
aguirre laureano
ejercicio 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en la memoria para almacenar el nombre
	let nombre;
	//hago que el valor del nombre, sea lo que se coloque en la caja de texto del prompt
	nombre = prompt("Ingrese su nombre");
	//tomo el nombre puesto en la caja del prompt para colocarlo en la caja de texto embebida en el html
	document.getElementById('txtIdNombre').value=nombre;
	


}


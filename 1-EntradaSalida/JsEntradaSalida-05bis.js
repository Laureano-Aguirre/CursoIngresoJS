/*
aguirre laureano
bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"

*/



function mostrar()
{

	//declaramos variables
	let apellido;
	let nombre;
	let edad;

	apellido=prompt("Coloque su apellido");
    //definimos la variante nombre
    nombre=document.getElementById("txtIdNombre").value;
    //definimos la variante edad
    edad=document.getElementById("txtIdEdad").value;

    alert( apellido + ", Usted se llama " + nombre + " y tiene " + edad + " años");
}


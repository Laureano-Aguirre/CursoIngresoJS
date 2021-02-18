/*
aguirre laureano
while ej 5 
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	//declaramos las variables
	let sexo;


	do 
	{
		sexo=prompt("Ingrese la inicial de su sexo");
	} while (!(sexo=="f" || sexo=="m"));
	document.getElementById('txtIdSexo').value=sexo;
	
	
}//FIN DE LA FUNCIÓN
function mostrar()
{
	//declaramos las variables
	let destino;
	let estacion;
	let descuento;
	let aumento;
	let precioFinal;
	const ESTADIA_BASE=15000;


	//definimos las variables
	destino=document.getElementById("txtIdDestino").value;
	estacion=document.getElementById('txtIdEstacion').value;
	descuento=0;
	aumento=0;

	//declaramos y definimos el switch
	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche")
			{
				aumento=20;
			}
			else if (destino == "Mar del plata")
			{
				descuento=20;
			}
			else
			{
				descuento=10;
			}
			break;
		case "Verano":
			if (destino == "Bariloche")
			{
				descuento=20;
			}
			else if (destino == "Mar del plata")
			{
					aumento=20;
			}
			else
			{
					aumento=10;
			}
			break;
		case "Otoño":
		case "Primavera":
			if (destino == "Cordoba") 
			{
				precioFinal=ESTADIA_BASE;
			}
			else 
			{
				aumento=10;
			}
			break;
		
	}
	
	//averiguamos si se aumento o se desconto dinero
	if (aumento!=0) 
	{
		precioFinal=(ESTADIA_BASE+(ESTADIA_BASE*aumento/100));	
	}
	else if (descuento!=0)
		{
		precioFinal=(ESTADIA_BASE-(ESTADIA_BASE*descuento/100));	
		}
	
	alert("El precio final es "+precioFinal+" pesos.");
}//FIN DE LA FUNCIÓN
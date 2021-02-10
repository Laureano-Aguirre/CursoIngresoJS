function mostrar()
{
	let numero;

	numero=(Math.round(Math.random() *9+1));
	alert(numero);

	if (numero==9 || numero==10) {
		alert("EXCELENTE");
		
	}
	else {
		if (numero>4 && numero<9) {
			alert("APROBO");
			
		}
		else {
			if (numero<=4) {
				alert("Vamos, la proxima se puede");
	
			}
		}
	}

}//FIN DE LA FUNCIÓN
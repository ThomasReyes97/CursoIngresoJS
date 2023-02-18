function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	let mensaje

	switch(destinoIngresado){
		case "Cataratas":
		case "Mar del plata":
			mensaje = "En este lugar hace calor"
			break;

		case "Ushuaia":
		case "Bariloche":
			mensaje = "En este lugar hace frio"
			break;
	}

	alert(mensaje);
}//FIN DE LA FUNCIÓN
function mostrar()
{
	let destinoIngresado =txtIdDestino.value;
	let mensaje

	switch(destinoIngresado){
		case "Cataratas":
			mensaje = "Cataratas está al norte del pais"
			break;

		case "Ushuaia":
			mensaje = "Ushuaia está al sur del pais"
			break;

		case "Mar del plata":
			mensaje = "Mar del plata está al este del pais"
			break;

		case "Bariloche":
			mensaje = "Bariloche está al oeste del pais"
			break;
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN
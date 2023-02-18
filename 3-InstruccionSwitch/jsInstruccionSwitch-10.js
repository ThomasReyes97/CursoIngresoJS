function mostrar()
{
	let estacionIngresada =txtIdEstacion.value;
	let destinoIngresado =txtIdDestino.value;
	let mensaje;

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					mensaje = " se viaja"
					break;
				default:
					mensaje = " no se viaja"
					break
			} 
			break;

		case "Verano":
			switch(destinoIngresado){
				case "Cataratas":
				case "Mar del plata":
					mensaje = " se viaja"
					break;
				default:
					mensaje = " no se viaja"
					break;
			}
			break;

		case "Otoño":
			switch(destinoIngresado){
				default:
					mensaje = " se viaja"
					break;
			}
			break;

		case "Primavera":
			switch(destinoIngresado){
				case "Bariloche":
					mensaje = " no se viaja"
					break;
				default:
					mensaje = " se viaja"
				
			}
			break;
	}	
	

	alert("En " + estacionIngresada + mensaje + " a el destino seleccionado");
}//FIN DE LA FUNCIÓN
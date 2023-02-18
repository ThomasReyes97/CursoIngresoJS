function mostrar()
{
	let estacionIngresada =txtIdEstacion.value;
	let destinoIngresado =txtIdDestino.value;
	let tarifa;
	let precioFinal;

	tarifa = 15000;

	switch(estacionIngresada){
		case "Invierno":
			switch(destinoIngresado){
				case "Bariloche":
					precioFinal = tarifa + (0.20 * tarifa)
					break;
				case "Mar del plata":
					precioFinal = tarifa - (0.20 * tarifa)
					break;
				default: //cordoba y cataratas
					precioFinal = tarifa - (0.10 * tarifa)
					break;
			} 
			break;

		case "Verano":
			switch(destinoIngresado){
				case "Bariloche":
					precioFinal = tarifa - (0.20 * tarifa)
					break;
				case "Mar del plata":
					precioFinal = tarifa + (0.20 * tarifa)
					break;
				default:
					precioFinal = tarifa + (0.10 * tarifa)
					break;
			}
			break;

		default: //otoño y primavera
			switch(destinoIngresado){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					precioFinal = tarifa + (0.10 * tarifa)
					break;
				
				default: //cordoba
					precioFinal = 15000
					break;
			}
			break;
	}	
	

	alert("Su estadia en " + destinoIngresado + " saldria " + precioFinal);

}//FIN DE LA FUNCIÓN
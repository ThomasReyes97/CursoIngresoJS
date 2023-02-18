function mostrar()
{
	//tomo el mes
	let mesDelAño =txtIdMes.value;
	let dias

	
	switch(mesDelAño){

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			dias = "Este mes tiene 31 dias"
			break;

		case "Febrero":
			dias = "Este mes tiene 28 dias"
			break;

		default: // Abril Junio Septiembre Noviembre
			dias = "Este mes tiene 30 dias"
			break;

	}

	alert(dias)
}//FIN DE LA FUNCIÓN
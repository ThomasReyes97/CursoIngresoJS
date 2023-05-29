/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let estacion
	
	switch(mesDelAño){

		case "Julio":
		case "Agosto":
			estacion = "Abrigate que hace frio."
			break;

		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			estacion = "Falta para el invierno."
			break;

		default: // septiembre octubre noviembre diciembre
			estacion = "Ya pasamos el frio, ahora calor!!!."
			break;


	}

	alert(estacion)


}//FIN DE LA FUNCIÓN

/* function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	let estacion
	
	switch(mesDelAño){

		case "Julio":
		case "Agosto":
			estacion = "Abrigate que hace frio."
			break;

		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			estacion = "Falta para el invierno."
			break;

		default: // septiembre octubre noviembre diciembre
			estacion = "Ya pasamos el frio, ahora calor!!!."
			break;


	}

	alert(estacion)
 
}//FIN DE LA FUNCIÓN
*/
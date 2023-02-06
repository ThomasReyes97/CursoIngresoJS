function mostrar()
{
	let edadIngresada;
		
	edadIngresada = txtIdEdad.value;
		
	if(edadIngresada > 17)
	{

		alert("Usted es mayor de edad")

	}

	if(edadIngresada >= 13 && edadIngresada <= 17)
	{

		alert("Usted es un adolecente")

	}

	if(edadIngresada < 13)
	{

		alert("usted es un niño")

	}
}//FIN DE LA FUNCIÓN
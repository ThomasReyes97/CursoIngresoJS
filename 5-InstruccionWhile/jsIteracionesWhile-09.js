/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	
	
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);

	numeroMaximo = numeroIngresado;
	numeroMinimo = numeroIngresado;

	
	while(respuesta != "si")
	{

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado < numeroMinimo){
			numeroMinimo = numeroIngresado;
		}
		if(numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado
		}
		
		
		respuesta = prompt("¿desea ver la respuesta? (si/no)")
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN
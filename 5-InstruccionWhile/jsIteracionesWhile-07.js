/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let respuesta;
	contador=1;
	acumulador=0;

	numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado)
		acumulador = acumulador + numeroIngresado


	while(respuesta != "si"){
		
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado)

		acumulador = acumulador + numeroIngresado

		contador = contador + 1

		respuesta = prompt("¿desea ver la suma y el promedio? (si/no)")
	}


	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN
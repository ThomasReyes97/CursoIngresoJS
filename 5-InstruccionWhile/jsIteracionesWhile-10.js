/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos
	var sumaNegativos;
	var contadorpositivos
	var contadornegativos

	while(isNaN == numeroIngresado){
		numeroIngresado = prompt("Ingrese un numero")
		numeroIngresado = parseInt(numeroIngresado)
	}
	
	sumaNegativos = 0
	sumaPositivos = 0

	contadornegativos = 0
	contadorpositivos = 0

	respuesta="no";

	do{
		
		while(isNaN == numeroIngresado){
			numeroIngresado = prompt("Ingrese un numero")
			numeroIngresado = parseInt(numeroIngresado)
		}
		

		
		

	}while(respuesta != "si")

	
	
	document.write("la suma de negativos es :"+sumaNegativos);
}//FIN DE LA FUNCIÓN
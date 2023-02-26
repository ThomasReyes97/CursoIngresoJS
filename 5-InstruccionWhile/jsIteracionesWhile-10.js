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
	var sumaPositivos;
	var sumaNegativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorNumeroPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaNegativosPositivos
	
	sumaNegativos = 0;
	sumaPositivos = 0;

	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorNumeroPares = 0;

	respuesta="si";

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" ){ 

		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado)){
			numeroIngresado = prompt("ERROR!! Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if(numeroIngresado > 0){ //pos
			
			sumaPositivos = sumaPositivos + numeroIngresado;

			contadorPositivos = contadorPositivos + 1;

			promedioPositivos = sumaPositivos / contadorPositivos

		}else{
			if(numeroIngresado < 0){ //neg

				sumaNegativos = sumaNegativos + numeroIngresado;

				contadorNegativos = contadorNegativos + 1;

				promedioNegativos = sumaNegativos / contadorNegativos
			}else{
				if(numeroIngresado > -1 || numeroIngresado < 1 ){
					
					contadorCeros = contadorCeros + 1;
				}
			}

		}
		if(numeroIngresado % 2 == 0){
			contadorNumeroPares = contadorNumeroPares + 1;
		}
		
		

		diferenciaNegativosPositivos = sumaPositivos - sumaNegativos

		respuesta = prompt("¿Desea ingresar otro numero? (si/no)");
	}
	
	document.write ("<p><br> SUMA DE NUMEROS NEGATIVOS: </p>"+ sumaNegativos);
	document.write ("<p><br> SUMA DE NUMEROS POSITIVOS: </p>"+ sumaPositivos);
	document.write ("<p><br> CANTIDAD DE NUMEROS NEGATIVOS: </p>"+ contadorNegativos);
	document.write ("<p><br> CANTIDAD DE NUMEROS POSITIVOS: </p>"+ contadorPositivos);
	document.write ("<p><br> CANTIDAD DE CEROS: </p>"+ contadorCeros);
	document.write ("<p><br> CANTIDAD DE NUMEROS PARES: </p>"+ contadorNumeroPares);
	document.write ("<p><br> PROMEDIO DE POSITIVOS: </p>"+ promedioPositivos);
	document.write ("<p><br> PROMEDIO DE NEGATIVOS: </p>"+ promedioNegativos);
	document.write ("<p><br> DIFERENCIA ENTRE NEGATIVOS Y POSITIVOS: </p>"+ diferenciaNegativosPositivos);

	var texto = document.getElementsByTagName("p");
	
	for (var i = 0; i < texto.length; i++) {
		texto[i].style.backgroundColor = "violet";
	}

}//FIN DE LA FUNCIÓN
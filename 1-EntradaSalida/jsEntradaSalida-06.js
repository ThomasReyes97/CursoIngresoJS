/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"
Nombre: Gramajo Lencina Joaquin
Div: C
Ejercicio 6*/
function sumar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//parseint pasa un valor, a un elemento entero

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno + numeroDos;
	// cuando el "+" tiene 2 elementos numericos a cada lado funciona como suma


	alert("la suma es " + resultado);
}


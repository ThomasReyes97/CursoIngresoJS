/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"
Nombre: Gramajo Lencina Joaquin
Div: C
Ejercicio 7*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultadoSum;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoSum = numeroUno + numeroDos;
	alert("la suma es " + resultadoSum);	
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultadoRes;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;


	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoRes = numeroUno - numeroDos;

	alert("la resta es " + resultadoRes)

}

function multiplicar()
{ 	
	let numeroUno;
	let numeroDos;
	let resultadoMult;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;


	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoMult = numeroUno * numeroDos;

	alert("el producto es " + resultadoMult)
	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultadoDiv;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;


	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoDiv = numeroUno / numeroDos

	alert("el cociente es " + resultadoDiv)
}


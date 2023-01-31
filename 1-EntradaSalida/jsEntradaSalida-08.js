/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
Nombre: Gramajo Lencina Joaquin
Div: C
Ejercicio 8*/
function SacarResto()
{
	let numeroUno;
	let numeroDos;
	let resultadoResto;

	numeroUno = txtIdNumeroDividendo.value;
	numeroDos = txtIdNumeroDivisor.value;


	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoResto = numeroUno % numeroDos // % es el resto


	alert("el resto es " + resultadoResto);
}

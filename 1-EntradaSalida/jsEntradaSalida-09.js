/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Nombre: Gramajo Lencina Joaquin
Div: C
Ejercicio 9*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let nuevoSueldo;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	aumento = sueldo * 10 / 100;

    nuevoSueldo = sueldo + aumento;

	

	txtIdResultado.value  = nuevoSueldo
	alert(nuevoSueldo);
}

/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Nombre: Gramajo Lencina Joaquin 
Div: C
Ejercicio 10*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let nuevoImporte;

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	descuento = importe * 25 / 100;

    nuevoImporte = importe - descuento;

	

	txtIdResultado.value  = nuevoImporte
	alert(nuevoImporte);
}

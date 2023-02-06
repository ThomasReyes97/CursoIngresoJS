/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'
Nombre: Gramajo Lencina Joaquin
Division: C
Se ingresará por id el valor de una compra de productos para el hogar.
Se deberá agregar el iva (21%) y
luego se deberá restar el 5% en concepto de compra mayorista.
El programa deberá mostrar por alert importe bruto, el iva,
el importe con iva, el valor del descuento y el total a pagar.


*/
function mostrar()
{
	let importBrut;
	let iva;
	let importIva;
	let descuento;
	let importTotal;
	let mensaje 

	importBrut = document.getElementById("txtIdNombre").value;
	importBrut = parseInt(importBrut)

	iva = importBrut * 21 / 100
	importIva = importBrut + iva

	descuento = importBrut * 5 / 100

	importTotal = importIva - descuento

	mensaje = "importe Bruto: " + importBrut
	mensaje = mensaje + " iva: " + iva + " importe con iva: " + importIva
	mensaje = mensaje + " descuento: " + descuento + " importe total: " + importTotal

	alert(mensaje)
	/*
	var nombreIngresado; // variable
	nombreIngresado = txtIdNombre.value;    
	alert(nombreIngresado);
	*/
}



/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
Nombre: Gramajo Lencina Joaquin
Div: C
Ejercicio 4 
*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado = prompt("ingrese Su Nombre");

	txtIdNombre.value = nombreIngresado;
	alert(nombreIngresado);
}


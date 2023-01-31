/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
Nombre:Gramajo Lencina Joaquin
Div: C
Ejercicio 5*/

function mostrar()
{	
	let nombre;
	let edad;
	
	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	alert("usted se llama " + nombre + " y tiene " + edad + " años");
}


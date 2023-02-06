/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 
Nombre:Gramajo Lencina Joaquin
Div: C
Ejercicio 5
ejercicio integrador
Se debe ingresar por prompt: razón social de la empresa y nombre del titular.
El dni del titular y la fecha de inicio de actividades se ingresarán por id.
 Mostrar por alert todos los datos ingresados y el cuit de la empresa
sabiendo que el mismo está conformado por un código numérico según el tipo de persona
(30 en el caso de empresas), un guión, el dni del titular, otro guión y un dígito verificador 
(será un número aleatorio entre 0 y 9). Por ejemplo: 30-22666548-7*/

function mostrar()
{	

	let razonSoc;
	let nombre;
	let dniTitular;
	let fecha;
	let mensaje;
	let aleatorio;

	razonSoc = prompt("ingrese su razon social");
	nombre = prompt("ingrese su nombre");

	dniTitular = document.getElementById("txtIdNombre").value;

	fecha = document.getElementById("txtIdEdad").value;

	aleatorio = Math.round(Math.random()*9)

	mensaje = "Razon social: ";
	mensaje = mensaje + razonSoc;
	mensaje = mensaje + " Nombre: ";
	mensaje = mensaje + nombre;
	mensaje = mensaje + " Dni del titular: ";
	mensaje = mensaje + dniTitular;
	mensaje = mensaje + " fecha: ";
	mensaje = mensaje + fecha;
	mensaje = mensaje + " Cuil: 30-" + dniTitular + "-" + aleatorio;
	
	alert(mensaje)
	


	/*alert("Razon social: " + razonSocNombre + 
		" Dni del titular: " + dniTitular +
		" fecha: " + fecha + 
		" cuil de empresa: 30-" + dniTitular + "-" + aleatorio  )*/




	/*let nombre;
	let edad;
	
	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	alert("usted se llama " + nombre + " y tiene " + edad + " años");*/
}


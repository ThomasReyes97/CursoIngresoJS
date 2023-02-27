/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{ 
	alert("Esto funciona de maravilla");
}

/******************************************************************************

Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

function mostrar()
{ 
	let bodegaAvellaneda
	let bodegaCABA
	let bodegaLanus
	let pesoDeProductosLanus
	let pesoDeProductosCABA
	let pesoDeProductosAvellaneda
	let deposito
	let respuesta
	let producto

	respuesta = "SI"

	bodegaAvellaneda = 20000
	bodegaCABA = 25000
	bodegaLanus = 15000
	
	pesoDeProductosAvellaneda = 0 
	pesoDeProductosCABA = 0
	pesoDeProductosLanus = 0

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si"){

		deposito = prompt("Ingrese el peso del producto a depositar")
		parseInt(deposito)
		
		while(isNaN(deposito)){
			prompt("Error!!! Ingrese el peso del producto a depositar")
			parseInt(deposito)
		}

		if(pesoDeProductosAvellaneda < bodegaAvellaneda){

		}
		if(pesoDeProductosCABA < bodegaCABA){

		}
		if(pesoDeProductosLanus < bodegaLanus){

		}
		respuesta = prompt("¿desea hacer un nuevo deposito? (si/no)")
	}
}

*/

/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

precio base 10000

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/

function mostrar()
{ 
 	let nombreDelVendedor
	let nombreDelComprador
	let cantidadDePasajes
	let precioTotal
	let tipoDeAsiento
	let aumento
	let tipoDeViaje
	let tipoDeDestino
	let pesosQuinoto = 0
	let pesosPepe = 0
	let pesosHuesos = 0
	let precioBase = 10000
	let respuesta = "SI"

	

	

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si"){

		nombreDelVendedor = prompt("Ingrese el nombre del vendedor (Pepepeposo, Quinoto y Huesos)")
		while(!isNaN(nombreDelVendedor)){
			nombreDelVendedor = prompt("Error! Ingrese el nombre del vendedor (Pepepeposo, Quinoto y Huesos)".toUpperCase)
		}
		while (nombreDelVendedor != "PEPEPEPOSO" && nombreDelVendedor != "QUINOTO" && nombreDelVendedor != "HUESOS") {
			nombreDelVendedor = prompt("Error! Ingrese el nombre del vendedor (Pepepeposo, Quinoto y Huesos)").toUpperCase();
		}
		

		nombreDelComprador = prompt("Ingrese su nombre")
		while(!isNaN(nombreDelComprador)){
			nombreDelComprador = prompt("Error! Ingrese su nombre")
		}

		while(cantidadDePasajes > 0 && cantidadDePasajes < 6){
			cantidadDePasajes = prompt("Ingrese la cantidad de pasajes (5 max)")
			while(isNaN(cantidadDePasajes)){
				cantidadDePasajes = prompt("Error!! Ingrese la cantidad de pasajes (5 max)")
			}
			while(cantidadDePasajes < 1 || cantidadDePasajes > 5){
				cantidadDePasajes = prompt("ingrese una cantidad valida de pasajes (5 max)")
			}
		}

		tipoDeAsiento = prompt("seleccione un tipo de asiento (economia, ejecutivo, primera clase)").toUpperCase();
		while (tipoDeAsiento != "ECONOMIA" && tipoDeAsiento != "EJECUTIVO" && tipoDeAsiento != "PRIMERA CLASE") {
			tipoDeAsiento = prompt("ERROR. seleccione un tipo de asiento (economia, ejecutivo, primera clase)").toUpperCase();
		}

		switch (tipoDeAsiento) {
			case "ECONOMIA":
				aumento = 0
				break;
			case "EJECUTIVO":
				aumento = 0.20
				break;
			default: // primera clase
				aumento = 0.35
				break;
		}
		
		tipoDeViaje = prompt("Ingrese su tipo de viaje (Directo o Escala)")
		while(!isNaN(tipoDeViaje)){
			tipoDeViaje = prompt("Error! Ingrese su tipo de viaje (Directo o Escala)")
		}

		tipoDeDestino = prompt("Ingrese su destino (Nacional o Internacional)")
		while(!isNaN(tipoDeDestino)){
			tipoDeDestino = prompt("Error! Ingrese su destino (Nacional o Internacional)")
		}

		switch (nombreDelVendedor){
			case "PEPEPEPOSO":
				precioTotal = precioBase * cantidadDePasajes
				aumento = precioTotal * aumento
				precioTotal = precioTotal + aumento

				pesosPepe = precioTotal + pesosPepe
				break;

			case "HUESOS":
				precioTotal = precioBase * cantidadDePasajes
				aumento = precioTotal * aumento
				precioTotal = precioTotal + aumento

				pesosHuesos = precioTotal + pesosHuesos
				
				break;
			default: // quinoto
				precioTotal = precioBase * cantidadDePasajes
				aumento = precioTotal * aumento
				precioTotal = precioTotal + aumento

				pesosQuinoto = precioTotal + pesosQuinoto

				break;
		}

		precioTotal = 0

		respuesta = prompt("¿desea comprar otr paquete de viaje? (si/no)")
	}

	alert("pesos recaudados Huesos " + pesosHuesos + " pesos recaudados Pepepeposo " + pesosPepe + " pesos recaudados Quinoto " + pesosQuinoto)
 
}
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
Nombre: Gramajo Lencina Joaquin
TP 1*/
function Sumar () 
{
	let precio1;
    let precio2;
    let precio3;
    let resultadoSum;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultadoSum = precio1 + precio2 + precio3;

    alert(resultadoSum)
}
function Promedio () 
{
    let precio1;
    let precio2;
    let precio3;
    let resultadoProm;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    resultado = (precio1 + precio2 + precio3) / 3;

    alert(resultadoProm)	
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let sumaPrecios;
    let resultadoIva;

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1 = parseInt(precio1);
    precio2 = parseInt(precio2);
    precio3 = parseInt(precio3);

    sumaPrecios = precio1 + precio2 + precio3;

    resultadoIva = sumaPrecios + (sumaPrecios * 21 / 100)

    alert(resultadoIva)	
}
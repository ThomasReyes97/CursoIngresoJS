/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
Nombre: Gramajo Lencina Joaquin
    TP 3
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let resultadoCenti;

    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    resultadoCenti = (temperatura - 32) * 5/9;

    alert(temperatura + "° Fahrenheit son " + resultadoCenti + "° centigrados");
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let resultadoFahren;

    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    resultadoFahren = (temperatura * 9/5) + 32;

    alert(temperatura + "° centígrado son " + resultadoFahren + "° Fahrenheit")
}

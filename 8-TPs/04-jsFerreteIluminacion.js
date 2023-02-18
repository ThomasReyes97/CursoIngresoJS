/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el
    descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de
    otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un
    descuento del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto
    con el siguiente mensaje:

 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 /*TP N°4 Gramajo Lencina Joaquin
 
function CalcularPrecio () 
{
 	let lamparasCant;
    let lampPrecio;
    let precioXcantidad;
    let marca;
    let precioFin;
    

    lampPrecio = 35;
    lamparasCant = document.getElementById("txtIdCantidad").value;
    lamparasCant = parseInt(lamparasCant);

    precioXcantidad = lampPrecio * lamparasCant;

    marca = document.getElementById("Marca").value;

    if(lamparasCant >= 6){ //a
 
        precioFin = precioXcantidad - (precioXcantidad * 50 / 100);

    }else{
        if (lamparasCant == 5 && marca == "ArgentinaLuz"){ //b

            precioFin = precioXcantidad - (precioXcantidad * 40 /100);
        }else{
            if(lamparasCant == 5 && marca != "ArgentinaLuz"){
                precioFin = precioXcantidad - (precioXcantidad * 30 /100);
            }
        }
        if (lamparasCant == 4 ){ //c
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                precioFin = precioXcantidad - (precioXcantidad * 25 / 100);
            }else{
                precioFin = precioXcantidad - (precioXcantidad * 20 / 100);
            }
        }
        if(lamparasCant == 3){ //d
            if(marca == "ArgentinaLuz"){
                precioFin = precioXcantidad - (precioXcantidad * 15 / 100)
            }else{
            if(marca == "FelipeLamparas"){
                precioFin = precioXcantidad - (precioXcantidad * 10 / 100)
            }else{
                precioFin = precioXcantidad - (precioXcantidad * 5 / 100)
            }
            }
        }
        
    }
    if(precioFin > 120){
        precioFin = precioFin + (precioFin * 10 / 100)
    } //e
    document.getElementById("txtIdprecioDescuento").value = precioFin;
}
*/

/* menos codigo
function CalcularPrecio () 
{
 	let lamparasCant;
    let lampPrecio;
    let precioXcantidad;
    let marca;
    let precioFin;
    let descuento;
    let impuesto

    lampPrecio = 35;
    lamparasCant = document.getElementById("txtIdCantidad").value;
    lamparasCant = parseInt(lamparasCant);
    precioXcantidad = lampPrecio * lamparasCant;

    marca = document.getElementById("Marca").value;

    if(lamparasCant >= 6){ //a
        descuento = 0.50
    }else{
        if (lamparasCant == 5 && marca == "ArgentinaLuz"){ //b
            descuento = 0.40
        }else{
            if(lamparasCant == 5 && marca != "ArgentinaLuz"){
            descuento = 0.30
            } 
        }
        if (lamparasCant == 4 ){ //c
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                descuento = 0.25 
            }else{
                descuento = 0.20 
            }
        }
        if(lamparasCant == 3){ //d
            if(marca == "ArgentinaLuz"){
                descuento = 0.15 
            }else{
            if(marca == "FelipeLamparas"){
                descuento = 0.10 
            }else{
                descuento = 0.05 
            }
            }
        }
        
    }
    
    precioFin = precioXcantidad - (precioXcantidad * descuento)

    if(precioFin > 120){
        impuesto = precioFin * 0.10
        precioFin = precioFin + impuesto
        alert("Usted pago " + impuesto +  " de IIBB")
    } //e
    document.getElementById("txtIdprecioDescuento").value = precioFin;
}

*/

function CalcularPrecio () 
{
    let lamparasCant;
    let lampPrecio;
    let precioXcantidad;
    let marca;
    let descuento;
    let impuesto;
    let precioFinal;
    

    lampPrecio = 35;
    lamparasCant = document.getElementById("txtIdCantidad").value;
    lamparasCant = parseInt(lamparasCant);

    precioXcantidad = lampPrecio * lamparasCant;

    marca = document.getElementById("Marca").value;

    if(lamparasCant >= 6 ){
        descuento = 0.50
    }else{
        if(lamparasCant == 5){
            switch(marca){
                case "ArgentinaLuz":
                    descuento = 0.40
                    break;
                
                default:
                    descuento = 0.30
                    break;
            }
        }else{
            if(lamparasCant == 4 ){
                switch(marca){
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuento = 0.25
                        break;

                    default:
                        descuento = 0.20
                        break;
                }
            }else{
                if(lamparasCant == 3){
                    switch(marca){
                        case "ArgentinaLuz":
                            descuento = 0.15
                             break;
                        
                        case "FelipeLamparas":
                            descuento = 0.10
                            break;

                        default:
                            descuento = 0.05
                            break;
                    }
                }
            }
        }
    }

    precioFinal = precioXcantidad - (precioXcantidad * descuento)

    if(precioFinal > 120){
        impuesto = precioFinal * 0.10
        precioFinal = precioFinal + impuesto
        alert("Usted pago " + impuesto +  " de IIBB")
    } //e
    document.getElementById("txtIdprecioDescuento").value = precioFinal;

}
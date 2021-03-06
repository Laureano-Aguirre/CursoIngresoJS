/*4.
aguirre laureano
Switch con If en las marcas
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{    
    //declaramos las variables
    let cantLamparas;
    const PRECIO_X_LAMPARA = 35;
    let descuento;
    let precio;
    let marca;
    let precioFinal;
    let ingresosBrutos;


    //definimos las variables
    cantLamparas=document.getElementById('txtIdCantidad').value;
    marca=document.getElementById('Marca').value;
    ingresosBrutos=10;

    //pasamos de texto a numero
    cantLamparas=parseInt(cantLamparas);

    //definimos la variable precio sin descuento
    precioFinal=(cantLamparas*PRECIO_X_LAMPARA);

    //declaramos y definimos el switch
    switch (cantLamparas) 
    {
        case 1:
        case 2:
            descuento=0;
            break;
        case 5:
            if (marca=="ArgentinaLuz")
            {
                descuento=40;
            }
                else
                {
                    descuento=30;
                }
            break;
        case 4:
            if (marca=="ArgentinaLuz" || marca=="FelpieLamparas") 
            {
                descuento=25;
            }
                else 
                {
                    descuento=20;
                }
            break;
        case 3:
            if (marca=="ArgentinaLuz")
            {
                descuento=15;
            }
                else 
                {
                    if (marca=="FelipeLamparas")
                    {
                        descuento=10;    
                    }
                    else 
                    {
                        descuento=5;
                    }
                }
            break;
        default:
            descuento=50;
            break;
        
    }
    
       
    precioFinal=(precioFinal-(precioFinal*descuento/100));

    if (precioFinal>120) 
    {
        ingresosBrutos=precioFinal*ingresosBrutos/100;
        alert("Usted pago "+ingresosBrutos+" de IIBB.");
        precioFinal=(precioFinal+ingresosBrutos);
    }

    document.getElementById('txtIdprecioDescuento').value=precioFinal;


}




/*el If es un condicional.
La condicion puede ser verdadera o falsa. Si es VERDADERA, entramos al bloque if, y se va a ejecutar lo que hay entre las llaves de cierre
Una vez que se ejecuto lo que hay entre llaves de cierre del if, sigue ejecutandose el codigo linea a linea secuencialmente
Si la condicion es FALSA, no se va a ejecutar al bloque delimitado por el if, y va a saltearse el mismo, y se sigue ejecutando secuencialmente el codigo
*/

//usar el if solamente para poner los diferentes descuentos
//poner la ecuacion al final y me arreglo con los ifs solos
//cambiar la variable precio inicial por precio sin descuento
 
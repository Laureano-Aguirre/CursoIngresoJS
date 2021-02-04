/*1
aguirre laureano
TP 1
.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    
    //declaramos las variables
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    let respuesta;

    //definimos las variables
    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    //transformamos el texto a numero
    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    //definimos la variable resultado
    resultado=precioUno+precioDos+precioTres;

    //definimos la variable respuesta
    respuesta="la suma da " +resultado;

    alert(respuesta);




}
function Promedio () 
{
    
    //declaramos las variables
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    let respuesta;

    //definimos las variables
    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    //transformamos el texto a numero
    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    //definimos la variable resultado
    resultado=(precioUno+precioDos+precioTres)/3;

    //definimos la variable respuesta
    respuesta="el promedio es " +resultado;

    alert(respuesta);




}
function PrecioFinal () 
{
    
    //declaramos las variables
    let precioUno;
    let precioDos;
    let precioTres;
    let iva;
    let resultadoInicial;
    let resultadoFinal;
    let respuesta;


    //definimos las variables
    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioTres=document.getElementById('txtIdPrecioTres').value;

    //transformamos el texto a numeros
    precioUno=parseFloat(precioUno);
    precioDos=parseFloat(precioDos);
    precioTres=parseFloat(precioTres);

    //definimos la variable iva
    iva=0.21;

    //definimos la variable resultado inicial
    resultadoInicial=precioUno+precioDos+precioTres;

    //definimos la variable resultado final
    resultadoFinal=(resultadoInicial*iva)+resultadoInicial;

    //definimos la variable respuesta
    respuesta="La operacion da " +resultadoFinal;

    alert(respuesta);



}
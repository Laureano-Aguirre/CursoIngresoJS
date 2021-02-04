/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    //declaramos las variables
    let largoDelTerreno;
    let anchoDelTerreno;
    let numeroDeHilos;
    let resultado;
    let respuesta;


    //definimos las variables
    largoDelTerreno=document.getElementById('txtIdLargo').value;
    anchoDelTerreno=document.getElementById('txtIdAncho').value;
    numeroDeHilos=3

    //transformamos de texto a numeros
    largoDelTerreno=parseFloat(largoDelTerreno);
    anchoDelTerreno=parseFloat(anchoDelTerreno);

    //definimos la variable resultado
    resultado=((largoDelTerreno*anchoDelTerreno)*numeroDeHilos);

    //definimos la variable respuesta
    respuesta="Necesita comprar "+resultado+" metros de alambre";

    alert(respuesta);



}
function Circulo () 
{
    
    //declaramos las variables
    let radio;
    let perimetro;
    const PI=3.14;
    let resultado;
    let respuesta;



    //definimos las variables
    radio=document.getElementById('txtIdRadio').value;

    //transformamos el texto a numeros
    radio=parseFloat(radio);

    //definimos la variable perimetro
    perimetro=2 * PI * radio;

    //definimos la variable resultado
    resultado=perimetro*3;

    //definimos la variable respuesta
    respuesta="Necesita comprar "+resultado+" metros de alambre";

    alert(respuesta);





}
function Materiales () 
{
    
    //declaramos las variables
    let largoDelTerreno;
    let anchoDelTerreno;
    let area;
    const CEMENTO_X_METRO=2;
    const CAL_X_METRO=3;
    

    //definimos las variables
    largoDelTerreno=document.getElementById('txtIdLargo').value;
    anchoDelTerreno=document.getElementById('txtIdAncho').value;

    //pasamos de texto a numeros
    largoDelTerreno=parseFloat(largoDelTerreno);
    anchoDelTerreno=parseFloat(anchoDelTerreno);

    //definimos la variable area
    area=largoDelTerreno*anchoDelTerreno;

    //definimos la variable cal
    cal=area*CAL_X_METRO;

    //definimos la variable cemento
    cemento=area*CEMENTO_X_METRO;

    //definimos la variable respuesta
    respuesta="Se necesitan "+cal+" bolsas de cal y "+cemento+" bolsas de cemento";
    
    alert(respuesta);



}


//siempre que tengamos una constante: se define cuando se declara la constante. Y al ser mas de una palabra, debemos separarlas por _
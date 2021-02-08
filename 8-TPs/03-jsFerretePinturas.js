/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    
    //declaramos las variables
    let temperatura;
    let paseDeFarenheitACentigrados;
    let respuestaC;


    //definimos las variables
    temperatura=document.getElementById('txtIdTemperatura').value;

    //pasamos de texto a numero
    temperatura=parseFloat(temperatura);

    //definimos la variable paseDeFarenheitACentigrados
    paseDeFarenheitACentigrados=(temperatura-32)/1.8;

    

    //definimos la variable respuestaC
    respuestaC=temperatura+" grados Farenheit son "+paseDeFarenheitACentigrados.toFixed(2)+" grados centigrados";

    alert(respuestaC);




}

function CentigradosFahrenheit () 
{
    
    //declaramos variables
    let temperatura;
    let paseDeCentigradosAFarenheit;
    let respuestaF;


    //definimos las variables
    temperatura=document.getElementById('txtIdTemperatura').value;

    //pasamos de texto a numero
    temperatura=parseFloat(temperatura);

    //definimos la variable paseDeCentigradosAFarenheit
    paseDeCentigradosAFarenheit=(temperatura*1.8)+32;

    //definimos la variable respuestaF
    respuestaF=temperatura+" grados Centigrados son "+paseDeCentigradosAFarenheit.toFixed(2)+" grados Farenheit";

    alert(respuestaF);



}

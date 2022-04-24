/*
Existen dos tipos de funciones: 
*/
//Declarativas

function miFuncion1(){
    return 3;
}

miFuncion1();

//Expresión
var miFuncion2 = function(a,b){

    return a + b;
}

miFuncion2();



//ejemplo 1
function saludarEstudiantes(estudiante){
   // console.log("Hola "+estudiante);
    console.log(`Hola ${estudiante}`);
}

//Ejemplo con la palabra reservada return

function sumar(a,b){
    var resultado = a + b;
    return resultado;
}
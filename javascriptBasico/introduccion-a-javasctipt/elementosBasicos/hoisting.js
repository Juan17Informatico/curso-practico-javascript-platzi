//Hoisting con variables:

console.log(nombre);//Si mostrará el valor, será indefinida
//Ya que la variable se crea y se le asigna el nombre después- 

var nombre = "juan";

//Funciones

saludo();

function saludo(){
    return "Hola ${apellido}";
}

var apellido = "Campuzano";



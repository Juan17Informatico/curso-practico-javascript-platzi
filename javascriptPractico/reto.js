/*
    Variables y operaciones
*/
//1) Responde las siguientes preguntas en la sección de comentarios:
//  -¿Qué es una variable y para qué sirve?
/*
    Una variable es un espacio en memoria, que sirve para guardar diversos
    tipos de datos. Sirven para poder realizar operaciones, partir de allí un ciclo,
    función, bucles etc. 
*/
let variable;

//  -¿Cuál es la diferencia entre declarar e inicializar una variable?
/*
    Al declarar una variable estamos dejandola en memoria lista para asignarle un valor.
    Y al inicializar una variable estamos ya dando su valor. 
*/
let variableDeclarada;
let variableInicializada = "hola";

//  -¿Cuál es la diferencia entre sumar números y concatenar strings?
/*
    Al sumar numeros estamos haciendo uso de un operador matemático.
    Cuando concatenamos por lo general, strings variables y/o numeros, hacemos uso por lo general del mismo 
    simbolo que se usa al sumar, pero este no ejecutará la acción de sumar, más bien, pondrá en orden dado 
    la información que se le de.
*/
let a = 1,
  b = 2;
let suma = a + b; //Aqui una simple suma
console.log("La suma de " + a + " + " + b + "es igual a " + suma); //Aqui realizamos concatenación

// -¿Cuál operador me permite sumar o concatenar?
/*
    El signo de +
*/

//2) Determina el nombre y tipo de dato para almacenar en variables la siguiente información
/*
    -Nombre = String
    -Apellido = String
    -Nombre de usuario en platzi = string
    -edad = integer
    -correo eléctronico = string
    -Mayor de edad = boolean
    -Dinero ahorrado = integer
    -Deudas = integer
*/

//3)Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let name = "Juan";
let lastName = "Campuzano";
let userNamePlatzi = "JuanP";
let age = 18;
let mail = "juanp@gmail.com";
let mayorEdad = true;
let dineroAhorrado = 500000;
let deudas = 50000;

//4)Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
/*
    Nombre completo (nombre y apellido)
    Dinero real (dinero ahorrado menos deudas)  
 */

console.log(name+" "+lastName);
let dineroActual = dineroAhorrado - deudas;
console.log("Dinero total: "+dineroActual);

/* FUNCIONES */
/*1) Responde las siguientes preguntas en la sección de comentarios: */
//  ¿Qué es una función?
/* 
    Una función es un bloque de código, el cual cumple una función en específico, programada para ayudarnos 
    a cumplir una tarea tan simple como puede ser sumar dos números. 

*/

// -¿Cuándo me sirve usar una función en mi código?
/* 
    Cuando queremos "Automatizar un proceso", ya que de esta manera, al querer usar nuestro algoritmo, solo
    con una línea de código llamamos la función, y está se ejecuta y cumple su cometido. 
*/

// -¿Cuál es la diferencia entre parámetros y argumentos de una función?
/**
 * Parametros son variables de mi función que está en la definición de la misma, y los argumentos
 * son cuando pasamos los datos al llamar la función 
 */

/**
 * 2) Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables 
 * constantes por parámetros y argumentos en una función
 */


function saludar(name, lastName,nickname){
    let completeName = name + " "+lastName;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

saludar("Juan", "Campuzano", "JuanP");


/* CONDICIONALES */
//Responde las siguientes preguntas en la sección de comentarios: 
/**
 *  ¿Qué es una condicional? 
 *  Es una sentencia, que nos ayuda a tomar una decisión dentro de nuestro código. 
 */
/**
 *  ¿Qué tipo de condicionales existen en javascript y cuáles son sus diferenciales? 
 *      Existen la sentencia if, switch, y una en particular que es el if ternario.
 *      -La primera, es la más conocida y se utiliza normalmente cuando queremos válidad muchas acciones,
 *      o simplemente hay demasiadas opciones y se nos facilita utilizar está sentencia. 
 *      -La segunda (switch) nos ayuda a segmentar nuestras decisiones en casos muy utiles
 *       solo debemos definir que casos vamos a evaluar
 *      -La terecera, normalmente se hace cuando queremos tomar una decisión, normalmente muy "binaria"
 */

/**
 *  ¿Puedo combinar funciones y condicionales?
 *  Si.
 */


//2)Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if. 
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion === "Basic" || tipoDeSuscripcion === "basic"){
    console.log("Puedes tomar casi todos los cursos de platzi durante un mes");
}else if(tipoDeSuscripcion === "Expert" || tipoDeSuscripcion === "expert"){
    console.log("Puedes tomar casi todos los cursos de platzi durante un año");
}else if(tipoDeSuscripcion === "ExpertPlus" || tipoDeSuscripcion === "expertplus" || tipoDeSuscripcion === "expertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de platzi durante un año");
}else if(tipoDeSuscripcion === "free" || tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}

/* CICLOS */
// 1)Preguntas
/**
 *  ¿Qué es un ciclo?
 *      Un ciclo es una sentencia que nos permite repetir un bloque de código, las cantidades de veces
 *      que le indiquemos.
 *  ¿Qué tipos de ciclos existen JavaScript?
 *      for,for of, for in, while, do-while
 *  ¿Qué es un ciclo infinito y por qué es un problema?
 *      un ciclo infinito se puede definir como aquel ciclo, en el que el programador evito poner un
 *      iterador que deterimene el fin del ciclo. Es un problema porque puede ocasionar muchos problemas con 
 *      la aplicación
 *  ¿Puedo mezclar ciclos y condicionales?
 *      Si
 */

//2) Replica el comportamiento de los siguientes ciclos for utilizando ciclos while: 
let i = 0;
while(i<5){
    console.log("El valor de i es: "+ i);
    i++;
}

let j = 10;

while(10>=j){
    console.log("El valor de j es: "+j);
    j++;
}

//3) Escribe un código en javascript que le pregunte a los usuarios cuánto es 2 + 2
// Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar

let respuesta;

typeof respuesta;
/*
if(respuesta === 4){
    alert("Felicidades, la respuesta es correcta");
}else{
    alert("Lo lamento la respuesta es incorrecta");
}*/

do {
    respuesta = Number(prompt("Cuanto es 2 + 2?"));
    if(respuesta === 4){
        alert("Felicidades, la respuesta es correcta");
    }else{
        alert("Lo lamento la respuesta es incorrecta, puedes volver a intentarlo");
    }
} while (!respuesta === 4);

/* LISTAS */
/**
 *  ¿Qué es un array?
 *      Es una estructura de datos, que por lo general, guardas datos del mismo tipo. 
 *  ¿Qué es un objeto?
 *      Un objeto es por lo general una instancia de una clase, la cual guarda propiedades y métodos que 
 *      pueden ser utilizados. 
 *  ¿Cuándo es mejor usar objetos o arras? 
 *      Normalmente cuando usamos arrays, solo queremos una simple función, de poder utilizar sus datos,
 *      para con ellos realizar acciones comunes. 
 *      Un objeto es más complicado, con un objeto tenemos acciones que pueden llegar a ser más complejas.
 *      La diferencia es que mientras utilizamos arrays para por ejemplo una lista de nombres, podemos utilizar
 *      objetos que no solo tengan  atributos, sino que también tengan funciones que puedan ser incluso sobree
 *      -escritas.
 *  ¿Puedo mezclar arrays con objetos y viceversa?
 *      si.
 *  
 */
//2)
 function array(a) {
    return console.log(a[0]);
  }

  array(lista);

//3) Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno
//por uno(no se vale imprimir el array completo)

function arrays(a){
    for(let i = 0; i<a.length;i++){
        console.log(a[i]);
    }
}

let x = [1,2,3,4,5,6,78,9];

arrays(x);

//4) 
let Persona = {
    nombre: 'Juan Pablo',
    edad: 18,
    TI: 5842195
};

function objeto(P){
    console.log(Object.values(P));
}

objeto(Persona);
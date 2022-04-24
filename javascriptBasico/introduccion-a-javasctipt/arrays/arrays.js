//El array es una estructura de datos.
var frutas = ["Manzana","Banano","Papaya","Fresa","Cereza"];

console.log(frutas);

var cantidad = frutas.length; //Nos retorna la cantidad de elementos que hay en el array

var masFrutas = frutas.push("Uvas");//Me ayuda a agregar un elemento al array
frutas.pop("Uvas");//Elimina el último elemento de nuestro array 
//si lo asignamos a una variable está queda con el valor que fue eliminado 

frutas.unshift("Mango");//Posiciona el elemento al inicio del array 

frutas.shift("Mango");//Elimina el primer elemento del array
//Si asignamos esto a una variable, la variable quedará con el valor que elimino shift

frutas.indexOf("Cereza");//Nos busca en que posición se encuentra el elemento dentro del array
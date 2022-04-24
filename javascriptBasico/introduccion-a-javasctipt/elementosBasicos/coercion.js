//Coerción implicita
var a = 4+"7";

console.log(a);

var b = 4*"2";

console.log(b);

//Coerción explicita
var c = String(b);
//Con typeof nombreVariable, podemos ver el tipo de dato que es 
var d = Number(c);

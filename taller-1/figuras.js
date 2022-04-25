//Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd();

//Código del triángulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function alturaTriangulo(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    console.log("Es un triangulo isosceles");
    //Desglosamos la operación que nos permite hallar la altura del triangulo isosceles
    let a = lado1 ** 2; //Calculamos a, en donde a es la longitud de los lados congruentes del triángulo

    let b = base ** 2 / 4; //Y donde b es la longitud de la base del triangulo

    altura = Math.sqrt(a - b);
    return altura;
  } else {
    return "NO es un triangulo isosceles";
  }
}

console.groupEnd();

//Código del círculo
console.group("Circulos");

//Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

//PI
const pi = Math.PI;

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}

//Área
function areaCirculo(radio) {
  return (radio * radio) * pi;
}

console.groupEnd();

//Interacción con el HTML
//Cuadrado:
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);

  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);

  alert(area);
}
//Triangulo
function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const base = inputBase.value;

  const inputAltura = document.getElementById("InputTrianguloAltura");
  const altura = inputAltura.value;
  //

  const area = areaTriangulo(base, altura);

  alert(area);
}

function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const inputBase = document.getElementById("InputTrianguloBase");

  const lado1 = Number(inputLado1.value);
  const lado2 = Number(inputLado2.value);
  const base = Number(inputBase.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);

  alert(perimetro);
}

function calcularAlturaTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const inputBase = document.getElementById("InputTrianguloBase");

  const lado1 = Number(inputLado1.value);
  const lado2 = Number(inputLado2.value);
  const base = Number(inputBase.value);

  const altura = alturaTriangulo(lado1,lado2,base);

  alert(altura);
}

//Circulo
function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById("InputCirculo");

    const radio = inputRadio.value;

    const perimetro = perimetroCirculo(radio);

    alert(perimetro);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("InputCirculo");
    
    const radio = inputRadio.value;

    const area = areaCirculo(radio);

    alert(area);
}

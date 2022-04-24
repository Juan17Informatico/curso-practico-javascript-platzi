function auto(marca,modelo,año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}

autos = [];

//Utilizamos la function parseInt para convertir el dato que nos ingresa el usuario en Entero
let y = parseInt(prompt("Cuantos autos deseas añadir?"));//Pedimos al usuario la cantidad de objetos que quiere añadir
let marca,modelo,año;//Declaramos variables globales que nos permiten obtener los datos necesarios (también pueden declararse local)



for(i = 0;i<y;i++){
    marca = prompt("Digita la marca ");//Obtenemos la marca
    modelo = prompt("Digita el modelo ");//Obtenemos el modelo
    año = prompt("Digita el año ");//Obtenemos el año
    autos.push(new auto(marca,modelo,año));//Añadimos 1 a 1 los elementos en nuestro array
}

for(let a of autos){
    console.log(a);//Mostramos los objetos en la consola
}


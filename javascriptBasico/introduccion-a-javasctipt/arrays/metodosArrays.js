let Articulos = [
    { nombre: "Bicicleta", costo: 300 },
    { nombre: "Tv", costo: 500 },
    { nombre: "Libro", costo: 10},
    { nombre: "Laptop", costo: 1000},
    { nombre: "Audifonos", costo: 700}
];

//Primer metodo "filter"
var articulosFiltrados = Articulos.filter(function(articulo){ //Filtra según la condición que indicquemos
    return articulo.costo <= 500
});
/*filtra según le indiquemos, todos los elementos que coincidan con 
las indicaciones*/

//Método de map
var nombreArticulo = Articulos.map(function(art){
    return art.nombre
});
/*Este método mapea los datos que nosotros le digamos*/

//Método find
var encuentraArticulo = Articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});
/*A diferencia del filter, este al encontrar la primera coincidencia
dejará de buscar en el arreglo*/ 


//Método foreach
Articulos.forEach(function(articulo){
    console.log(articulo.nombre+" "+articulo.costo)
});

//Método some
var articulosCaros = Articulos.some(function(art){
    return art.costo > 500;
})
//Este método nos devuelve un valor booleano (nos puede ayudar si queremos tomar una decisión)
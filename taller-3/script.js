function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

// Mediana

function calcularMediana(listaM) {
  listaM.sort(function (a, b) {
    return a - b;
  });

  const mitadLista = parseInt(listaM.length / 2);
  let mediana;

  if (esPar(listaM.length)) {
    const elemento1 = listaM[mitadLista - 1];
    const elemento2 = listaM[mitadLista];
    const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElementos;
  } else {
    mediana = listaM[mitadLista];
  }

  return mediana;

}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//Moda:

const lista1 = [
  1,2,3,1,2,3,4,5,5,5,2,1,3
];

const lista1Count = {};

lista1.map(function(elemento){
  
  if(lista1Count[elemento])
  {
    lista1Count[elemento] += 1;
  }else{
    lista1Count[elemento] = 1;
  }
  
})

const lista1Array = Object.entries(lista1Count).sort(function(valorAcumulado,nuevoElemento){
  return valorAcumulado[1] - nuevoElemento[1]
});

const moda = lista1Array[lista1Array.length-1];

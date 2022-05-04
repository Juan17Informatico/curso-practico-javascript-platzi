//Media
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

function calcularModa(listaArray) {
  const listaCount = {};

  listaArray.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });

  const array = Object.entries(listaCount).sort(function (
    valorAcumulado,
    nuevoElemento
  ) {
    return valorAcumulado[1] - nuevoElemento[1];
  });

  const moda = array[array.length - 1];

  return moda;
}

//Pequeño parentesis. Promedio ponderado
//Objeto
// Elegí trabajar con la media aritmética ponderada. 
// Este es un promedio muy similar a la media aritmética, pero nos permite definir también el peso, 
// importancia o relevancia de cada elemento en nuestro conjunto de números.
// Un caso de uso de la media ponderada es el cálculo de notas académicas cuando cada materia o asignatura otorga diferentes “créditos”.

//Formula:
// [(n1*c1)+(n2*c2)]
// ------------------
// (c1+c2)
//donde n1 es nota y c1 son creditos
const notes = [
  {
      course: "Educación Física",
      note: 10,
      credit: 2,
  },
  {
      course: "Programación",
      note: 8,
      credit: 5,
  },
  {
      course: "Finanzas personales",
      note: 7,
      credit: 5,
  },
];

//(n1*c1)
const notesWithCredit = notes.map(function (noteObject) {
  return noteObject.note * noteObject.credit;
});

//Sumamos el resultado de arriba (resultado) + (resultado)  =  
const sumOfNotesWithCredit = notesWithCredit.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);

//Obtenemos todos los créditos
const credits = notes.map(function (noteObject) {
  return noteObject.credit;
});

//Obtenemos la suma de los créditos
const sumOfCredits = credits.reduce(
  function (sum = 0, newVal) {
      return sum + newVal;
  }
);

//Hacer la última operacion
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
//Obtener datos: 


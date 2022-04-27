//
function calcularMediaAritmetica(lista) {

  let sumaLista1 = 0;

  for (let i = 0; i < lista.length; i++) {
    sumaLista1 = sumaLista1 + lista[i];
  }
  
  const promedioLista = sumaLista1 / lista.length;

  return promedioLista;

}

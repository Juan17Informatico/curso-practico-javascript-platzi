var tijeras = 1,
  papel = 2,
  piedra = 3;

var jugador1 = papel,
  jugador2 = tijeras;

switch (jugador1) {
  case 1:
    console.log("Empate");
    break;
  case 2:
    console.log("Jugador 2 ganó");
    break;
  case 3:
    console.log("Jugador 1 ganó");
    break;
  default:
      console.log("jugador 2 ganó");
      break;
}

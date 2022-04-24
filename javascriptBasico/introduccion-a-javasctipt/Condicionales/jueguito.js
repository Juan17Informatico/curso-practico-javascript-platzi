var jugador1 = "tijeras";
var jugador2 = "papel";

var papel = "papel", tijeras = "tijeras", piedra = "piedra";

function juego(jugador1,jugador2){
    var resultado;
    if(jugador1 === jugador2){
        resultado = "empate";
    }else if(jugador1 === papel && jugador2 === tijeras){
        resultado = "Jugador 2 gana";
    }else if(jugador1 === tijeras && jugador2 === piedra){
        resultado = "Jugador 2 gana";
    }else if(jugador1 === piedra && jugador2 === papel ){
        resultado = "Jugador 2 gana";
    }else{
        resultado = "Jugador 1 gana";
    }
    return resultado;
}

juego(jugador1,jugador2);
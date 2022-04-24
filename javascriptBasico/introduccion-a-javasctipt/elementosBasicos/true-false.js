//Ejemplos en los que boolean devuelve un valor false
Boolean(0);//false
Boolean(null);//false
Boolean(NaN);//false
Boolean(undefined);//false
Boolean(false);//false
Boolean("");//false

//Valores verdaderos
Boolean("s");//Cualquier caracter o cadena de texto es true
Boolean(1);//Cualquier número que no sea cero true
Boolean([]);//Cualquier array aunque este vacio es true
Boolean({});//true aunque el objeto este vació
Boolean(function(){});//cualquier función es true 
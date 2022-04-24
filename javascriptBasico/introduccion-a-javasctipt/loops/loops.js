var estudiantes = ["Maria","Isabel","Sergio","Rosa"];

function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`);
}

for(var i=0;i<estudiantes.length;i++){
    saludarEstudiante(estudiantes[i]);
}

//Otra forma: 
for(var estudiante of estudiantes){
    saludarEstudiante(estudiante);
}

//con while
var i = 0;
while(i < estudiantes.length){
    saludarEstudiante(estudiantes[i]);
    i++;
}
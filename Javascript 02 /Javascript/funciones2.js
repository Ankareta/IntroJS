//Funciones
// Programa para hacer limonada
function exprimirLimones (cantidad){
    console.log("Exprimiendo" + cantidad + "Limones");
    let jugoExtraido = cantidad *10; // considerando obtener 10ml de jugo por cada limón
    console.log("Se obtuvo" + jugoExtraido + " ml de jugo de limón");
    return jugoExtraido; // return
}

//Función para mezclar el jugo con agua y azúcar

function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar) {
    console.log("Mezclando" + cantidadDeJugo + "ml de jugo de limon con" + cantidadDeAgua + "ml de agua y "  + cantidadDeAzucar + "gramos de azucar");
}
//Función para servir Limonada
function servirLimonada (){
    console.log ("Sirviewndo la limonada en un vaso");
    vasoDeLimonada = true;

}
// Funcion principal que prepara limonada
function prepararLimonada(cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones (cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon,200, 10); //cant fict de limon, agua y azucar
    servirLimonada();
}
//Llamamos a la funcion principal para preparar limonada
prepararLimonada(5); //Llamado al programa 

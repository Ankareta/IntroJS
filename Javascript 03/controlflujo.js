// // 
// Cuando hablamos de flujo de control hablamos del orden natural en el que se ejecutan las instrcciones de nuestro programa (arriba/abajo, izq/der). Estas instrucciones pueden ser una función, un console.log, un ciclo, etc.

// La importamcia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (un elemento o instrucción detonante).

// Condicionales

// Las condicionales son palabras reservadas que nos permiten evaluar si una condición se cumple o no, bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partiran de un true o false.

// ¿Tengo la camisa limpia?
// Sí: Si voy a la fiesta.
// No: No voy, me quedo en casa.

// ¿Tengo esta variable?
// Sí: ejecuto la línea 57 de mi código
// No: ejecuto la línea 80 de mi código

// Condicional if (si)

// If nos sirve para validar si una condición se cumple o no. Si no se cumple, entonces ejecutamos un bloque dew código que está dentro del if. Si no se cumnple, entonces no hacemos nada.

// Nota: Es la condición más sencilla, pero la más limitante porque sólo nos da una opción.


// If (condición){
//     // bloque de código que se ejecuta si la condición es verdadera (se cumple)
// }

// Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limpia para poder ir.
// */
// if (camisaLimpia = true){ // siempre tiene que ser true para que se ejecute
// console.log("Felipe va a la fiesta con if");
// }

/*
else (de otro modo, de lo contrario, si no, entonces, then)

if (condición detonante){
    //bloque de código que se ejecuta si la condición es verdadera
} else {
    //bloque de código que se ejecuta si la condición es falsa
}

// */

// if (camisaLimpia = true){
//     console.log("Felipe va a la fiesta con if else"); //true
// } else {
//     console.log("Felipe se queda en su casa a hacer la lloración");
// }

/* 
else if 

Esta condición nos ayuda a jugar con más opciones y ,ás detonantes, para tener muchas posibilidades en el mismo código. Para lograresto, vamos a unir el else con el if.

if (condición detonante){
    //bloque de codigo si la condicion es verdadera
} else if (condicion detonante #2){
    //BLOQUE DE CODIGO SI LA CONDICION 1 ES FALSA Y LA CONDICION 2 ES VERDADERA
} else {
    //bloque de codigo si las dos son falsas
}
*/

//Ejemplo 2: Felipe tiene hambre, y quiere comer chilaquiles verdes

// if (hambre=true){
//     console.log("Felipe tiene que comer");
// } else if (chilaquilesverdes=true){
//     console.log("Felipe come chilaquiles");
// } else {
//     console.log("Felipe no come y se pone triste");
// }

//Ejemplo 3: Escribe un programa que me muestre 3 mensajes diferentes. El primer mensaje se muestra si son las 13:00 hrs y deberá imprimir "vamos a descanso". El segundo mensaje se muestra si son las 14:30 y deberá imprimir "Vamos a comer". El tercer mensaje se muestra si no se cumple nada de loi anterior y deberá imprimir "Lo siento mi ciela, seguimos programando"




// let hora= prompt ("Hola, dime un numero")
// if (hora==13){
//         console.log("Vamos a descanso")
// } else if (hora==14){
//         console.log("Vamos a comer");
//     } else {
//         console.log("Lo siento mi ciela, seguimos programando");
//     }

    //Promt es una forma de ingresar datos y poder hacer uso de ellos

    //alert("Hola Gen")
  

    /* Switch (cambiar o intercambiar/ según sea el caso)

    Esta comdicional nos permite hacer mùltiples operaciones y tomar decisiones en función de la opción deseada (estado de la variable)

    Evalúa una expresión comparando el valor de una variable con la expresión o caso, y ejecuta las declaraciones asociadas con este caso, así como los casos que siguen.

    Elementos principales del switch: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida general.

    Expresión con un valor

    switch(expresion){
        case 1:
            //bloque de codigo que se ejecuta si la opcion selecciinada es 1
            break;
        case 2:
            //bloque de codigo que se ejecuta si la opcion selecciinada es 2
            break;
        case 3:
            //bloque de codigo que se ejecuta si la opcion selecciinada es 3
            break;
        default:
            //bloque
    

    /*
//Elevador con Switch


//Funciones aplicables a un consultorio dental
//Funcion calcular costo de una consulta (condicionales)
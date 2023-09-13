// /* Ciclos o bucles (Loops)

// También conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un blooque de código de forma repetida, hasta que se cumpla una condición específica.

// Es importante usar ciclos para automatizar tareas repetitivas.

// en JS existen los siguientes ciclos:
// - while
// -do while
// - for


// Iterar: proceso de repetir una secuencia de instrucciones.
// Estructura de control: herramienta especial para crear algoritmos o programas más dinámicos y flexibles. 

// */

// // While: Ejecuta un bloque de código mientras se cumpla una condición específica. Este ciclo se repite mientras la condición sea verdadera, y el bloque de código se ejecuta aiempre y cuando la condición se mantenga. La condición se evalúa antes de cada iteración. 

// while (miCrushMeQuiere){
//     console.log("sere feliz");
// }

// //Ejemplo consultorio
// let capPac = 50;
// let pacCons = 15;

// while (pacCons < capPac){
//     console.log("seguimos dando servicio");
//     pacCons++;
// }

// var contadorPacientes = 0;

// do {
//     var nombre = prompt ("Ingresa el nombre del paciente");
//     if (nombre) {
//         contadorPacientes ++;
//     }
// }while (confirm("Desea registrar otro paciente?"));


// console.log("Numero total de pacientes: " , contadorPacientes);


// //For (para)


// /* Se utiliza cuando concoemos el número exacto de iteraciones que vamos a realizar. Consiste en 3 partes fundamentales: 
// - inicialización: Se ejecuta antes de que 


// */

// for(var valorInicial = 0; valorInicial<5; valorInicial++) {
//     //inicio, condicion, contador
//     console.log(valorInicial); //impresión
// }

// // Versión más "comercial"
// for (var i = 0; i<5; i++){
//     console.log(i);
// }

//Consultorio dental registro de citas con un for

let cantidadDeCitasDiarias = 5;
for (let i = 1; i <= cantidadDeCitasDiarias; i++) {
    var nombre = prompt("ingresa el nombre " + i);
console.log("Paciente con cita: " + nombre + i);
}


let ahorro = 175;
const = 35;
function ahorrosem 

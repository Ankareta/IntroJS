/* Sistema para registrar pacientes y citas de estos pacientes, utilizando métodos 

-Prompt para registrar los datos
- Datos a registrar: nombre, apellido, fecha,
*/


//Crear un array para almacenar mis pacientes

//La variable pacientes esta declarada e inicializada (tiene un nombre y tiene un valor, a pesar de que su arreglo esté vacío)

//Los indices del arreglo están undefined, porque no hay elementos pero si hay espacios disponibles
let pacientes = []; // pacientes = definido

//función para registrar un nuevo paciente
//Paso 1. Ejecución de mi función. Pido los datos
function registrarPaciente(nombre, edad) {

    //Crear un array dentro de otro array
    //Paso 2. Guardo cada par de datos (nombre y la edad en una variable llamada paciente)
    let paciente = {
        nombre,
        edad,
        citas : []     
    };
// Agregar pacientes al array 
//Paso 3 Ya que tengo el par de datos, le hago un push a mi array para guardar al paciente
pacientes.push(paciente);
return paciente;

}

// Funcion para registrar citas de un paciente
//Cuando ejecuto mi funcion, necesito un paciente, unas hora y una fecha para registrar la cita
function registrarCita(paciente, fecha, hora){

    //Cuando tenga estos datos, buscaré dentro del paciente el apartado citas para hacerle un push ahí
    paciente.citas.push(
        {
            fecha,
            hora
        }
    );
}


//Funcion para mostrar la información del paciente con su cita
function mostrarInfoPaciente(paciente){
    console.log("Nombre: " +paciente.nombre);
    console.log("Edad: " + paciente.edad);
    console.log("Citas registradas: ");


// forEach para imprimir citas
paciente.citas.forEach((cita, indice) =>{
    console.log("Indice: " + indice + "Fecha: " + cita.fecha + "Hora: " + cita.hora)
});
}
//Funcionamiento del forEach anterior
// Definir una variable temporal llamada cita y otra var temp llamada indice
//Cada que se ejecute el forEach, busca y encuentra una cita, asigna esa inf a las var temp e imprime la inf.
//Vuelve a buscar y encontrar otyra cita, y reasigna esa inf a las var temp.






// Registrar un paciente desde la invocacion de la funcion
let paciente1 = registrarPaciente("Felipe", 31);
let paciente2 = registrarPaciente("Naruto", 20);

//Registrar la cita de un paciente desde la invocación de la función regtistrarCita

registrarCita(paciente1, "2023/09/12", "1:00 p.m.");

//Mostrar info
mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);

/* For each 

Es un método de arrays, que tiene como objetivo iterar o recorrer cada elemento del array con la finalidad de aplicarle una función establecida.

Generalmente el for each se utilizsa para imprimir la informaciön  del arreglo

Sintáxis de un forEach

array.forEach(function(elemento, indice, arreglo))

- elemento: el elemento actual del arreglo que se está procesando
- índice: la posición del elemento actual en el array
- arreglo: el array que se está recorriendo


Ejemplo del supermercado

-elemento: producto que compré y que está en el carrito
- índice: la posición de ese producto
- arreglo: carrito

*/

let carritoSuper = ["manzanas", "papitas", "huevo", "jabon de trastes", "pan"];

//Oye JS para cada elemento del tipo "producto" que tenga en una posición dentro del arreglo llamado "carritoSuper", vas a hacer algo

carritoSuper.forEach(function(producto, indice) {//variable temporal llamada producto
    console.log("Producto: " + producto + " con la posición: " + indice);
});


/* 

Un array es un conjunto de datos que se puede almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una colección de variables (que pueden ser diferentes, pero con un mismo contexto)

*/

//variable que están sueltas
let nombre = "Felipe";
let edad = 31;
let puesto = "instructor";

// usar un array (arreglo) para "juntar" nuestras variables

// Agregamos los elementos al array separador por coma
let personasDeLaCH31 = ["Felipe", "Jose Angel", "Evelyn", "Ankaret"];

//Podemos almacenar cualquier tipo de dato en un array
let cosasRandom = ["Pelota", 31, true, undefined, null];

console.log(typeof(cosasRandom)); //object


//Al imprimir el tipo de dato de nuestro arreglo, obtenemos un object porque los arrays son objects (despues veremos que hay muchos tipos de objetos)
//Los arrelos, al ser objetos, cuentan con métodos que nos permiten manipularlos

//Ya que tengo mi arreglo, cómo podemos acceder a esa información? 


console.log(personasDeLaCH31.length);// Muestra la cantidad de elementos en un array

//declarar un array
[5,4,3,2,1]

//inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];

//Acceder a un elemento en específico

console.log(personasDeLaCH31[0]); //Felipe
console.log(personasDeLaCH31[25]); // undefined porque el elemento no existe aún

let index = 4; // declaro el índice en una variable'

//paso esta variable como indice del arreglo
console.log(personasDeLaCH31[index]); //Ankaret

//Ejemplo de un array para un consultorio dental
let pacientes;
let dentistas = ["Dr. Smith", "Dr.Garcia", "Dr.House", "Dr.Simi"];

//Para hacer modificaciones, usamos el index para acceder al dato, y luego lo reasignamos

dentistas[3] = "Similares";
dentistas[8] = "Dr. Strange";

console.log(typeof(dentistas[7]));


/////////////////////////////////////
//funcion para imprimir asteriscos y dividir mi info en la consola
function imprimirAsteriscos (){
    console.log("**************************************************");
}

imprimirAsteriscos();//invocacion


//Métodos de Arrays
let listaDelSuper = ["Gansitos", "Coca-colas", "Arroz", "Atún", "Verduritas"];

//Método lenght para conocer la longitud del array
console.log("La cantidad de elementos de mi array es de: " + listaDelSuper.length);

//Método push () para poner elementos al final de mi array
listaDelSuper.push("Jabon", "Harina");
console.log(listaDelSuper);
//function push ();

//Método pop() para eliminar elementos del final del array
listaDelSuper.pop;
console.log(listaDelSuper);
console.log(listaDelSuper.length)

//Agregar un elemento del array con el método unshift() lo agrega al principio
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper)

// Eliminar el primer elemento del array. shift()

listaDelSuper.shift();
console.log(listaDelSuper);


//Saber la posición de las verduritas
console.log(listaDelSuper.indexOf("Verduritas"))

//Método splice para agregar, eliminar o reemplazar elementos

//nombreArray.splice(inicio, cantidadElementosAEliminar, elementoAInsertar1, elementoAInsertar2,...);

//listaDelSuper.splice(2,0,"Cacahuates", "Manzana"); 

listaDelSuper.splice(5,2,"Platano");
console.log(listaDelSuper);

//Metodo .map()

let numeros = [1,2,3,4,5];


//Crear otro arreglo con los numeros multiplicados x2

let numerosPorDos = numeros.map(function(numeros){
    return numeros *2;
});

console.log(numerosPorDos);

imprimirAsteriscos();
///////

/* 

Imaginemos que tenemos un array de pacientes. Este array tiene datos registradios como nombre, edad. Necesitamoz modificar este arreglo para que revisemos la edad de cada paciente, y si la edad es mayor a 40 años, el paciente necesita una atención especial.

Aspectos a considerar:

- 2 arreglos (original i el modificado )
-condición if 
-- funcion para agregar el nuevo dato a cada elemento
- método map()

*/

//Arreglo de pacientes original

let pacientesConsultorio = [
    {
        nombre: "Felipe",
        edad: 31,
    },
    {
        nombre: "Fatima",
        edad: 26,
    },
    {
        nombre: "Jesus",
        edad: 51,
    }
];
console.log(pacientesConsultorio);

//Funcion para agregar el texto "Necesita atención especial"
function agregarEstadoSalud(paciente){
    let estado = "Saludable";

    //Si el paciente tiene mas de 40 años
    if(paciente.edad > 40){
        estado = "Necesita atención especial";
    }

    return {
        ...paciente,    //Copia de los datos del paciente
        estadoSalud: estado,   //Para agregar un nuevo campo o propiedad a mi objeto
    }
}

//Vamos a aplicar la funcion en cada elemento del arreglo con el map
let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);
console.log(pacientesConsultorioConEstado);

imprimirAsteriscos();





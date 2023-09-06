// Funciones
/* Una función es un bloque de código que realiza una tarea específica cuando se le llama.
Cada Función de JS en un objeto Función
*/

function saludar(){
    console.log("Hola, soy una función");

}
saludar();

/** * Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */
//Declarar Funciones
//La palabra reservada Function, que nos indica que estamos definiendo una función.
//El nombre de la función, dependiendo de la acción a realizar seguido de un par de paréntesis () después del nombre. En este caso no tenemos ninguno. 
// Seguido de un juego de llaves para cerrar el bloque de código.
//Dependiendo de las instrucciones dentro del cuerpo de la función y del propósito de la misma, se determina si la función retorna un valor. 
// Llámamos una función y le vamos a almacenar un resultado

function suma (a,b){
    return a+b;
}
var resultado = suma(5,3)
console.log(resultado);
/*La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */
function saludar(nombre) {
    console.log("Hola, " + nombre + " ! ");
}
saludar("Anki"); //imprime el saludo
/** * La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. */

//Hoisting
//Es fundamental en el entendimiento de la forma en que se ejecuta nuestro código de JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo,lo quye hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código. 
// Yo puedo invocar una función antes de siquiera declararla


console.log(miVariable); // No da error, pero imprime "undefined"
var miVariable=10;
//Scope = Alcance, hace referencia al alcance de una variable dentro del código.
// Global: quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del código.
// Var: no es tan recomendado, por comportamiento de la variable y la poca adaptabilidad.
// let : es preferible e incluso más segura de utilizar porque además de funcionar de manera global, también puede ser local.
//const: se refiere, por su nombre tan intuitivo, a constante, su valor no puede ser reasignado.



//Variable Local
function funcionConVariableLocal(){
    var mensaje= "Esta es una variable Local";
    console.log(mensaje);
}

//funcionConVariableLocal ();
//var mensaje = "Holis";
//console.log(mensaje);


/* * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. */

//Variable Global
var mensajeGlobal = "Esta es una variable global"
function funcionConVariableGlobal (){
    console.log(mensajeGlobal)
}
funcionConVariableGlobal(); //la estamos llamando


/**En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. */

//Funcionnes Anónimas 

//Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como par[ametros en otras funciones.

//La diferencia principal de estas funciones es que se declaran sin un nombre

// function (){
//     console.log("Hola vida");
//     } //Función anónima 
    const saludo = function() {
        console.log ("Hola vida");
    }
saludo();

//Funciones Flecha

//Una forma más concisa de definir funciones anónimas. Se le llama flecha debido a su sintáxis que utiliza (=>)
//Básicamente, se trata de reemplazar la palabra function y añadir 
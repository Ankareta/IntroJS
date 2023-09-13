console.log("whats up")
/*
Operador

Un elemento que nos permite realizar una operación entre dos o más elementos.

-Operadores aritméticos (+, -, *, /)
-Operadores de asignación (=, / asignación)
-Operadores de cadenas (toLowerCase, toUpperCase, trim, toString, concat)
-Operadores lógicos (&&, ||, !)
-Operadores de comparación ( <, >, <=, >-, ==, === /  igualdad, igualdad estricta))

////////////////

Operadores aritméticos

Son operadores que nos permiten tomar valores numéricos como sus operandos y retornar un valor numérico único. Corresponden a operaciones matemáticas. 





*/





//Suma (+): Se utiliza para sumar dos números.
let resultado = 5 + 3; // resultado contendrá el valor 8 


//Resta (-): Se utiliza para restar un número de otro.
let resultado1 = 10 - 4; // resultado contendrá el valor 6

//Multiplicación (*): Se utiliza para multiplicar dos números.
let resultado2 = 6 * 3; // resultado contendrá el valor 18

//División (/): Se utiliza para dividir un número por otro. La división por cero produce un valor especial llamado "Infinity" (infinito).
let resultado3 = 15 / 3; // resultado contendrá el valor 5

//Módulo (%): Se utiliza para obtener el resto de una división entre dos números.
let resultado4 = 10 % 3; // resultado contendrá el valor 1 (el resto de 10 dividido por 3)

//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable.
let numero = 5;
numero++;
// ahora numero contendrá el valor 6

//Decremento (--): Se utiliza para disminuir en 1 el valor de una variable.
let numeros = 8;
numeros--; // ahora numero contendrá el valor 7



//variables
let numero1 = 10;
let numero2 = 2;
let numero3 = "5";

//Operaciones
suma = numero1 + numero2; // 12
resta = numero1 - numero2; // 8
multiplicacion = numero1*numero2
division = numero1/numero2
exponenciacion = 10**2 // es obsoleto porque ya hay un metodo para esto

//Impresion del valor con incremento
console.log("Valor del numero 1 antes del incremento", numero1)

//NOTA: Cuando usamos incrementos 
/////////INCOMPLETO



/* Operadores de comparacion 

Operadores que nos permiten comparar dos datos, y al hacerlo obtendremos un valor booleano (true or false)

- mayor que >
- menor que <
- mayor o igual que >=
- menor o igual que <=
- igual ==
- estrictamente igual ===
- no es igual !=
- no es estrictamente igual !==
*/



//Impresiones en pantalla
console.log("Suma de 10 +2 ",suma );// 1 forma
console.log("Suma de 10 +2 ", numero1 + numero2) // 2da forma
console.log("Suma de 10 +2 ", 10 + 2); // tercera forma

console.log("Suma de 10 +2 ", resta)

/*
Operadores de comparacion

Operadores que nos permiten comparar dos datos, y al hacerlo obtendremos un valor booleano (true o false)

 - mayor que (>)
 - menor que (<)
 - mayor o igual que (>=)
 - menor o igual que (<=)
 - igual (==)
 - estrictamente igual (===)
 - no es igual (!=)
 - no es estrictamente igual (!==)



Igual (==)

Sirve para comparar que dos valores sean iguales 


*/


let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

// 13 == "13" //true
// 13 === "13" //false
// 23 > 12 true
// 23 < 12 false


if (edadFelipe >= 18){
    console.log("Puedes ir a la pachangona");
} else {
    console.log("Te quedas en casa");
}



// Dos negaciones es una afirmacion
//!vamos a comer (no vamos a comer)
//!no me gusta Java (no no me gusta Java) (no * no = si)




/*

Operadores de asignacion

Son los operadores que utilizan para asignar un valor a una variable. Se usa el operador =


let edad = 31;
let saldo = 0;

*/




/*Operadores logicos

Nos devuelven un resultado a partir de que se cumpla (o no) una condicion, el resultado es booleano (true  o false).


    - AND &&: Sirve para determinar si dos expresiones son verdaderas. Si ambas son verdaderas, el resultado es verdadero. Si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsas, todo es falso.


*/

let tengoUnCrush = true;
let miCrushMeQuiere = true;


if (tengoUnCrush && miCrushMeQuiere){
    console.log("Estoy feliz");
}else{
    console.log("Haganse a un lado que me quiero automorir");
}


/*
    
    - OR ||: Sirve para determinar si dos expresioones son falsas. Si cualquiera de las dos afirmaciones es verdadera, todo es verdader. Si las dos son falsas, todo es falso.


*/


if (hayChilaquilesVerdes || hayCarneEnSuJugo){
    console.log("Felipe desayuna chido");
} else {
    console.log("Felipe no desayuna chido");
}


/*

NOT (!): Regresa lo contrario de lo que evaluamos


*/



// //Este codigo esta incompleto, puede causar errores (explicacion de anidacion de operadores logicoos)
// let escenario1 = (edadFelipe >= 18 && saldoFelipe = !0); 

// let escenario2 = (edadFelipe >=18 && amigosQueInviten = true);


// if ( escenario1 || escenario2){

// }

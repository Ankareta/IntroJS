/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.



    Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crar instancias (materializacion) de este tipo de objetos. 

    Objeto: Materializacion de la informacion o los datos con los que cuenta mi plantilla o clase.


    /*Mostrar un objeto similar a este
    let Felipe = {
        nombre : "Felipe",
        apellido : "Maqueda",
        edad : 31,
        email : "felipemaqueda@mail.com",
        telefono : "5512345678",
    }
*/


//Creando mi primera clase 

class persona {
    
    //1 . Propiedades o atributos de mi clase de forma general
    nombre = ""; 
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";


    // 3. Defino un constructor que tomara los atributos como "material" para la instancia o creacion de mis objeto
    // El constructor es una funcion especial, cuya funcion es la de construir o instanciar objetos
    // Al pasar los atributos como parametros, es importante cuidar el orden en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }


    //2. Metodos o comportamientos (funciones)
    //Para definir los metodos de mi objeto, ya no utilizo la palabra function(porque estan dentro de una clase)
    hablar(){
        console.log("Hola, estoy hablando...");
    }//Cierre de metodo hablar

    dormir(){
        console.log("Zzzzzzzzz");
    }//Cierre de metodo dormir

    mostrarInfo(){
        console.log("Nombre: " , this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: " , this.edad);
        console.log("Email: " , this.email);
        console.log("Telefono: ", this.telefono);
    }//Cierre de metodo mostrar info

}//Cierre de mi clase persona


/*Instancia de objetos del tipo persona


Sintaxis basica de una instancia

variable nombreObjeto = palabra reservada new nombreClase (parametros o atributos)

*/

let persona1 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "5512345678");

let persona2 = new persona("Naruto", "Uzumaki", 22, "naruto@hokage.com", "1234567800");

let persona3 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "5512345678");

//Imprimir el objeto completo
console.log(persona1);

//Imprimir un atributo de un objeto (apellido)
console.log(persona1.apellido);

//Invocar el metodo del objeto
persona1.dormir();
persona2.mostrarInfo();

//Imprimir dos datos en una misma consola
console.log(persona1.nombre, persona1.apellido);

/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operaciones a nuestro codigo.

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstraccion


*/


class paciente extends persona {
    //  1. Definicion de atributos o propiedades
    doctorAtiende = ""; // nombre del doctor
    historialMedico = ""; //si o no 
    alergias = ""; // si hay alergias
    tipoPaciente = "";


    //3 Generacion de constructor
    constructor (nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
        super (nombre, apellido, edad, email, telefono); //super indica que traemos cosas de la clase superior
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this. alergias = alergias;
    }


    //2. Metodos
    mostrarInfo(){
        console.log("Nombre: " , this.nombre);
        console.log("Apellido: " , this.apellido);
        console.log("Edad: " , this.edad);
        console.log("Email: " , this.email);
        console.log("Telefono: " , this.telefono);
        console.log("Doctor que atiende: " , this.doctorAtiende);
        console.log("Historial Medico: " , this.historialMedico);
        console.log("Alergias: " , this.alergias);
    }
}

//Instancia de un paciente 
let paciente1 = new paciente("Jesus", "Gonzalez", 31, "jesusgonzalez@mail.com", "1122334455", "Doctor Simi", "No tiene", "Penicilina");

//Imprimir objeto pciente
console.log(paciente1);

//Uso dwel metodo mosrar info
paciente1.mostrarInfo();











//Todas las claves y los valores van dentro de comillas
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}


function convertirCaF() {
let Celsius = prompt("Ingrese grados Celsius")
let Faren = (Celsius*1.8)+ 32

return Faren
//Fórmula es C*(9/5) + 32 = F
}
let resultado = convertirCaF()
console.log("El resultado es " + resultado + ".")
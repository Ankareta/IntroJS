let contadorHoraCita= 1;
let limiteCitaDiario = 8;

do{
    let registro = prompt("Ingresa tu nombre para agendar 1 hora de cita: ");

    if(contadorHoraCita < limiteCitaDiario){
        console.log(registro, " registrado con exito!")
        contadorHoraCita++;
    }else{
        console.log("Limite diario excedido")
        break;
    }
}while(confirm("Deseas agendar otra cita?"));

console.log("Numero total de citas agendadas hoy: ", contadorHoraCita);
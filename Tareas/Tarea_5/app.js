/*
//Programa 1 Solicitud de un nombre

let nombre = prompt("Ingrese su nombre");
console.log("Su nombre es:"+ nombre);

//Programa 2 Suma de dos numeros

let mult1 = parseInt(prompt("Ingrese el primer numero:"));
let mult2 = parseInt(prompt("Ingrese el segundo numero:"));
let suma = mult1+mult2;
console.log("La suma es:"+ suma);

//Programa 3 Compuertas logicas

let and = true && true;
let or = true || false;
let not = !false;
console.log("Compuerta AND: true && true"+"\nCompuerta OR: true || false"+"\nCompuerta NOT: !false");
console.log("Compuerta AND: "+and+"\nCompuerta OR: "+or+"\nCompuerta NOT: "+not);

//Programa 4 Uso de las sentencias de control if y else

let valor = parseInt(prompt("Ingrese un numero mayor a 5:"));
if(valor > 5){
    console.log("Bien hecho :3");

}else{
    console.log("Esto no es mayor a 5 :c");
}

//Programa 5 Adivinar un numero aleatorio entre el 1 al 10

let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
console.log(numeroMaquina);

let numeroUser = parseInt(prompt("Adivina un numero del 1 al 10"));

let vidas = 3;

while(numeroMaquina != numeroUser && vidas > 1){
    vidas--;
    if(numeroUser > numeroMaquina){
        numeroUser = parseInt(prompt("El numero secreto es menor, te quedan: "+ vidas + " vidas"));
    }else{
        numeroUser = parseInt(prompt("El numero secreto es mayor, te quedan: "+ vidas + " vidas"));
    }
}

if(numeroMaquina == numeroUser){
    console.log("Ganaste");
}

*/
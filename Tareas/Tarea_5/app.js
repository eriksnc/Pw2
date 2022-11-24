//Programa 1 Solicitud de un nombre

function nom(nombre){
    console.log("Su nombre es: "+ nombre);    
} 

//Programa 2 Suma de dos numeros

function suma(n1,n2){
    console.log(n1+n2);
}

//Programa 3 Compuertas logicas

function cl(){
    let and = true && true;
    let or = true || false;
    let not = !false;
    console.log("Compuerta AND: true && true"+"\nCompuerta OR: true || false"+"\nCompuerta NOT: !false");
    console.log("Compuerta AND: "+and+"\nCompuerta OR: "+or+"\nCompuerta NOT: "+not);    
}   

//Programa 4 Uso de las sentencias de control if y else

function sentencias(valor){
    if(valor > 5){
        console.log("Bien hecho :3");
    
    }else{
        console.log("Esto no es mayor a 5 :c");
    }   
}

//Programa 5 Adivinar un numero aleatorio entre el 1 al 10

function adivina(numeroUser){
    let numeroMaquina = Math.floor(Math.random() * (10 - 1) + 1);
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
        console.log("Ganaste c:");
    }else{
        console.log("Perdiste :c");
    }
    }

let x = parseInt(prompt("Ingrese el numero dependiendo del programa que quiere probar:\n"+"1° Ingreso de nombre\n"+"2° Suma\n"+"3° Compuerta Logicas\n"+"4° Sentencias de control if y else\n"+"5°Adivina un numero del 1 al 10"));

if(x == 1){
    let nombre = prompt("Ingrese su nombre");
    nom(nombre)
    
}
if(x == 2){
    let n1 = parseInt(prompt("Ingrese el primer numero:"));
    let n2 = parseInt(prompt("Ingrese el segundo numero:"));
    suma(n1,n2)
}
if(x == 3){
    cl();
     
}
if(x == 4){
    let valor = parseInt(prompt("Ingrese un numero mayor a 5:"));
    sentencias(valor)  
}
if(x == 5){
   let numeroUser =  parseInt(prompt("Adivina un numero del 1 al 10"));
    adivina(numeroUser);
}
if(x>5 || x < 1){
    alert("Valor no valido")
}
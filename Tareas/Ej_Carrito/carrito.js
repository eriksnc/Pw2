/*
            PRACTICA CARRITO DE COMPRAS:
    El objetivo es crear una aplicacion que nos permita 
    ir agregando elementos a un carrito de compras.
    Con uso de arreglos.
*/
// Creamos el Array
const carrito = [];

while(confirm("Deseas continuar")){
    //Solicitamos al usuario que ingrese una fruta y la guarde en el Array carrito
    carrito.push(prompt("Que fruta quieres?"));
}

//Realiza la impresion de lo que se encuentre en el carrito
for( let i = 0; i < carrito.length; i++){
    console.log(carrito[i]);
}
/*

Pedir al usuario que ingrese un número

Convertir la entrada del usuario a un número entero

Pedir al usuario que ingrese los números y sumarlos

Mostrar la suma de los números ingresados

*/

let cantNumero = parseInt(prompt("Cuantos numeros desea sumar?"))

let suma = 0
for(let i = 0; i < cantNumero; i++){
    let numero = prompt("Ingrese el numero")
    numero = parseInt(numero)
    suma += numero
}
/*
La variable de control en este caso es i, que se inicializa en 0 y se incrementa en 1 en cada iteración del ciclo. 
La condición i < cantNumero se evalúa como verdadera mientras i sea menor que la cantidad de números que el usuario desea sumar. 
Dentro del ciclo, se utiliza prompt() para solicitar al usuario que ingrese cada número y se suman utilizando la variable suma.
*/

console.log("La suma de " + cantNumero + " ingresados es " + suma)

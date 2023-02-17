/*

Escribe un programa que solicite al usuario su edad y 
le muestre un mensaje de acuerdo a la siguiente tabla:

Si la edad es menor que 18 años, mostrar el mensaje "Eres menor de edad".
Si la edad está entre 18 y 65 años, mostrar el mensaje "Eres adulto".
Si la edad es mayor que 65 años, mostrar el mensaje "Eres mayor de edad".
Puedes usar la función prompt() para obtener la edad del usuario y 
la estructura if...else if...else para implementar la lógica del programa. ¡Suerte!

*/

let edad = parseInt(prompt("Ingrese su edad: "))

if (edad < 18) {
    console.log("Eres menor de edad")
} if (edad >= 18 && edad <= 65) {
    console.log("Eres adulto")    
} if (edad > 65 ) {
    console.log("Eres mayor de edad")
}

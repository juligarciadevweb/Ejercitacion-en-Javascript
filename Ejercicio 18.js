/*

Pedir al usuario que ingrese un número y mostrar un mensaje indicando si es positivo, negativo o cero.

Instrucciones:

Pedir al usuario que ingrese un número utilizando el método prompt.
Convertir el valor ingresado por el usuario a un número utilizando el método parseInt.
Usar un condicional if para verificar si el número es mayor que cero, menor que cero o igual a cero.
Mostrar un mensaje en la consola que indique si el número es positivo, negativo o cero.

*/

let numberUser= parseInt(prompt("Ingrese un numero"))

if (numberUser > 0) {
    console.log("El numero es positivo")
} if (numberUser < 0) {
    console.log("El numero es negativo")
}if (numberUser === 0){
    console.log("El numero es 0")
} 


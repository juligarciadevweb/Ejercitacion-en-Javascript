/*

Escribe un programa que pida al usuario un número y determine si es un número primo o no. 
Un número es primo si es divisible únicamente entre 1 y sí mismo.

*/

let number = parseInt(prompt("Ingresa un numero"))

if(number / 1 === 1 && number / number === number){
        alert("Es primo")
} else{
    alert("No es primo")
}




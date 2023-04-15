/*Escribir un programa que pida al usuario ingresar las edades de n personas y 
calcule y muestre por pantalla el promedio de edad, 
la cantidad de personas menores de 18 años y la cantidad de personas mayores o iguales a 18 años.
Puedes comenzar definiendo las variables necesarias para almacenar la cantidad de personas, 
la edad de cada una y los contadores para las edades menores e iguales a 18 y mayores a 18. */

let deseo = parseInt(prompt("Cuantas edades desea ingresar: "))
let cant = 0
let may = 0
let men = 0
let suma = 0

while (cant < deseo) {
    let edades = parseInt(prompt("Ingrese la edad: "))
    suma += edades
    cant++
    if (edades < 18) {
        men++
    } else{
        may++
    }
}

let promedio = suma / cant
console.log("Personas mayores a 18 años: " + may)
console.log("Personas menores a 18 años: " + men)
console.log("El promedio de edad es: " + promedio)

/*
En un colegio se ingresa la calificación final obtenida por cada alumno de un curso. 
El proceso se repite mientras la calificación final ingresada sea menor a 10.
Finalizado el ingreso deberá mostrar el promedio de las notas ingresadas 
y cual fue la mayor nota obtenida.
*/
let nota
let mayor = 0
let suma = 0
let x = 0

    do 
    {   
       nota = parseInt(prompt("Ingrese la nota"))
       //No debes usar la palabra reservada let, porque ya esta declarada previamente
       suma = suma + nota
       //Usamos una compuerta logica clasica para asegurarnos de que la nota se mayor a 0
       if (nota < 10 && suma > mayor) 
        {
            mayor = nota
        } 
        x++
    } while (nota < 10); 

let promedio = suma / x
console.log("El promedio de las notas es "+promedio)
console.log("--")
console.log("La nota mayor es "+mayor)

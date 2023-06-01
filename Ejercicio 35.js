/*
En un colegio se ingresa la calificación final obtenida por cada alumno de un curso. 
El proceso se repite mientras la calificación final ingresada  sea diferente a cero. 
Finalizado el ingreso deberá mostrar el promedio de las notas ingresadas 
y cuál fue la mayor nota obtenida
*/

//Seccion de declaraciones
let caliFin = 0;
let suma = 0;
let cantCali = 0;
let promedio;
let mayorNota = 0;

//Zona de ejecucion principal
caliFin = parseInt(prompt("Ingrese la calificacion final obtenida por el alumno (0 para terminar): "));
while (caliFin !== 0) 
    {
    suma += caliFin;
    cantCali++;
    if (caliFin > mayorNota) 
    {
        mayorNota = caliFin;
    }
    caliFin = parseInt(prompt("Ingrese la calificacion final obtenida por el alumno (0 para terminar): ")); // Vuelvo a leer la nota para repetir el ciclo
}

if (cantCali > 0) 
{
    promedio = suma / cantCali;
    console.log("El promedio es: " + promedio.toFixed(2));
    console.log("La mayor nota obtenida es: " + mayorNota);
} else 
{
    console.log("No se ingresaron calificaciones");
}

//Realize un programa que calcule el promedio de la nota de 10 estudiantes en un examen final

let notas = 0;
let suma = 0;
let i = 10;

while (notas < i) {
    let not = parseInt(prompt("Ingresa el numero: "));
    suma += not;
    notas++;
}

let promedio = suma / i;
console.log("El promedio es: " + promedio);

/*
    Ingresar N valores enteros positivos
    Finalizada la carga indicar
    Cantidad de pares
    Cantidad de impares
    Porcentaje de pares
    Porcentaje de impares
*/

let N = parseInt(prompt("Ingrese la cantidad de valores"))
let X = 0
let num = 0
let sumaPar = 0
let contPar = 0
let sumaImp = 0
let contImp = 0
while (X < N) {
    num = parseInt(prompt("Ingresa un numero"))
    if (num % 2 === 0) {
        sumaPar += num
        contPar++
    } else {
        sumaImp += num
        contImp++
    }

    X++
}

let promedioPar = sumaPar / contPar
let promedioImpar = sumaImp / contImp

console.log("El promedio de los impares es " + promedioImpar)
console.log("El promedio de los pares es " + promedioPar)




/*Desarrollar un programa que solicite la carga de 10 números e imprima la suma de los últimos 5 valores ingresados.*/

let suma = 0;
for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Ingrese un número: "));
    if (i > 5) { //Una combinacion de ciclos te puede salvar la vida, juga duro y a lo basico
        suma += num;
    }
}
console.log("La suma de los últimos 5 números es: " + suma);

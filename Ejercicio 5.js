/*Se debe permitir ingresar dos números, 
luego mostrar la suma, 
el producto de ambos, la resta y su segmentacion*/

let num1 = prompt("Ingrese el primer numero: ")
let num2 = prompt("Ingrese el segundo numero: ")

    //Realizo las operaciones
let producto = num1 * num2
let suma = num1 + num2
let segmentacion = num1/num2
let resta = num1 - num2

    //Muestro los resultados
document.write("La suma es: " + suma)
document.write("La suma es: " + producto)
document.write("La suma es: " + segmentacion)
document.write("La suma es: " + resta)

/*
Ejemplo 1:
Introduzca las coordenadas de un punto en el plano, e indique a qué cuadrante pertenece dicho
punto.

Datos
X: identificador que indica el valor de la abscisas del número ingresado.
Y: identificador que indica el valor de las ordenadas del número ingresado.

Mensajes:
“I cuadrante”
“II cuadrante”
“III cuadrante”
“IV cuadrante”

Condiciones para determinar a qué cuadrante pertenece el punto:
(X > 0) and (Y > 0) => “I cuadrante”
(X < 0) and (Y > 0) => “II cuadrante”
(X < 0) and (Y < 0) => “III cuadrante”
(X > 0) and (Y < 0) => “IV cuadrante”

*/

let X = parseInt(prompt("Ingrese x: "))
let Y = parseInt(prompt("Ingrese y: "))

if(X > 0 && Y > 0){
    console.log("I cuadrante")
} if (X < 0 && Y > 0){
    console.log("II cuadrante")
} if (X < 0 && Y < 0){
    console.log("III cuadrante")
} if (X > 0 && Y < 0){
    console.log("IV cuadrante")
}



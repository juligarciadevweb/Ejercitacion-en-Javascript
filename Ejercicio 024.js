/**

Dado un instante de tiempo expresado en horas y 
en minutos determine en qué momento del día 
se encuentra el tiempo ingresado y muestre como repuesta uno de los siguientes mensajes:
 "Buenos días", "Buenas tardes" o "Buenas noches", de acuerdo con las siguientes reglas:
a. Se considera que es de mañana, desde las 07:00 horas hasta las 14:00 horas.
b. Se considera que es de tarde, pasadas las 14:00 horas hasta antes de las 20:30 horas.
c. Se considera que es de noche, pasadas las 20:30 horas hasta antes de las 07:30 horas.

*/

let fecha = new Date();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();

if (hora >= 7 && hora < 14) {
  console.log("Buenos días");
} else if (hora >= 14 && hora < 20 || (hora == 20 && minutos < 30)) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

/*

Las funciones getHours() y getMinutes() son métodos del objeto Date en JavaScript que se utilizan para obtener 
la hora y los minutos actuales del sistema en el que se está ejecutando el script.
La función getHours() devuelve un número entero que representa la hora actual en formato 
de 24 horas, es decir, un número entre 0 y 23. Por ejemplo, si la hora actual es las 13:45, getHours() devolverá el número 13.

La función getMinutes() devuelve un número entero que representa los minutos actuales, 
es decir, un número entre 0 y 59. 
En el ejemplo anterior, getMinutes() devolvería el número 45.
Estas funciones son útiles para realizar operaciones relacionadas con el tiempo, como la creación de un reloj digital o el cálculo de intervalos de tiempo entre dos momentos determinados.


*/














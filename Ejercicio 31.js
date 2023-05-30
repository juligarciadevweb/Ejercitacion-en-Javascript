/* 
Ingresando el sueldo de un empleado y la antigüedad (cantidad de años de trabajo), 
calcular la bonificación que recibe en el momento del 
Reparto de Utilidades de la Empresa, teniendo en
cuenta que el reparto está relacionado con la antigüedad, de acuerdo con:

Hasta 5 años -----> 10%
Más de 5 años y hasta 10 años -----> 15%
Más de 10 años ------> 20%
*/

let sueldo = parseInt(prompt("Ingrese el sueldo"));
let antiguedad = parseInt(prompt("Ingrese la antigüedad"));
let bonificacion;

if (antiguedad <= 5) {
    bonificacion = sueldo * (10 / 100);
    console.log(`Recibiría una bonificación de ${bonificacion} porque tiene hasta 5 años de antigüedad.`);
} else if (antiguedad > 5 && antiguedad <= 10) {
    bonificacion = sueldo * (15 / 100);
    console.log(`Recibiría una bonificación de ${bonificacion} porque tiene entre 6 y 10 años de antigüedad.`);
} else {
    bonificacion = sueldo * (20 / 100);
    console.log(`Recibiría una bonificación de ${bonificacion} porque tiene más de 10 años de antigüedad.`);
}

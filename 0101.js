/*
Ingresando el sueldo de un empleado y la antigüedad (cantidad de años de trabajo), calcular la
bonificación que recibe en el momento del Reparto de Utilidades de la Empresa, teniendo en
cuenta que el reparto está relacionado con la antigüedad, de acuerdo con:

Hasta 3 años 15%
Más de 3 años y hasta 15 años 45%
Más de 30 años 70%

*/

let s = parseFloat(prompt("Ingrese el sueldo"))
let aj = parseInt(prompt("Ingrese la antiguedad en años"))
let desc1 = s + (s * 0.15); //Hasta 3 años
let desc2 = s + (s * 0.45); //3 -- 15 años
let desc3 = s + (s * 0.70); //30 años

if (aj < 3) 
    {
        console.log("El sueldo es: "+desc1)
    } else if (aj > 3 && aj <= 15)
    {
        console.log("El sueldo es: "+desc2)
    }else
        {
            console.log("El sueldo es: "+desc3)
        }
    


/*
Ingresar el legajo (representado por un número) y la nota de 100 alumnos
obtenida en un examen parcial. 
Mostrar el legajo y nota de aquellos alumnos que aprobaron
dicho examen. El examen se aprueba con 4. Mostrar la cantidad de aprobados.
*/

let x = 0
let contAp = 0
while (x < 100) 
{
    
    let legajo = parseInt(prompt("Ingrese el legajo"))
    let nota = parseInt(prompt("Ingrese la nota"))
        if(nota >= 4)
        {
            console.log("El legajo es "+legajo)
            console.log("La nota es "+nota)
            contAp++
        } 
    x++
}

console.log("La cantidad de aprobados es " + contAp)

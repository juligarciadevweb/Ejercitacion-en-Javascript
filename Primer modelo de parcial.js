/*

Escribe un programa en C que permita registrar información sobre películas 
vistas por diferentes usuarios. 
Cada registro debe contener 
el género (por ejemplo, 0 para Drama, 1 para Comedia, 2 para Acción), 
la edad del usuario que la vio y su género (1 para Masculino y 2 para Femenino).

El programa debe solicitar al usuario ingresar los datos de N registros y 
luego mostrar el promedio de edades de los usuarios de género masculino 
y la cantidad de películas de género Drama 
y comedia vistas por usuarios de género femenino.

*/

let n = parseInt(prompt("Ingrese la cantidad de usuarios a cargar: "))
let peli
let edad
let sex
let sumProm //Suma de la edades para el promedio
let contFem = 0  //Contador del sexo femenino
let contMasc = 0 //Contador del sexo masculino
let contPrim = 0 //Cantidad de películas de género Drama y comedia vistas 
//por usuarios de género femenino

for (let index = 0; index < n; index++) 
{
    peli = parseInt(prompt("Ingrese el genero(0 para Drama, 1 para Comedia, 2 para Acción"))
    edad = parseInt(prompt("Ingrese la edad"))   
    sex = parseInt(prompt("Ingrese el sexo de la persona(1 para Masculino y 2 para Femenino)"))

    sumProm = sumProm + edad

    if(sex == 1)
    {
        contMasc++
    } else {
        contFem++
    }
    
    if(peli == 1 || peli == 0 && sex == 2)
    {
        contPrim++
    }
}

document.write("La cantidad de usuarios masculinos es "+contMasc)
document.write("\n<br/>La cantidad de usuarios femeninos es "+contFem)
document.write("\n<br/>La cantidad de mujeres que vieron peliculas de drama y comedia son "+contPrim)











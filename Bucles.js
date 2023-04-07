let numero = 0

if (numero = 0) {
    numero++ //La variable aumenta su valor en 1
    numero++ //Siempre que ponemos ++ aumenta su valor en 1
    document.write(numero)
}
/*

El if pregunta 1 vez y sigue, mientras el while pregunta siempre 

*/

//WHILE

while(numero <= 6) { //Nunca ejecuta el codigo si la condicion es falsa
    numero++ //Le suma 1
    
    document.write("El numero es " + numero + "<br>")  //Nos imprime una lista de numeros del 1 al 6
}

//DO While

do{ //Primero se hace y luego se pregunta
    //Por lo menos ejecutar el codigo una vez
    
    document.write("El numero es " + numero + "<br>")
    
    numero++ //Va aumentando el contador

} while (numero <= 6) 

                            //Sentencia break

//El break sirve para terminar un ciclo a la fuerza por decirlo de alguna manera
while(numero < 1000){
    numero++ //Aumenta el valor de la variable
    document.write(numero)
    if (numero == 10) { // Al cumplirse esta condicion finaliza el bucle
        break // Termina el ciclo cuando ses cumple esa condicion
    }
}

document.write("Fin")

                                //Ciclo for

/*
    Tenemos que seguir 3 pasos para las variables:
        1)_ Declaramos
        2)_ Inicializamos
        3)_ Iteramos ((Hacer lo mismo varias veces))
*/
 
for (let i = 0; i < 6; i++) { 
    //Primero se crea una variable i
    //I sera 0 para este bloque de codigo
    document.write(i + "<br>")
    //Mientras se cumpla la condicion i aumentara su valor en 1 
    //Se ejecuta mientras i sea menor a 6
    //Se mostrara su valor en consola
}

let i = 6
for (i ; i >= 6; i--) {
    document.write(i)
}

for (let i = 0; i < 11; i++) {
    if (i = 10) {
        break //Para el codigo en ese punto cumplida la condicion
    }
    console.log(i)
}

for (let i = 1; i < 5; i++) {
    if(i==4){
        continue //Lo saltea al numero y sigue contando segun la condicion
    }
    console.log(i)
}

    //For in

let animals = ["Gato", "Perro", "Raton",]
    for (const animal in animals) {
        document.write(animal + "<br>")
} /*Resultado de consola: nos muestra la posision de los elementos
    0
    1
    2        */

for (const animal of animals) {
    document.write(animal + "<br>")
} /* Recorre el objeto y nos muestra sus valores
    El resultado en consola seria:
        Gato
        Perro
        Raton
*/

/*                            GENERALES
    Las variables no se pueden declarar 2 veces:
    Ej: let i = 20
        let i = 30
        
        console.log(i) dara error
*/

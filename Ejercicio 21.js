/*
    Calcular el área de un círculo a partir del radio que nos proporciona el usuario. 
    Utilizamos la constante Math.PI para obtener el valor de pi (3.14159...) 
    y la función Math.pow para elevar el radio al cuadrado

*/

//Ingreso de datos

let radio = parseFloat(prompt("Ingrese el radio"))
const area = Math.PI * Math.pow(radio, 2)
console.log("El area del ciculo es " + area)


/*
Esta función toma dos argumentos: 
el primer argumento es la base y el segundo argumento es la potencia a la que se debe elevar la base.
Ejemplo: Math.pow(2, 2) Math.pow(2, 4) Math.pow(3, 5)

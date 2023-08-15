// Objeto math - basico

//Raiz cuadrada
let numero = Math.sqrt(52) //Regresa la raiz cuadrada de un numero
console.log(numero) //7.211102550927978

//Raiz cubica
let numero2 = Math.cbrt(99) //Regresa la raiz cubica de un numero
console.log(numero2); //4.626065009182742

//Valor maximo
let numero3 = Math.max(56, 654, 896, 888, 657, 900) //Devuelve el valor maximo de un conjunto de numeros
console.log(numero3); //900

//Valor minimo
let numero4 = Math.max(468, 9015, 9844, 700, 5) //Devuelve el valor minimo de un conjunto de numeros
console.log(numero4); //5 

//Numero random
let numero5 = Math.random() //Nos devuelve un numero random entre 0 y 1
console.log(numero5); //0.18858686

//Numero redondeado
let numero6 = Math.random()*100 //Multiplicamos el 0.16549688 * 100 = 16
let numero7 = Math.round(numero6) //89 o 95 o 10
console.log(numero7);

//Redondeo a la baja
let numero8 = Math.floor(8.666) //Retorna al entero mas chico 
console.log(numero8); //8

//Redondeo medio
let numero9 = Math.fround(8.65555555555555555555555555555565658) //Devuelve la representación flotante de precisión simple más cercana de un número.
console.log(numero9); //8.655555725097656

//Redondeo completo

let numero10 = Math.round(9.66666666666) //Devuelve una expresión numérica proporcionada redondeada al entero más próximo.
console.log(numero10); //10








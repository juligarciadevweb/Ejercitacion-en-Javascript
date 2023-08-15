                    //Metodos de cadenas

let cadena = "cadena de prueba"
let cadena2 = "cadena 2" 

                   //Concat
let resultado = cadena.concat(" hola")
//Concat junta 2 o mas cadenas y retorna una nueva

                    //StartWith
let res = cadena.startsWith(cadena2)
//Si una cadena empieza con los caracteres de otra cadena devuelve true
console.log(res)

                    //EndWith
//Si una cadena termina con los caracteres de otra cadena devuelve true
let res1 = cadena.endsWith(cadena2)
console.log(res1)

                    //includes
let cadena3 = "Cadena de wwe"
let cadena4 = "wwe" //La cadena 4 esta incluida en la cadena 3
let res3 = cadena3.includes(cadena4)
console.log(res3)

//Podemos pedirle la comparacion con un valor especifico
let res4 = cadena3.includes("idiota") //En este caso nos dara falso
let res5 = cadena3.includes("Cadena") //En este caso nos dara true

                    //IndexOf
let inOF = "Solo los locos cambian el mundo mundo mundo mundo mundo"
let res6 = inOF.indexOf("locos") //La palabra locos empieza en la posicion 9 de la cadena
let res7 = inOF.indexOf("Solo") //La palabre solo empieza en la posicion 0
let res8 = inOF.indexOf("comision") //Nos devuelve -1 porque la palabra no existe en la comision
let res9 = inOF.indexOf("mundo") //Nos devolvera 26 porque es la primera posicion que agarra la palabra
let res10 = inOF.lastIndexOf("mundo") //Nos devolvera 50 porque es la ultima posicion que agarra la palabra
//Esto sabiendo que se leera de izquierda a derecha, osea el ultimo indice

//Combinacion de indices
document.write(inOF[4] + inOF[7])

                    //PadStar y PadEnd
let cad1 = "He estado perdiendo el sueño"
let resTan = cad1.padStart(80,"Amiga")
//La rellena hasta que llega al numero de caracteres y como parametro x
//Siendo la palabra "amiga" el parametro y
let resTanEd = cad1.padEnd(100, "Hola ")
//Es lo mismo que el anterior, pero lo rellena al final
document.write(resTanEd)

                    //Repeat
let cad33 = "Nunca es tarde para volver alli.... "
let resTald = cad33.repeat(2)
console.log(resTald)  
//Nunca es tarde para volver alli.... Nunca es tarde para volver alli.... 

                    //Split
/* El método split() en JavaScript se utiliza para dividir
una cadena de texto en un array de subcadenas basadas 
en un separador que especifiques. 
Aquí tienes un ejemplo de cómo se utiliza */

const cad100 = "Hola,esto,es,una,cadena"
const separador = ","
const resu = cad100.split(separador)
console.log(resultado); // Esto imprimirá: ["Hola", "esto", "es", "una", "cadena"]

                    //Substring
//Subdivide los elementos de una cadena, imprime los indices dados en el intervalo
let caden = "Me estoy volviendo loco, es buena señal"
let resNec = caden.substring(0,4)//Es como un X,Y de la cadena
console.log(resNec)

                    //Uppercase y lowercase
let concat3 = "Cuando fue que se fue tu amor?"
let concatename = concat3.toLowerCase() //cuando fue que se fue tu amor?
let concatenameUpper = concat3.toUpperCase() //CUANDO FUE QUE SE FUE TU AMOR?
console.log(concatename)
console.log(concatenameUpper)

                        //Trim end y start

const textoConEspacios = "   Hola, soy un texto con espacios   ";
const textoSinEspacios = textoConEspacios.trim(); //se utiliza para eliminar los espacios en blanco al principio y al final de una cadena
const textoConEnd = textoConEspacios.trimEnd() //Se utiliza para eliminar los espacios del final
const textoConStart = textoConEspacios.trimStart() //Se utiliza para eliminar los espacios en blanco del inicio

console.log(textoSinEspacios); // "Hola, soy un texto con espacios"
console.log(textoConEnd) //   Hola, soy un texto con espacios
                //Se borraron los espacios del final
console.log(textoConStart) //Hola, soy un texto con espacios   
                //Se borraron los espacios del inicio
        
/*El método trim() no afecta los espacios en blanco dentro de la cadena, 
solo elimina los espacios al principio y al final. 
Esto puede ser útil para limpiar la entrada 
del usuario antes de procesarla o para comparar cadenas sin considerar los espacios en blanco adicionales.
*/





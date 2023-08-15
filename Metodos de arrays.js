                    //Transformadores

//Estos metodos cambian al array, cambian el elemento definido previamente
let nombre = [`pedro`, `maria`, `jorge`]

//Metodo Pop

let res = nombre.pop()  // Remueve el ultimo elemento del array y lo devuelve
console.log(res) // jorge

//Metodo Shift

let res1 = nombre.shift() //Remueve el primer elemento del array y lo devuelve
console.log(res1) // pedro

//Metodo Push - opuesto a pop

let res2 = nombre.push("julian") //Podemos ver el indice que tiene el ultimo elemento que agregamos al array
//Nos da el indice del ultimo elemento agregado como string en el argumento de la misma funcion
console.log(res2);  //4

//Metodo Reverse

let res3 = nombre.reverse() //Invierte el orden de los elementos de un array
console.log(res3); // [ 'jorge', 'maria', 'pedro' ]

//Metodo unshift - opuesto a shift

let res4 = nombre.unshift("alex") //agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
console.log(res4) // 4

let nombre1 = [0,558,9,80] 
let res5 = nombre1.unshift(7,9,7) 
console.log(nombre1 + res4) //7,9,7,0,558,9,807

//Metodo sort
 
//Ordena los elementos segun el orden lexicografico/de diccionario
let name2 = [5,6,8,9,3,8,7,3.4,66,6.3,4.2,7]
let res6 = name2.sort()
console.log(res6); // [ 3, 3.4, 4.2, 5, 6, 6.3, 66, 7, 7, 8, 8, 9 ]

//Metodo splice

//Es una herramienta poderosa para manipular arrays en JavaScript, 
//ya que permite agregar, eliminar y reemplazar elementos en posiciones específicas.

let fruits = ['apple', 'banana', 'cherry', 'date'];
fruits.splice(1, 2);  // Elimina 2 elementos a partir del índice 1 
//Resultado: ['apple', 'date']
    
    //Reemplazar elementos

let colors = ['red', 'green', 'blue'];
colors.splice(1, 1, 'yellow', 'purple');  // Reemplaza 1 elemento en el índice 1
// Resultado: ['red', 'yellow', 'purple', 'blue']

    //Agregar elementos:

let numbers = [1, 2, 6, 7];
numbers.splice(2, 0, 3, 4, 5);  // Agrega elementos en el índice 2
//Resultado: [1, 2, 3, 4, 5, 6, 7]

    //Eliminar y agregar elementos:

let letters = ['a', 'b', 'c', 'd', 'e'];
letters.splice(1, 2, 'x', 'y', 'z');  // Elimina 2 elementos y agrega 3 nuevos elementos
// Resultado: ['a', 'x', 'y', 'z', 'd', 'e']

    
                //Metodos accesores

//Join
let nombres = ['pedro', 'diego', 'juanucho', 'dalto']
let r = nombres.join(' - ') //Une los elementos de la matriz y en una cadena y la devuelve
console.log(r) //Resultado: pedro - diego - juanucho - dalto

//Slice
let r2 = nombres.slice(1,3) //Nos devuelve un subarray con las caracteristicas del intervalo mismo en el indice
console.log(r2); // [ 'diego', 'juanucho' ]
let r22 = nombres.slice(0, -1) //Nos seleccionara todos menos el ultimo elemento
console.log(r22); // [ 'pedro', 'diego', 'juanucho' ]
let r222 = nombres.slice(0,-2) //Nos sacara 2 elementos
console.log(r222); // [ 'pedro', 'diego' ]

                //De repeticion

/**Un ciclo "for each" en JavaScript generalmente se implementa utilizando 
 el método forEach() que está disponible para las matrices (arrays). 
*/

const array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
    console.log(element);
});
/**En este ejemplo, el método forEach() 
recorre cada elemento del array y ejecuta la función proporcionada para cada elemento. 
La función que pasamos como argumento toma un parámetro que representa el elemento actual del array.
*/
const array2 = [1, 2, 3, 4, 5];

array2.forEach(element => {
    console.log(element);
});

/*El método forEach() es útil cuando quieres realizar una acción en cada elemento de un array, 
como mostrarlos en la consola, actualizar valores, realizar cálculos, etc.
*/


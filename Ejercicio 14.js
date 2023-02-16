//Crear una función que tome como argumento una cadena de texto y 
//retorne el número de caracteres que tiene la cadena.

function contarCadena(cadena){
    let contador = cadena.length;
    console.log(contador);
}

let inicial = prompt("Dame una cadena");
contarCadena(inicial);

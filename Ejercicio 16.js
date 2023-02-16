/*
    Escribe una función en JavaScript que tome un número como argumento y devuelva el doble del número. 
    Luego, pídele al usuario que ingrese un número y muestra en la consola el doble del número ingresado por el usuario utilizando la función que creaste.
*/

function doble(numero) {
    let number = numero *2 
    return number //Sirve para devolver un valor desde una función.
  }
  
  let numeroUsuario = prompt("Ingresa un número");
  let resultado = doble(numeroUsuario);
  console.log(resultado);

  /*
    El usuario ingresa un número, se llama la función doble(), 
    se multiplica el número por 2 y se devuelve el resultado. 
    Luego se muestra el resultado en la consola.
  */

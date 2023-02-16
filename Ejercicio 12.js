/*
Crea una función llamada esPar 
Que tome un número como parámetro  
devuelva true si el número es par, y false si es impar.
*/ 

function esPar(number) { //Definimos la funcion
    if (number % 2 === 0) {
      return "Es par";
    } else {
      return "Es impar";
    }
  }
  
  //Aquí recien pedimos el numero al usuario
  let numero = prompt("Dame un numero");
  let resultado = esPar(numero); 
  //Invocamos la funcion con el argumento dado por el usuario
  console.log(resultado); //Imprimimos el argumento
  

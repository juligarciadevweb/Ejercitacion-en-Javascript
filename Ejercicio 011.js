//Genera un número aleatorio entre 1 y 100, pide al usuario que adivine cuál es ese número. 
//Si el usuario no adivina el número, se le da una pista indicando si el número que está buscando es mayor o menor que el que ha introducido.


let number1 = Math.floor(Math.random() * 100)
let user2 = parseInt(prompt("Tirame un numero del 1 al 100"))
let contador = 0

while(user2 !== number1){
    if(user2 < number1){
      alert("Es un numero mayor")
    }else if(user2 > number1){
      alert("Es un numero menor")
    }
    contador++
    user2 = parseInt(prompt("Inténtalo de nuevo"));
  }

document.write("¡Felicidades! Has acertado el número en " + (contador + 1) + " intentos")

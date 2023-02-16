// Crea una función que tome un número entero y devuelva su valor absoluto.
// Puedes utilizar la función Math.abs() para obtener el valor absoluto de un número

function valorAbsoluto(num){
    let number = Math.abs(num)
    console.log("El valor absoluto es: " + number) //Imprime el resultado
}

let numero = prompt("Dame un numero");
valorAbsoluto(numero); // Invocamos la funcion con el argumento

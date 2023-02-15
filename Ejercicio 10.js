//Generar un número aleatorio entre 1 y 10 y pedirle al usuario que adivine cuál es ese número

let numberAl= Math.floor(Math.random() *10)

let user = prompt("Dame un numero")

if(numberAl === user){
    alert("Adivinaste")
}else{
    alert("No adivinaste")
}

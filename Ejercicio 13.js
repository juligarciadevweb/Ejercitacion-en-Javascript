/*
  Escribe un programa que pida al usuario ingresar dos números y 
  luego muestre por consola cuál de los dos números es mayor.
*/ 

//Defino las variables
let num1 = prompt("Dame el primer numero") //Le pido el valor al usuario 
let num2 = prompt("Dame el segundo numero") //Le pedis el segundo valor al usuario

if(num1 >= num2){
    alert("El primer numero es mayor")
} else //Nunca lleva una condicion porque es lo que sucede en caso de que la primera condicion no se cumpla
{
    alert("El segundo numero es mayor")
}

                        //FUNCIONES
//Definicion basica
function saludar(){
    respuesta = prompt("Hola juli como fue tu día")
    if (respuesta == bien) {
        alert("Buenardo")
    } else {
        alert("Una pena")
    }
}

saludar()

//Definicion en variables

saludar = function (){
    respuesta = prompt("Hola juli como fue tu día")
    if (respuesta == bien) {
        alert("Buenardo")
    } else {
        alert("Una pena")
    }
}

//Uso del return

function saludAr(){
    alert("Holiii")
    return "La funcion se ejecuto correctamente"
}

saludAr()

//Uso de parametros

function sumar(num1, num2){
    let res = num1 + num2
    return res
}

sumar() //Le estoy dando los parametros para que realize la suma

function saludAr(nombre){
    let frase = "Hola " + nombre + " espero que estes bien"
    console.log(frase)
}

// Arrow functions

const Hola = (nombre) =>{
    let frase = "Hola " + nombre + " espero que estes bien"
    console.log(frase)
}

Hola("Chris") //Parametro en string

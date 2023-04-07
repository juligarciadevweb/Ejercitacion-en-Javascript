                                //Clases
class animal{
    constructor(especie, edad, color){
        this.especie = especie //Voy a crear una propiedad llamada especie
        this.age = edad //Puedo ponerle el nombre que quiera
        this.color = color
        this.information = 'Soy ${this.especie}, tengo ${this.age} and my color is ${this.color}'
    }
    //A continuacion creamos un metodo
    VerInformacion = ()=>{
        document.write(this.info)
    }
}

let perro = new animal("Caniche", 5, "black")
let gato = new animal("Siames", 8, "red")
//New crea una clase, perro sera un objeto de la clase animal
console.log(perro) // { especie: 'Caniche' , age: 5 , color: 'black' }
console.log(perro.information) //Soy ${this.especie}, tengo ${this.age} and my color is ${this.color}
console.log(gato)
console.log(gato.information)

document.write(gato.information)

//Algoritmo para sumar 10 numeros ciclo repetir
        let suma = 0; // Creamos una variable para guardar la suma de los números

        for (let i = 1; i <= 10; i++) { // Iniciamos el ciclo desde 1 hasta 10
          let numero = parseInt(prompt(`Ingresa el número ${i}:`)); 
          // Pedimos al usuario que ingrese un número y lo convertimos a entero
          suma += numero; // Sumamos el número ingresado a la variable 'suma'
        }

        console.log(`La suma de los 10 números ingresados es: ${suma}`); 
        // Mostramos el resultado en la consola

    /*
    Creamos una variable suma para ir almacenando la suma de los 10 números ingresados. 
    Luego, iniciamos un ciclo for que se ejecutará 10 veces (desde i = 1 hasta i <= 10). 
    En cada iteración del ciclo, pedimos al usuario que ingrese un número utilizando el método prompt
    Convertimos a entero utilizando la función parseInt. 
    Luego, sumamos este número a la variable suma. Al finalizar el ciclo, 
    mostramos el resultado de la suma en la consola utilizando el método console.log.
    */ 

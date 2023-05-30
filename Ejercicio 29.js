/* 
Un Importador adquiere un bien en el extranjero y desea saber cuál será el precio de costo
final de importación, sabiendo que los gastos son:
    a. Impuesto de Aduana: 
        15% para bienes con un valor declarado de U$S 1.500,00 o menor y 
        de 20% para bienes con un valor declarado mayor al monto anterior.
    b. Flete desde el país de origen: U$S 200,00.
        c. Seguro por daños o extravío: 2% del valor declarado del bien
*/
//Lo primero que analizare sera la entrada de datos
let valorDlc = parseInt(prompt("Ingrese el valor declarado del bien"))
//Flete
let flete = 200
//Impuestos de aduana
let imp1 = valorDlc * (15 / 100)
let imp2 = valorDlc * (20 / 100)
//Seguro
let seg = valorDlc * (2 / 100)
//Formulas finales
let valor11 = valorDlc + imp1 + flete + seg
let valor22 = valorDlc + imp2 + flete + seg
if(valorDlc <= 1500.00){
    console.log(`Tendra que pagar un impuesto del 15% cuyo valor sera ${imp1}`)
    console.log(`Sumando el flete, el impuesto, el seguro el coste del producto quedaria en${valor11}`)
} else {
    console.log(`Tendra que pagar un impuesto del 15% cuyo valor sera ${imp2}`)
    console.log(`Sumando el flete, el impuesto, el seguro el coste del producto quedaria en${valor22}`)
}

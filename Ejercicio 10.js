/*

Suponer que si el importe a pagar supera los $2000 
y hasta menos de $5000 se realiza un 5% de descuento, 
si no supera los $ 2000, se muestra un mensaje “Sin descuento”

*/

let importe = parseInt(prompt("Ingrese el importe"))

if(importe > 2000 && importe < 5000){
    let descuento = importe * 0.05;
    let precioConDescuento = importe - descuento;
    console.log("Se realiza un 15% de descuento y queda en " + precioConDescuento)
} if (importe < 2000){
    console.log("No hay descuento")
}

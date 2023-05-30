/*
Una Empresa planea realizar la compra de una propiedad. 
La capacidad financiera de la
empresa está sujeta al valor de la propiedad:
    a. Si el precio de la propiedad es mayor a $ 2.500.000 pagará con dinero propio el 45 %, el
40% mediante préstamo bancario y el saldo del 15% con financiamiento del vendedor.
    b. Si el precio de la propiedad es $ 2.500.000 o menor pagará con dinero propio el 70 % y el
30% mediante financiamiento del vendedor.
El vendedor cobra en concepto de intereses un 6% y el Banco un 16,5 %
*/

function calcularPagoPropiedad() {
    let vp = parseFloat(prompt("Ingrese el valor de la propiedad:"));
  
    let porA, porA2, porA3, porB1, porB2, interesVendedor, interesBanco;
  
    if (vp > 2500000) {
      porA = vp * 0.45;
      porA2 = vp * 0.4;
      porA3 = vp * 0.15;
      interesVendedor = porA2 * 0.06;
      interesBanco = porA2 * 0.165;
  
      console.log("Pagará " + porA.toFixed(2) + " en dinero en efectivo");
      console.log("Pagará " + porA2.toFixed(2) + " con préstamo bancario, incluyendo " + interesBanco.toFixed(2) + " de intereses del banco");
      console.log("Pagará " + porA3.toFixed(2) + " con financiamiento del vendedor, incluyendo " + interesVendedor.toFixed(2) + " de intereses del vendedor");
    } else {
      porB1 = vp * 0.7;
      porB2 = vp * 0.3;
      interesVendedor = porB2 * 0.06;
  
      console.log("Pagará " + porB1.toFixed(2) + " con dinero propio");
      console.log("Pagará " + porB2.toFixed(2) + " con financiamiento del vendedor, incluyendo " + interesVendedor.toFixed(2) + " de intereses del vendedor");
    }
  }
  
calcularPagoPropiedad();
  

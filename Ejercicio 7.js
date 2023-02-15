//Calculo de IMC

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
  
    if (imc >= 30) {
      console.log("¡Cuidado! Tienes obesidad.");
      document.write("Tene Cuidado, tienes obesidad");
    } else {
      console.log("El IMC es: " + imc.toFixed(2));
      document.write("Tu IMC es: " + imc.toFixed(2));
    }
  }
  
  calcularIMC(70, 1.30);
  

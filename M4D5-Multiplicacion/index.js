function solicitarNumero() {
  let numero = prompt("Ingrese un número entre 1 y 20:");
  numero = parseInt(numero);
  if (numero >= 1 && numero <= 20) {
      return numero;
  } else {
      console.log("Número fuera del rango");
      return null;
  }
}

function mostrarTablasDeMultiplicar(num) {
  for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
          console.log(`${i} x ${j} = ${i * j}`);
      }
      console.log('-');
  }
}

function mostrarFactoriales(num) {
  for (let i = 1; i <= num; i++) {
      let factorial = 1;
      for (let j = 1; j <= i; j++) {
          factorial *= j;
      }
      console.log(`Factorial de ${i} es: ${factorial}`);
  }
}

let numeroIngresado = solicitarNumero();
if (numeroIngresado) {
  console.log(`Tablas de multiplicar del 1 al ${numeroIngresado}:`);
  mostrarTablasDeMultiplicar(numeroIngresado);

  console.log(`Factoriales del 1 al ${numeroIngresado}:`);
  mostrarFactoriales(numeroIngresado);
}
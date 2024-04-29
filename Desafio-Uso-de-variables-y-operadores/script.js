/*

Inicio.

        Pedir al usuario que ingrese el primer número (num1).
        Pedir al usuario que ingrese el segundo número (num2).
        
        Verificar si ambos números son diferentes y mayores a cero. Si alguno de los números no cumple con la condición, mostrar un mensaje de error y volver a pedir los números.
    
        Suma: Calcular num1 + num2.
        Resta: Calcular num1 - num2.
        Multiplicación: Calcular num1 * num2.
        División: Calcular num1 / num2.
        Módulo: Calcular num1 % num2 (verificar que num2 no sea cero).

    	Mostrar resultados las operaciones anteriores.
        
        Fin.

*/

//Ejemplo tomado de la clase del día 27 || https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt

function myFunction() {
  let num1 = prompt("Ingrese el primer número");
  let num2 = prompt("Ingrese el segundo número");

  // Validamos que ambos números sean diferentes y mayores a cero
  if (num1 === num2 || num1 <= 0 || num2 <= 0) {
      alert("Por favor ingrese dos números diferentes y mayores a cero.");
      return;
  }

  num1 = parseInt(num1);
  num2 = parseInt(num2);

  document.write("La suma es: ");
  document.write(num1 + num2);
  document.write("<br>");

  document.write("La resta es: ");
  document.write(num1 - num2);
  document.write("<br>");

  document.write("La multiplicación es: ");
  document.write(num1 * num2);
  document.write("<br>");

  document.write("La división es: ");
  document.write(num1 / num2);
  document.write("<br>");

  document.write("El módulo es: ");
  document.write(num1 % num2);
}

//myFunction();
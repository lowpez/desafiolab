function jugarCachipun() {
  var totalPartidas = prompt("¿Cuántas veces quieres jugar contra la computadora?");
  totalPartidas = parseInt(totalPartidas);

  for (var i = 0; i < totalPartidas; i++) {
      var eleccionUsuario = prompt("Elige tu jugada: piedra, papel o tijera");
      eleccionUsuario = eleccionUsuario.toLowerCase();
      var opciones = ['piedra', 'papel', 'tijera'];
      var eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

      alert("La computadora eligió: " + eleccionComputadora);

      if (eleccionUsuario === eleccionComputadora) {
          alert("Es un empate.");
      } else if (eleccionUsuario === "piedra") {
          if (eleccionComputadora === "tijera") {
              alert("¡Felicidades, has ganado :)!");
          } else {
              alert("Has perdido contra la máquina.");
          }
      } else if (eleccionUsuario === "papel") {
          if (eleccionComputadora === "piedra") {
              alert("¡Felicidades, has ganado :)!");
          } else {
              alert("Has perdido contra la máquina.");
          }
      } else if (eleccionUsuario === "tijera") {
          if (eleccionComputadora === "papel") {
              alert("¡Felicidades, has ganado :)!");
          } else {
              alert("Has perdido contra la máquina.");
          }
      } else {
          alert("Parece que ingresaste una opción inválida.");
      }
  }
}

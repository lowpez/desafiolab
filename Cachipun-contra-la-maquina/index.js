function jugarCachipun() {
    var numeroPartidas = prompt("¿Cuántas veces quieres jugar contra la computadora?");
    var contador = 0;

    while (contador < parseInt(numeroPartidas)) {
        var eleccionUsuario = prompt("Elige tu jugada: piedra, papel o tijera").toLowerCase();
        var jugadaComputadora = Math.floor(Math.random() * 3);
        var eleccionComputadora;

        if (jugadaComputadora === 0) {
            eleccionComputadora = "piedra";
        } else if (jugadaComputadora === 1) {
            eleccionComputadora = "papel";
        } else {
            eleccionComputadora = "tijera";
        }

        alert("La computadora eligió: " + eleccionComputadora);

        if (eleccionUsuario === eleccionComputadora) {
            alert("Es un empate.");
        } else {
            if (eleccionUsuario === "piedra") {
                if (eleccionComputadora === "tijera") {
                    alert("¡Felicidades, has ganado :) !");
                } else {
                    alert("Has perdido contra la máquina.");
                }
            } else if (eleccionUsuario === "papel") {
                if (eleccionComputadora === "piedra") {
                    alert("¡Felicidades, has ganado :) !");
                } else {
                    alert("Has perdido contra la máquina.");
                }
            } else if (eleccionUsuario === "tijera") {
                if (eleccionComputadora === "papel") {
                    alert("¡Felicidades, has ganado :) !");
                } else {
                    alert("Has perdido contra la máquina.");
                }
            } else {
                alert("Esa no es una opción válida, elige piedra, papel o tijera.");
                continue;
            }
        }
        contador++;
    }
}
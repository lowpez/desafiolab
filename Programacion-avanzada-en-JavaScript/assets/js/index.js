// Importamos las clases específicas de animales desde el archivo 'Tipos.js'.
// Cada clase representa un tipo de animal con sus atributos y métodos específicos.
import { Leon, Lobo, Oso, Serpiente, Aguila } from './Tipos.js';

// Importamos el módulo 'animales' desde el archivo 'Animales.js'.
// Este módulo contiene una función para obtener datos de los animales desde un archivo JSON.
import animales from './Animales.js';

// Añadimos un event listener al elemento select con id 'animal'.
// Este evento se dispara cada vez que se selecciona un animal diferente en el dropdown.
document.getElementById('animal').addEventListener('change', async (event) => {
    // Obtenemos el valor seleccionado del dropdown.
    const selectedAnimal = event.target.value;

    // Llamamos a la función getData del módulo animales para obtener los datos.
    const data = await animales.getData();

    // Buscamos el animal seleccionado en los datos obtenidos.
    const animalData = data.find(animal => animal.name.toLowerCase() === selectedAnimal.toLowerCase());

    // Si encontramos datos para el animal seleccionado, mostramos la imagen en el div de preview.
    if (animalData) {
        document.getElementById('preview').innerHTML = `<img src="assets/imgs/${animalData.imagen}" alt="${selectedAnimal}" class="img-fluid mx-auto d-block h-100">`;
    }
});

// Añadimos un event listener al botón con id 'btnRegistrar'.
// Este evento se dispara al hacer clic en el botón para registrar un nuevo animal.
document.getElementById('btnRegistrar').addEventListener('click', async () => {
    // Obtenemos los valores seleccionados/ingresados en el formulario.
    const nombre = document.getElementById('animal').value;
    const edad = document.getElementById('edad').value;
    const comentarios = document.getElementById('comentarios').value;

    // Validamos que se haya seleccionado un animal.
    if (!nombre) {
        alert('Por favor, selecciona un animal válido.');
        return;
    }

    // Validamos que se haya seleccionado una edad.
    if (!edad) {
        alert('Por favor, selecciona una edad válida.');
        return;
    }

    // Validamos que se hayan ingresado comentarios.
    if (!comentarios.trim()) {
        alert('Por favor, ingresa comentarios válidos.');
        return;
    }
    
    // Llamamos a la función getData del módulo animales para obtener los datos.
    const data = await animales.getData();

    // Buscamos el animal seleccionado en los datos obtenidos.
    const animalData = data.find(animal => animal.name.toLowerCase() === nombre.toLowerCase());

    // Si no encontramos datos para el animal seleccionado, mostramos un mensaje de alerta.
    if (!animalData) {
        alert('Por favor, selecciona un animal válido.');
        return;
    }

    // Creamos una instancia del animal seleccionado usando operadores ternarios.
    let animal = nombre === 'Leon' ? new Leon(nombre, edad, animalData.imagen, comentarios, animalData.sonido) :
                nombre === 'Lobo' ? new Lobo(nombre, edad, animalData.imagen, comentarios, animalData.sonido) :
                nombre === 'Oso' ? new Oso(nombre, edad, animalData.imagen, comentarios, animalData.sonido) :
                nombre === 'Serpiente' ? new Serpiente(nombre, edad, animalData.imagen, comentarios, animalData.sonido) :
                nombre === 'Aguila' ? new Aguila(nombre, edad, animalData.imagen, comentarios, animalData.sonido) :
                (() => { alert('Animal no reconocido'); return; })();

    // Creamos un nuevo elemento div para la tarjeta del animal.
    const animalCard = document.createElement('div');
    animalCard.className = 'card m-2';
    animalCard.style.width = '18rem';
    animalCard.innerHTML = `
        <img src="assets/imgs/${animal.getImg()}" class="card-img-top img-fluid" alt="${animal.getNombre()}">
        <div class="card-body p-0">
            <button class="btn btn-secondary btn-sm w-100" id="playSound">
              <img height='30' src='assets/imgs/audio.svg'>
            </button>
        </div>
    `;

    // Añadimos un event listener al botón de reproducción de sonido dentro de la tarjeta del animal.
    // Dependiendo del nombre del animal, se llama al método correspondiente para reproducir el sonido.
    animalCard.querySelector('#playSound').addEventListener('click', () => {
        nombre === 'Leon' ? animal.rugir() :
        nombre === 'Lobo' ? animal.aullar() :
        nombre === 'Oso' ? animal.grunir() :
        nombre === 'Serpiente' ? animal.sisear() :
        nombre === 'Aguila' ? animal.chillar() : null;
    });

    // Añadimos un event listener a la imagen del animal dentro de la tarjeta.
    // Al hacer clic en la imagen, se muestra un modal con detalles adicionales del animal.
    animalCard.querySelector('img').addEventListener('click', () => {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `
        <div class="card bg-transparent border-0 text-white">
            <img src="assets/imgs/${animal.getImg()}" class="card-img-top img-fluid" alt="${animal.getNombre()}">
            <div class="card-body">
                <h5 class="card-title">${animal.getNombre()}</h5>
                <p class="card-text">Edad: ${animal.getEdad()}</p>
                <p class="card-text">Comentarios: ${animal.getComentarios()}</p>
            </div>
        </div>
        `;
        $('#exampleModal').modal('show');
    });

    // Finalmente, añadimos la tarjeta del animal al contenedor de animales en investigación.
    document.getElementById('Animales').appendChild(animalCard);
});
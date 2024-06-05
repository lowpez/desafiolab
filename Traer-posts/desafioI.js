
const getPosts = async () => { //Declara una función asíncrona llamada getPosts.
    try {
        // Realiza una solicitud a la API usando fetch y espera la respuesta
        let response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Hace una solicitud a la API usando fetch y espera la respuesta.
        // Convierte la respuesta en formato JSON y la guarda en la variable data.
        let data = await response.json();
        // Verifica que los datos 'data' no sean nulos
        if (data !== null) {
            // Crea un string HTML para cada post y los une en una sola cadena
            // Usa map para crear una cadena HTML para cada post. 
            // Cada post se representa como un elemento de lista (li) dentro de una lista desordenada (ul).
            // Se Mapea cada elemento i del array data a un fragmento de HTML. 
            // Cada fragmento contiene el id, el título en negrita (<b>) y el cuerpo del post.
            const postsInfo = data.map(i => 
                `
                <div>
                    <ul>
                        <li>
                            <span>${i.id}</span>
                            <span><b>${i.title}</b></span>
                            <span>${i.body}</span>
                        </li>
                    </ul>
                </div>
                `).join(''); //  Une todos los fragmentos HTML en una sola cadena.
            // Inserta el HTML generado en el div con id "post-data"
            document.querySelector('#post-data').innerHTML = postsInfo; // Selecciona el div con id post-data y le asigna el HTML generado por postsInfo.
        }
    } catch(error) {
        // Si ocurre algún error durante la solicitud o el procesamiento de los datos, se captura y se muestra en la consola del navegador.
        console.log(error);
    }
};
let iifeGlobal = (() => { // IIFE es una función que se ejecuta inmediatamente después de ser definida.

    let inyectarTodo = (url, id) => {
        id.setAttribute('src', url);
        id.style.display = 'block';
    };

    /**
     * 1 - Implementar el Patrón Módulo mediante IIFE (2 Puntos)
     * inyectarTodo ():
       Función dentro del IIFE que toma una URL y un elemento DOM (identificado por id).
       Establece el atributo src del elemento al valor de la URL y cambia el estilo de visualización del elemento a 'block'.
     */

    return {
        mostrarTodo: (url, id) => inyectarTodo(url, id)
    };

    /**
     * mostrarTodo ():
       Función que se retorna desde el IIFE y está disponible globalmente a través de iifeGlobal.
       Esta función simplemente llama a inyectarTodo().

     */
})();

class Multimedia { // 2 - Establecer una clase padre denominada Multimedia (2 Puntos)

    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    };

    /**
     * El Constructor toma una URL y la almacena en una variable privada _url.
       Define un método getUrl que retorna la URL.
     */

    get url() {
        return this.getUrl();
    };

    setInicio() {
        return `Este metodo es para realizar un cambio en la URL del video.`;
    }
}

class Reproductor extends Multimedia { // 3 - Crear una clase “Reproductor”, siendo hija de la clase padre Multimedia (3 Puntos)
    constructor(url, id) {
        super(url);
        let _id = id;
        this.getId = () => _id;
    }

    /**
     * El Constructor toma una URL y un elemento DOM (id).
       Llama al constructor de la clase padre (super(url)) para inicializar la URL.
       Define una variable privada _id y un método getId para acceder a ella.
     */
    
    playMultimedia() {
        iifeGlobal.mostrarTodo(this.url, this.getId());
    };

    /**
     * Método playMultimedia:
       Llama a mostrarTodo del objeto global iifeGlobal pasando la URL y el ID del elemento.
     */

    setInicio(tiempo) {
        this.getId().setAttribute('src', `${this.url}?amp&start=${tiempo}`);
    }

    /**
     * Método setInicio:
       Modifica el atributo src del elemento DOM para incluir un parámetro de tiempo de inicio (start).
     */
}
    /**
     * Nota: El parametro (url) en playMusica, parecio ser menos permisivo con la inscrustacion de audio musical,
     * por lo que se decide usar la misma url en playPelicula (un trailer de pelicula).
     */

/**
 * 4 - Instanciar la clase hija pasando como argumento la URL y el id para cada etiqueta iframe, 
 * por lo que se deben crear tres instancias, una para música, otra para película y otra para serie, 
 * con sus respectivas URL. (1 Puntos)
 */

let playMusica = new Reproductor('https://www.youtube.com/embed/xiC2iXTXHxw?si=YSDK8minXOerRhDt', musica);
let playPelicula = new Reproductor('https://www.youtube.com/embed/xiC2iXTXHxw?si=YSDK8minXOerRhDt', peliculas);
let playSerie = new Reproductor('https://www.youtube.com/embed/HhesaQXLuRY?si=cyOgw-VYwIlgF-QI', series);

// 5 - Invocamos al método playMultimedia() en cada instancia para inyectar la URL en los elementos DOM respectivos y mostrar el contenido.

playMusica.playMultimedia();
playPelicula.playMultimedia();
playSerie.playMultimedia();

playMusica.setInicio(60);

/**
 * 6 - Utiliza el método “setInicio” para modiﬁcar el tiempo de inicio en alguna de las instancias creadas.
 * playMusica.setInicio(60)
 * Cambia la URL del elemento asociado a playMusica para que empiece a reproducir desde los 60 segundos.
 */